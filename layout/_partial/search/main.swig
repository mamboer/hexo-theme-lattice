<div class="mod-container">
    <div class="grid">    
        <div class="mod-main">
            <div id="J_searchResultLoading" class="mod-loading">loading...</div>
            <div class="search-result" id="J_searchResultWrap" style="display:none;">
                <h2 class="search-result-tit" id="J_searchResultTips"></h2>
                <div class="archives mod-post-list" id="J_searchResult"></div>
            </div> 
        </div>

        {% include '../common/sidebar.swig' %} 
    </div>
</div>
{% raw %}
<script id="J_searchResultTipsTpl" type="text/template">
    找到匹配<em>{{query}}</em>的结果<em>{{count}}</em>条:
</script>
{% endraw %}
