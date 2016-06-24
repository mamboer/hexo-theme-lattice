{% extends '_layout.swig' %}

{% block page_class %}page-index{% endblock %}

{% block main %}
    <script>
     var POSTS = {{ JSON.stringify(formatePosts()) }};
    </script>

    {% include '_partial/index/banner.swig' %}
    {% include '_partial/index/main.swig' %}
{% endblock %}

{% block footer %}
    {% parent %}
    {% include '_partial/common/post_tpl.swig' %}
{% endblock %}
   
{% block pagejs %} 
<!-- build:js js/dist.index.js -->
{{ js('js/index') }} 
<!-- endbuild -->
{% endblock %}

