<footer class="mod-ft">
    <div class="grid">
            <ul class="mod-ft-links">
                <li><a href="{{ url_for('atom.xml') }}"><i class="fa fa-rss"></i></a></li>
                <li><a href="https://github.com/{{ config.github.user }}/{{ config.github.repo }}"target="_blank"><i class="fa fa-github-alt"></i></a></li>
            </ul>
            <div class="mod-ft-sec mod-ft-copyright">
                <p>Designed by <a href="http://aotu.io" target="_blank">{{ config.author }}</a> @<a target="_blank" href="http://jdc.jd.com">京东用户体验设计部</a></p>
                <p>Copyright &copy; {{ moment(Date.now()).year() }}. All Rights Reserved.</p>
                <p><a href="http://www.miibeian.gov.cn/" target="_blank">粤ICP备15077732号-2</a></p>
            </div>
            {% if theme.busuanzi %}
            <div style="display:none">
                <span id="busuanzi_container_site_pv">
                    {{ __('site.pv') }}: <span id="busuanzi_value_site_pv"></span> {{ __('site.pv_unit') }}
                </span>
                <span id="busuanzi_container_site_uv">
                    {{ __('site.uv') }}: <span id="busuanzi_value_site_uv"></span> {{ __('site.uv_unit') }}
                </span>
            </div>
            {% endif %}
        </div>
</footer>

<!-- Scripts -->
<!-- build:js js/dist.o2.js -->
{{ js('js/jquery') }}
{{ js('js/xhogan') }}
{{ js('js/util') }}
{{ js('js/common') }}
<!-- endbuild -->
