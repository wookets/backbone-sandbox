define(function(require) {

    var Backbone = require('backbone');
    //var SidebarView = require('text!templates/home/homeTemplate.html');

    var HomeView = Backbone.View.extend({

        el: $("#page"),

        render: function(){

            $('.menu li').removeClass('active');
            $('.menu li a[href="#"]').parent().addClass('active');
            //this.$el.html(homeTemplate);

            //var sidebarView = new SidebarView();
            //sidebarView.render();

        }

    });

    return HomeView;

});