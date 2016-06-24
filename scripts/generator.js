'use strict';

var pathFn      = require('path');
var _           = require('lodash');
var cheerio     = require('cheerio');
var util        = require('hexo-util');
var publicDir   = hexo.public_dir;
var sourceDir   = hexo.source_dir;
var route       = hexo.route;
var lunr        = require('lunr');
var reg         = /^http:s?\/\//;



function getCoverPath (path) {
    if (reg.test(path)) { return path; }
    return '/img/post/' + path;
}

//生成lunrjs搜索数据
hexo.extend.generator.register('searchData', function(locals){
    // console.log(hexo.extend.helper.get('post_img'))

    var source = [];
    var searchIndex = lunr(function(){
        this.field('title', {boost:500});
        this.field('subtitle');
        this.field('tags', {boost:200});
        this.field('categories', {boost:500});
        this.field('content');
        this.ref('id');
    });
    var posts = locals.posts.sort('-date').filter(function(post){
        return post.published;
    });
    posts.forEach(function(post, index){
        var categoriesArray = [],
            tagsArray = [],
            cover = getCoverPath(post.cover);

        if (post.categories) {
            post.categories.forEach(function(category){
                categoriesArray.push(category.name);
            });
        }

        if(post.tags){
            post.tags.forEach(function(tag){
                tagsArray.push(tag.name);  
            });    
        }


        searchIndex.add({
            id: index,
            title: post.title,
            subtitle: post.subtitle,
            tags: tagsArray.join(','),
            content: post.content,
            categories: categoriesArray.join(',')
        });

        source.push({
            id: index,
            title: post.title,
            subtitle: post.subtitle,
            cover: cover,
            url: post.permalink,
            path: '/' + post.path
        });

    });

    return {
        path: 'assets/data/search.json',
        data: JSON.stringify({
            index: searchIndex.toJSON(),
            source: source
        }) 
    }
});



hexo.extend.generator.register('postData', function(locals){
    var data = [];
    var posts = locals.posts.sort('-date').filter(function(post){
        return post.published;
    });
    posts.forEach(function(post, index){
        var categoriesArray = [],
            tagsArray = [],
            cover = getCoverPath(post.cover);

        if (post.categories) {
            post.categories.forEach(function(category){
                categoriesArray.push(category.name);
            });
        }

        if(post.tags){
            post.tags.forEach(function(tag){
                tagsArray.push(tag.name);  
            });    
        }

        data.push({
            id: index,
            title: post.title,
            subtitle: post.subtitle,
            cover: cover,
            url: post.permalink,
            path: '/' + post.path,
            tags: tagsArray.join(','),
            categories: categoriesArray.join(',') 
        });

    });

    return {
        path: 'assets/data/posts.json',
        data: JSON.stringify(data) 
    }
});



