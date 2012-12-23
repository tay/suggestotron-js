window.SuggestotronBackbone = {
    Models:{},
    Collections:{},
    Views:{},
    Routers:{},
    initialize:function () {
        var router = new SuggestotronBackbone.Routers.Topics();
        Backbone.history.start();
    }
};

$(document).ready(function () {
    SuggestotronBackbone.initialize();
});
