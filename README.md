
# Lattice

The best hexo theme for showing blog posts in grid view, created and maintained by [AOTU Labs](//aotu.io).

It's named `Lattice`.

[Preview](//aotu.io/)

![o2](https://cdn.rawgit.com/o2team/hexo-theme-lattice/master/preview.webp "aotu.io")

## Installation

### Install

``` bash
$ git clone https://github.com/o2team/hexo-theme-lattice.git themes/lattice
```

**Install Hexo 3.2.0 or above.**

### Enable

Modify `theme` setting in `_config.yml` to `lattice`.

### Update

``` bash
cd themes/lattice
git pull
```

## Features

### Disqus

In your hexo site's configuration (not the theme's configuration).

```yml
# disqus
disqus_shortname: "your disqus shortname"
```

### Duoshuo

`Duoshuo` is a comment system specially for Chinese.

In the theme's configuration:

```yml
# Make duoshuo show UA
# user_id must NOT be null when admin_enable is true!
# you can visit http://dev.duoshuo.com get duoshuo user id.
duoshuo:
  shortname: aotu
  ua_enable: true
  admin_enable: false
  user_id: 0
  #admin_nickname: ROOT
```

### Google Analytics

In your hexo site's configuration,

```yml
google_analytics: "your GA ID"
```

### Baidu Analytics

For Chinese, in your hexo site's configuration,

```
baidu_analytics: "your BA ID"
```

### busuanzi

`busuanzi` is a lighweight analytics plugin, use it to display `pv` and `uv` on every post.

In the theme's configuration,

```yml
busuanzi: true
```

### Code highlight theme

In the theme's configuration,

```yml
# Code Highlight theme
# Available value:
#    normal | night | eighties | blue | bright
# https://github.com/chriskempson/tomorrow-theme
highlight_theme: normal
```

### Custom Logo

In the theme's configuration, you can specify your own logo picture.

```yml
logo:
    url: img/logo-square-120.png
```

### Custom Post Cover and Post Asset Folder

In the theme's configuration,

```yml
post:
    cover: post-default.png
    img_dir: img/post/
```

### Fancybox

`Lattice` uses [Fancybox] to showcase your photos in your posts. 

```
![img caption](img url)
```

### Custom Tag - `pimg`

`pimg` means `post image`, it's a custom tag for you inserting your post's content image quickly.
To use 'pimg', you should put your images into the folder defined in `post.img_dir`.

```
{% pimg imageName [alt text] [JSONImageAttibutes] %}
```

Note: Don't use space charaters in the `alt text` field, replace any space charaters with `%20` if you have to.

For example,

```
{% pimg post-aotu.jpg "An%20Sentence%20WithSpace" '{"title":"hello","class":"test_img"}' %}
```

### Custom Tag - 'tag_cfg'

`tag_cfg` let your access to your site's configuration in your posts.

For example, we can insert the config's description field into a post.

```
{% tag_cfg description %}
```

### Menu

Place your menu data into the `_data` folder of your hexo site.

[Example menu data](https://github.com/o2team/o2team.github.io/blob/hexo/source/_data/menu.yml)

### Lunr (Lattice Specially)

`Lattice` uses the 'hexo-generator-lunr' plugin to implement client-side full text search.

In your hexo site's configuration,

```yml
# lunr
lunr:
  field: all
  path: assets/lunr/
```

For more details about [hexo-generator-lunr](o2team/hexo-generator-lunr)

## Languages

English and Simplified Chinese are the default languages of the theme. You can add translations in the `languages` folder and change the default language in blog's `_config.yml`.

``` yml
language: zh-CN
```

## Development

### Requirements

- Hexo 3.0+
- Node 4.0+ (But not compatible with 6.0+)


[Hexo]: http://hexo.io/
[Fancybox]: http://fancyapps.com/fancybox/
[Font Awesome]: http://fontawesome.io/
[Aotu.io]: https://aotu.io/
