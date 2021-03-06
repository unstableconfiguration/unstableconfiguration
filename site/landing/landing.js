import { lite } from '../../scripts/homerolled/lite.js';
import { Tiles } from '../../scripts/homerolled/tiles.js';

export let view = lite.extend({
    contentUrl : 'site/landing/landing.html',
    onContentBound : function() {
        new Tiles().fill(document.getElementById('tile-container'), [
            { title : 'dungeons and dragons', alt : 'characters, notes', href : '#dungeons-dragons' }
        ]);      
    }
});
