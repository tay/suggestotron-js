SuggestotronBackbone.Models.Vote = Backbone.Model.extend({
    initialize: function(options) {
        this.topic = options.topic;
    },

    url: function() {
        return "/topics/" + this.topic.id + "/votes";
    }
});
