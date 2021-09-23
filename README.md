# hexo-ncm-widget Netease Cloud Music Hexo插件
Netease Cloud Widget / 网易云音乐Hexo插件 - ncm music widget 🎵

https://img.shields.io/github/package-json/v/MIMONATCH/hexo-ncm-widget?style=flat-square

添加一个网易云音乐小组件到你的hexo博客

[Demo](https://mimonarchrd.gitee.io)

![](https://static.xiaoblogs.cn/img/20210923115517.png)![](https://static.xiaoblogs.cn/img/20210923115538.png)

## 安装 install

使用npm命令或yarn

- npm

```sh
npm i hexo-ncm-widget
```

- yarn

```sh
yarn add hexo-ncm-widget
```

## 使用 usage

1. 要先获得到你创建的 **歌单** 的ID（可以在网页版的网易云获取）

比如：`playlist?id=6980995853 `则`id=`后为 **歌单** 的 ID

2. 在`hexo`博客根目录下（`_config.yml文件同级目录`）添加如下的配置

```yaml
#ncm widget
ncm_widget:
  enable: true  # enable widget
  playlist_id: '6980995853'  # playlist id 歌单id 需要在''中
```

3. 使用ncm组件helper函数

```ejs
<%- ncmWidget() %>
```

PS. **上面的代码添加进你的主题中**

4. 最后生成网站

```sh
hexo clean && hexo g
```

## 最后 finally

- **请勿使用此插件用作商业用途**
- 网易云API会不定时禁止外部访问，此时只需要重新使用`hexo clean && hexo g`即可

## 许可证

MIT
