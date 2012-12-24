SuggestotronBackbone.Views.Topic = Backbone.View.extend({
    template:JST['topics/topic'],
    tagName:'tr',

    events:{
        'submit #new_topic_vote':'createVote'
    },

    render:function () {
        $(this.el).html(this.template({model:this.model}));
    },

    createVote:function (e) {
        e.preventDefault();
        var vote = new SuggestotronBackbone.Models.Vote({topic:this.model});
        vote.save({}, {
            success: function(){alert('saved');}
        });
    }
});