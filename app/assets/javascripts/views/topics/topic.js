SuggestotronBackbone.Views.Topic = Backbone.View.extend({
    template:JST['topics/topic'],
    tagName:'li',

    render:function () {
        $(this.el).html(this.template({model: this.model}));
    }
});