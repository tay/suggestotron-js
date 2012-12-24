SuggestotronBackbone.Models.Vote = Backbone.Model.extend({
    url: function(){
        return "/topics/" + this.get('topic').id + "/votes"
    }
});
