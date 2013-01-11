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
        var vote = new SuggestotronBackbone.Models.Vote({topic: this.model});
        vote.save({}, {
            success:_.bind(function(){
                this.model.set('vote_count', this.model.get('vote_count') + 1);
            }, this)
        });
    }
});