module.exports = ({ config, mode }) => {
    config.module.rules[0].use[0].options.sourceType = "unambiguous";

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      exclude: /(node_modules)/,
      use: [
        {
          loader: require.resolve('awesome-typescript-loader'),
          options: {
            transpileOnly: true
          }
        },
        {
          loader: require.resolve('react-docgen-typescript-loader')
        },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  };
