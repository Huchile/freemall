module.exports = {
  publicPath:'',
  devServer:{
      host:'localhost',
      port:'8081',
      proxy:{
          '/mock':{
              target:'http://localhost:8081',
              ws:false,
              changeOrigin:false  //将主机头的原点改为目标的URL
          }
      }
  }
}
