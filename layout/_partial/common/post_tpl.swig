{% raw %}
<script id="J_postTpl" type="text/template">
    {{#data}}
    <article class="mod-post">
        <a href="{{ path }}">
            <div class="mod-post-cover">
                <img src="{{ coversrc }}" alt="{{ title }}" />
            </div>
            <div class="mod-post-info">
                <h3 class="mod-post-tit">{{ title }}</h3>
                <p class="mod-post-desc">{{ subtitle }}</p>
            </div>
        </a>
    </article>
    {{/data}}
</script>
{% endraw %}