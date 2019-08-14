module.exports = ({ config, mode }) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      exclude: /(node_modules)/,
      use: [
        {
          loader: require.resolve('awesome-typescript-loader'),
        },
        {
          loader: require.resolve('react-docgen-typescript-loader')
        },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  };
