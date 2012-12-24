SuggestotronBackbone.Models.Topic = Backbone.Model.extend({
    initialize:function(){
        this.set("votes", new SuggestotronBackbone.Collections.Votes(
            this.get('votes') || [],
            {topic: this}));
    }
});
