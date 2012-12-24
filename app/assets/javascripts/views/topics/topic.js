SuggestotronBackbone.Views.Topic = Backbone.View.extend({
    template:JST['topics/topic'],
    tagName:'tr',

    events:{
        'submit #new_topic_vote':'createVote'
    },

    initialize:function () {
        this.model.on('change', this.render, this);
    },

    render:function () {
        $(this.el).html(this.template({model:this.model}));
    },

    createVote:function (e) {
        e.preventDefault();
        this.model.get('votes').create({}, {
            success:_.bind(this.render, this)
        });
    }
});