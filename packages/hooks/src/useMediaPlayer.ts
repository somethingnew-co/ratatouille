import { useCallback, useReducer, RefObject } from 'react';

declare global {
  interface Document {
    mozCancelFullScreen: any;
    msExitFullscreen?: () => Promise<void>;
    webkitExitFullscreen: any;
  }

  interface HTMLMediaElement {
    msRequestFullscreen?: () => Promise<void>;
    mozRequestFullscreen?: () => Promise<void>;
    webkitRequestFullscreen?: () => Promise<void>;
    mozRequestFullScreen?: () => Promise<void>;
  }
}

interface MediaPlayerStateOptions {
  muted: boolean;
  autoPlay: boolean;
  playsInline: boolean;
  loop: boolean;
}

interface MediaPlayerState extends MediaPlayerStateOptions {
  playing: boolean;
  duration: number | null;
}

interface ControlsType {
  stop: () => void;
  seek: (time: number, type?: 'time' | 'percent') => void;
  restart: () => void;
  setPlaying: (bool: boolean) => void;
  setVolume: (volume: number) => void;
  setLooping: (bool: boolean) => void;
  setMuted: (bool: boolean) => void;
  toggleMute: () => void;
  setFullscreen: (bool: boolean) => void;
}

interface MediaPlayerReturnType {
  controls: ControlsType;
  state: MediaPlayerState;
}

interface ActionType {
  type: 'playing' | 'muted' | 'looping' | 'duration';
  payload: any;
}

const initialState: MediaPlayerState = {
  playing: false,
  muted: false,
  autoPlay: false,
  playsInline: false,
  loop: false,
  duration: null,
};

function reducer(state: MediaPlayerState, action: ActionType): MediaPlayerState {
  switch (action.type) {
    case 'playing':
      return { ...state, playing: action.payload };
    case 'muted':
      return { ...state, muted: action.payload };
    case 'looping':
      return { ...state, loop: action.payload };
    case 'duration':
      return { ...state, duration: action.payload };
    default:
      throw new Error();
  }
}

function useMediaPlayer(
  ref: RefObject<HTMLMediaElement>,
  options: MediaPlayerStateOptions,
): MediaPlayerReturnType {
  const init = {
    ...initialState,
    ...(options || {}),
  };

  const [state, dispatch] = useReducer(reducer, init);

  const checkForMedia = (callback: (element: HTMLMediaElement) => void): void => {
    if (!ref.current) return;
    callback(ref.current);
  };

  const checkMedia = useCallback(checkForMedia, [ref]);

  function play(): void {
    checkMedia(media => {
      if (!state.playing) {
        // MyHTMLMediaElement.play() returns a Promise
        const playPromise = media.play();
        playPromise.then(() => {
          dispatch({ type: 'playing', payload: true });
        });
      }
    });
  }

  function pause(): void {
    checkMedia(media => {
      if (state.playing) {
        media.pause();
        dispatch({ type: 'playing', payload: false });
      }
    });
  }

  function stop(): void {
    checkMedia(media => {
      const playPromise = media.play();
      playPromise.then(() => {
        media.pause();
        media.currentTime = 0;
        dispatch({ type: 'playing', payload: false });
      });
    });
  }

  function seek(time: number, type?: 'time' | 'percent'): void {
    checkMedia(media => {
      let newTime = Math.min(media.duration, Math.max(0, time));
      if (type === 'percent' && time > 0 && time < 1)
        newTime = media.duration * Math.min(1, Math.max(0, time));
      else if (type === 'percent')
        throw new Error('If you pass \'percent\' as the type argument, time must be within the range from 0 to 1.');
      media.currentTime = newTime;
    });
  }

  function setFullscreen(bool: boolean): void {
    checkMedia(media => {
      if (bool) {
        if (media.requestFullscreen) media.requestFullscreen();
        else if (media.mozRequestFullScreen) media.mozRequestFullScreen();
        else if (media.webkitRequestFullscreen) media.webkitRequestFullscreen();
        else if (media.msRequestFullscreen) media.msRequestFullscreen();
      }
      else {
        if (document.exitFullscreen) document.exitFullscreen();
        else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
        else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
      }
    });
  }

  function restart(): void {
    checkMedia(media => {
      media.currentTime = 0;
    });
  }

  function mute(): void {
    checkMedia(media => {
      media.muted = true;
      dispatch({ type: 'muted', payload: true });
    });
  }

  function unmute(): void {
    checkMedia(media => {
      media.muted = false;
      dispatch({ type: 'muted', payload: false });
    });
  }

  function toggleMute(): void {
    checkMedia(media => (media.muted ? unmute() : mute()));
  }

  function setVolume(volume: number): void {
    checkMedia(media => {
      const newVolume = Math.min(1, Math.max(0, volume));
      media.volume = newVolume;
    });
  }

  function setLooping(bool: boolean): void {
    if (typeof bool === 'boolean') {
      checkMedia(media => {
        media.loop = bool;
        dispatch({ type: 'looping', payload: bool });
      });
    }
  }

  const setPlaying = (bool: boolean): void => bool ? play() : pause();
  const setMuted = (bool: boolean): void => bool ? mute() : unmute();

  const controls = {
    stop,
    seek,
    restart,
    setPlaying,
    setVolume,
    setLooping,
    setMuted,
    toggleMute,
    setFullscreen,
  };

  return { controls, state };
}

export default useMediaPlayer;
