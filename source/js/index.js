(function($){

  var categories = {

    init: function() {
      this.$nav = $('#J_catesNav li');
      this.$content = $('#J_catesPosts .J_catesCtn');
      this.tpl = Hogan.compile($('#J_postTpl').html());
      this.bindEvent();
      this.data = {
        all: window.POSTS
      };
      this.toggleContent(0);
    },


    bindEvent: function() {
      var self = this;
      self.$nav.on('click', function(e) {
        if ($(this).hasClass('current')) {
          return;
        }
        $(this).addClass('current').siblings().removeClass('current');
        self.toggleContent(self.$nav.index($(this)));
      })
    },
 
    toggleContent: function(idx) {
      var $container = this.$content.eq(idx);
      $container.show().siblings().hide();
      if (!$container.data('loaded')) {
        var category = this.$nav.eq(idx).data('val');
        var data = category ? this.filterDataByCategory(category) : this.data.all;
        this.render(data, $container);
        $container.data('loaded', true);
      }
    },


    filterDataByCategory: function(category) {
      if (this.data[category]) {
        return this.data[category];
      }

      var result  = [];

      this.data.all.forEach(function(row){
        var categories = row.categories;
        categories.forEach(function(cat){
          if (cat.name === category) {
            result.push(row);
          }
        })
      });

      this.data[category] = result;
      return result;

    },

    render: function(data, ele) {
      var html = this.tpl.render({data: data, coversrc: function(){
        return this.cover;
      }});
      $(ele).append(html);
    }


  }

  categories.init();






  var scrollLoad = {
    init: function() {
      this.config = PAGE;
      this.url = '/notes/page/{currentPage}/';
      this.loading = $('#J_loading');
      this.container = $('#J_postsWrap');
      this.isLoading = false;
      this.bindEvent(); 
    },

    bindEvent: function() {
      var self = this;
      $(window).on('scroll.scrollLoad', function(){
        var scrollTop = $(window).scrollTop(),
            windowH = $(window).height(),
            bottom = self.container.offset().top + self.container.outerHeight();
            console.log(scrollTop + windowH, bottom);
        if (scrollTop + windowH >= bottom && !self.isLoading) {
          self.loading.show();
          self.loadData();
        }
        
      });
    },

    loadData: function() {
      var self = this,
          currentPage = self.config.current + 1;
      self.isLoading  = true;
      window.setTimeout(function(){
        $.ajax({
        url: self.url.replace('{currentPage}', currentPage),
        success: function(data) {
          console.log(data);
          self.isLoading = false;
          self.config.current = currentPage;
          self.container.append(data);
          self.loading.hide();
          if (self.config.current >= self.config.total) {
            self.onLoadAll();
          }
        },
        error: function(){
          self.isLoading = false;
        }
      });
      }, 2000);      
    },

    onloadPage: function() {
      this.loading.hide();
    },

    onLoadAll: function() {
      console.log('end');
      $(window).off('scroll.scrollLoad');
      //this.loading.remove();
    }

  }

  //scrollLoad.init();

})(jQuery);