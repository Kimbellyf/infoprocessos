const proxy = [
    {
      context: '/digesto_api/',
      target: 'http://op.digesto.com.br/',
      pathRewrite: {'^/api' : ''},
      changeOrigin: true
    }
];

module.exports = proxy;