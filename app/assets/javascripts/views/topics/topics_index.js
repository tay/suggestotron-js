SuggestotronBackbone.Views.TopicsIndex = Backbone.View.extend({

    template:JST['topics/index'],

    initialize:function(){
        this.collection.on('reset', this.render, this)
    },

    render:function () {
        $(this.el).html(this.template({topics: this.collection}));
    }
});
