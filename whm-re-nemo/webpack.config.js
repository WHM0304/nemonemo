devServer: {
    port: devServerPort,
    allowedHosts: [`${host}`],
    historyApiFallback: true,
    host: '0.0.0.0',
    proxy: {
      '**': `http://localhost:${process.env.SERVER_PORT}`,
    },
  },