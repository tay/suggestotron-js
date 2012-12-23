SuggestotronBackbone.Routers.Topics = Backbone.Router.extend({
    routes:{
        '':'index',
        'topics/:id':'show'
    },

    initialize:function () {
        this.collection = new SuggestotronBackbone.Collections.Topics();
        this.collection.fetch();
    },

    index:function () {
        var view = new SuggestotronBackbone.Views.TopicsIndex({collection:this.collection});
        view.render();
        $('#container').html(view.el);
    },

    show:function (id) {
        alert(id);
    }
});
