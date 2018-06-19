config = {
  "name" : "ProjectName",
  "proxy": "",
  "path": {
    "source": "./",
    "dist": "../dist/",
    "styleguile":"../docs/styleguide/",
    "styleguile_cms":"docs/styleguide/",
    "cms":"../cms/",
    "ejs": "ejs/",
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
    "dummy" : "assets/dummy/",
    "node" : "node_modules/",
    "cms_dir":"",
    "cms_theme_path":"wordpress/wp-content/themes/",
    "cms_theme_name":"yswallow_child/"
  },
  "mode":{
    static:true,          // 静的モード
    cms:false,              // CMSモード
    cmstype:"wordpress",   // 使用するCMSの種類
    html:true,            // htmlを使用する場合
    ejs:false               // ejsを使用する場合
  }
};