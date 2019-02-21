import React from 'react';
import { storiesOf } from '@storybook/react';
import Parallax from './components/Parallax';
import ParallaxProvider from './components/ParallaxProvider';

const Element = props => (
    <div>
        <div>
            <div>{props.name}</div>
            {props.children}
        </div>
    </div>
);

storiesOf('<Parallax>', module)
    .add('with vertical offsets', () => (
        <div className="elements">
            <Parallax
                offsetYMin="-50%"
                offsetYMax="50%"
            >
                <Element name="A" />
            </Parallax>
            <Parallax
                offsetYMin="-50%"
                offsetYMax="50%"
                slowerScrollRate
            >
                <Element name="B" />
            </Parallax>
        </div>
    ))
