config = {
  "name" : "tokiyori_develop",
  "proxy": "",
  "path": {
    "source": "./",
    "dist": "../dist/",
    "styleguile":"../docs/styleguide/",
    "styleguile_dist":"docs/styleguide/",
    "sass": "assets/scss/",
    "css": "assets/css/",
    "img": "assets/img/",
    "svg": "assets/svg/",
    "wp_assets":"assets/wp_assets/",
    "html": "./",
    "php":"php/",
    "js": "assets/js",
    "file": "assets/file/",
    "fonts": "assets/fonts/",
    "node" : "node_modules/",
  },
  "mode":{
    static:false,          // 静的モード
    cms:true,              // CMSモード
    cmstype:"wordpress",   // 使用するCMSの種類
    html:false,            // htmlを使用する場合
    ejs:false               // ejsを使用する場合
  }
};