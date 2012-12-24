SuggestotronBackbone.Views.TopicsIndex = Backbone.View.extend({
    template:JST['topics/index'],

    events:{
        'submit #new_topic':'createTopic'
    },

    initialize:function () {
        this.collection.on('reset', this.render, this);
        this.collection.on('remove', this.render, this)
        this.collection.on('add', this.appendTopic, this)
    },

    render:function () {
        $(this.el).html(this.template());
        this.collection.each(this.appendTopic);
    },

    createTopic:function (e) {
        e.preventDefault();
        this.collection.create({
                title:$('#new_topic_title').val(),
                description:$('#new_topic_description').val()},
            {
                success:function () {
                    $('#new_topic')[0].reset();
                },
                error:_.bind(this.handleError, this)
            });
    },

    appendTopic:function (model) {
        var subView = new SuggestotronBackbone.Views.Topic({model:model});
        subView.render();
        $('#topics').append(subView.el);
    },

    handleError: function(topic, response){
        this.collection.remove(topic);
        if (response.status == 422) {
            var errors = $.parseJSON(response.responseText);
            for(var attribute in errors){
                alert(attribute + ' '+ errors[attribute]);
            }
        }
    }
});
