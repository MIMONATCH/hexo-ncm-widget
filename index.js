const { AsyncGetData, readJson, writeJson } = require('./lib/handler');
const path = require('path');
const fs = require('hexo-fs')
const js = hexo.extend.helper.get('js').bind(hexo); 

writeJson();
AsyncGetData(hexo.config.ncm_widget.playlist_id);
// hexo.extend.helper.register('ncmWidget', async () => { 
//     return ncmwidget();
// }, {async: true});
hexo.render.render({path: path.resolve(__dirname, './layout/ncm-widget.ejs')}, {data: readJson(), config: hexo.config.ncm_widget}).then((res) => {
    hexo.extend.helper.register('ncmWidget', () => res);
})

hexo.render.render({path: path.resolve(__dirname, './source/ncm-widget.styl'), engine: 'styl'}).then((res) => {
    hexo.extend.injector.register('head_end', () => "<style>"+res+"</style>");
})

hexo.extend.injector.register('body_end', () => js('lib/ncm/ncm.js'));

hexo.extend.filter.register('before_generate', function(){
    hexo.extend.generator.register('ncm_asset', ()=>[
        {
            path: 'lib/ncm/ncm.js',
            data: function(){
              return fs.createReadStream(
                path.resolve(path.resolve(__dirname, "./lib"),"ncm.js"))
            }
        }
    ]);
})

