define([
    'lovesyou_util',
    'lovesyou_template', 'tiles'
], function (util, LYTemplate, tiles) {

    var template = new LYTemplate();
    template.content_url = util.context + 'programming.html';
    template.onContentBound = function () {
        tiles.decorate();
    };

    return template;
});