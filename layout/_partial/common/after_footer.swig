
{% if page.comments and theme.duoshuo.shortname and theme.duoshuo.ua_disable %}
<!-- build:js js/dist.duoshuo.js -->
{{ js('js/ua-parser.min') }}
{{ js('js/duoshuo') }}
<!-- endbuild -->
{% endif %}

{% if theme.busuanzi %}
<!--busuanzi-->
<script async src="//dn-lbstatics.qbox.me/busuanzi/2.3/busuanzi.pure.mini.js"></script>
{% endif %}

{% if config.baidu_push or theme.baidu_push %}
<script>
(function(){
    var bp = document.createElement('script');
    bp.src = '//push.zhanzhang.baidu.com/push.js';
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();
</script>
{% endif %}

{% include 'baidu_analytics.swig' %}
{% include 'cnzz_analytics.swig' %}


