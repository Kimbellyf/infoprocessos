const proxy = [
  {
    context: ['/digesto_api'],
    target: 'https://op.digesto.com.br/',
    changeOrigin: true,
    secure:true,
    pathRewrite: {'^/digesto_api' : ''},
  }
];

module.exports = proxy;