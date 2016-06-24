{% extends '_layout.swig' %}

{% block title %} {{ config.title }} {% endblock %}
{% block page_class %} page-search {% endblock %}

{% block main %}
    {% include '_partial/index/banner.swig' %}
    {% include '_partial/search/main.swig' %}
{% endblock %}

{% block footer %}
    {% parent %}
    {% include '_partial/common/post_tpl.swig' %}
{% endblock %}

{% block pagejs %} 
<!-- build:js js/dist.search.js -->
    {{ js('js/lunr') }}
    {{ js('js/search_result') }}
<!-- endbuild -->
{% endblock %}

