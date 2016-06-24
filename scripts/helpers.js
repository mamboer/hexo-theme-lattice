'use strict';

var pathFn      = require('path');
var _           = require('lodash');
var cheerio     = require('cheerio');
var util        = require('hexo-util');
var publicDir   = hexo.public_dir;
var sourceDir   = hexo.source_dir;
var route       = hexo.route;

var postImgDir  = 'img/post/';      

// Utils
function startsWith(str, start){
    return str.substring(0, start.length) === start;
}

//数组随机排序,
function randomSort(arr, num) {
    var max = arr.length -1,
        arr = arr.slice(0);
    num = num ? Math.min(num, max) : max
    arr.sort(function(a, b){
        return Math.random()-0.5;
    });
    return arr.slice(0, num);
}

// Hexo extensions
hexo.extend.helper.register('raw_link', function(path){
    return 'https://github.com/o2team/o2team.github.io/edit/master/source/' + path;
});

hexo.extend.helper.register('page_anchor', function(str){
  var $ = cheerio.load(str, {decodeEntities: false});
  var headings = $('h1, h2, h3, h4, h5, h6');

  if (!headings.length) return str;

  headings.each(function(){
    var id = $(this).attr('id');

    $(this)
      .addClass('post-heading')
      .append('<a class="post-anchor" href="#' + id + '" aria-hidden="true"></a>');
  });

  return $.html();
});

hexo.extend.helper.register('post_img', function(path){
    // console.log(path)
    if(path.indexOf('http://') === 0 || path.indexOf('https://') === 0 || path.indexOf('//') ===0) return path;
    path = this.url_for((hexo.theme.config.post.img_dir || postImgDir) + path);
    return path;
});

hexo.extend.helper.register('header_menu', function(className){
  var menu = this.site.data.menu,
    result = '',
    self = this,
    lang = this.page.lang,
    isDefaultLang = lang === 'zh-cn',
    path1 = this.path,
    isActive = function(path0){
        if(path0 === 'index.html') {
            return path1 === path0;    
        }
        return (path1.indexOf(path0)!==-1);    
    }

  _.each(menu, function(path, title){
    if (!isDefaultLang && ~localizedPath.indexOf(title)) path = lang + '/' + path;
    var activeClass  = isActive(path) ? " active" : "";
    result += '<li class="' + className + '-item' + activeClass + '">';
    result += '<a href="' + self.url_for(path) + '" class="' + className + '-link">' + self.__('menu.' + title) + '</a>';
    result += '</li>';
  });

  return result;
});

hexo.extend.helper.register('lang_name', function(lang){
    var data = this.site.data.languages[lang];
    return data.name || data;
});

hexo.extend.helper.register('canonical_path_for_nav', function(){
    var path = this.page.canonical_path;

    if (startsWith(path, 'docs/') || startsWith(path, 'api/')){
        return path;
    }
    return '';
});
hexo.extend.helper.register('page_keywords', function(asStr){
    var tags = this.page.tags,
        siteKeywords = hexo.config.keywords.split(', ');

    if (tags) {
        tags.each(function(tag){
            siteKeywords.splice(0, 0, tag.name);
        }); 
    }
    if (asStr) {
        return siteKeywords.join(',');
    }
    return siteKeywords;
});

/**
 * post unique key
 */
hexo.extend.helper.register('post_key', function(path){
    path = new Buffer(path).toString('base64');
    return path;
});

/**
 * filter feature posts
 */
hexo.extend.helper.register('process_posts', function(obj){
    if (obj.o2posts) {
        return obj.o2posts;    
    }
    var items = obj.posts,
        items1 = [],
        items2 = [];
    items.each(function(post){
        if (post.sticky) {
            items1.push(post);    
        } else {
            items2.push(post);           
        }
    });

    obj.o2posts = items1.concat(items2);
    items1 = null;
    items2 = null;
    return obj.o2posts;
});

hexo.extend.helper.register('process_posts2', function(posts, cases){
    //console.log(cases)
    var _posts = posts.toArray();
    var result = [].concat(cases, _posts);
    // console.log(_posts instanceof Array)
    // _posts.forEach(function(post, index){
    //     if (index == 0) {
    //         console.log(JSON.stringify(post));
    //         for ( var key in post){
    //             if (!(post.hasOwnProperty(key)))
    //                 return;
    //                 console.log(key)
    //             }
    //         }
               
    //     })
    // console.log(_posts.length)
    //console.log(result.length)
    return result;
});


hexo.extend.helper.register('formatePosts', function() {
    var self = this;
    var posts = this.site.posts.sort('-date').filter(function(post) {
      return post.published;
    }).map(function(post){
        //var cover = this.post_img.toString();
        //console.log(cover)
        var cover = self.post_img(post.cover),
            path = self.url_for(post.path),
            categories = post.categories.map(function(cat) {
              return {
                name: cat.name,
                slug: cat.slug,
                permalink: cat.permalink
              };
            }),
            tag = post.tags.map(function(tag) {
              return {
                name: tag.name,
                slug: tag.slug,
                permalink: tag.permalink
              };
            });
        return {
            title: post.title,
            subtitle: post.subtitle,
            url:  post.permalink,
            path: path,
            cover: cover,
            author: post.author,
            data: post.date,
            categories: categories
        }
    });
    //console.log(JSON.stringify(posts))

    return posts;
});

hexo.extend.helper.register('searchData', function() {
    var self = this;
    var posts = this.site.posts.sort('-date').filter(function(post) {
      return post.published;
    }).map(function(post, index){
        //var cover = this.post_img.toString();
        //console.log(cover)
        var cover = self.post_img(post.cover),
            path = self.url_for(post.path),
            categories = post.categories.map(function(cat) {
              return {
                name: cat.name,
                slug: cat.slug,
                permalink: cat.permalink
              };
            }),
            tag = post.tags.map(function(tag) {
              return {
                name: tag.name,
                slug: tag.slug,
                permalink: tag.permalink
              };
            });
        return {
            id: index,
            content: post.content,
            title: post.title,
            subtitle: post.subtitle,
            url:  post.permalink,
            path: path,
            cover: cover,
            author: post.author,
            // data: post.date,
            // categories: categories
        }
    });
    //console.log(JSON.stringify(posts))
    console.log(posts)
    return posts;
});








