{% set cates = site.data['categories'] %}
{% set catesLength = cates.length + 1 %}
<div class="archives-cates">
    <nav class="archives-cates-nav"  id="J_catesNav">
      <h3 class="archives-cates-tit">文章分类:</h3>
      <ul>
        {% for cat in cates %}
            <li {% if loop.first %}class="current"{% endif %} data-val="{{cat.value}}">{{cat.text}}</li>
        {% endfor %}
      </ul>
    </nav>
    <div class="archives-cates-ctn" id="J_catesPosts">
       <div class="mod-loading" id="J_loading">loading...</div>
       {% for i in Array(catesLength) %}
        <div class="mod-post-list J_catesCtn" style="display:{% if loop.first %}blcok{% else %} none{% endif %};"></div>
       {% endfor %}
    </div>
</div>

