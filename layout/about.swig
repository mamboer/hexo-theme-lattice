{% extends '_layout.swig' %}

{% block page_class %}page-about{% endblock %}

{% block main %}
    {% include '_partial/about/main.swig' %}
{% endblock %}
   
{% block pagejs %}
<!-- build:js js/dist.about.js -->
   {{ js('js/about') }}
<!-- endbuild -->
{% endblock %}

