SuggestotronBackbone.Collections.Votes = Backbone.Collection.extend({
    model:SuggestotronBackbone.Models.Vote,

    initialize: function(models, options) {
        this.topic = options.topic;
    },

    url: function() {
        return "/topics/" + this.topic.id + "/votes";
    }
});