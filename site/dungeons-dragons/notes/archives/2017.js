import { lite } from '../../../../scripts/homerolled/lite.js';
import { Tiles } from '../../../../scripts/homerolled/tiles.js';

export let view =  lite.extend({
    content : `
    <div>
        <div>
            <p>2017 started and ended with the claw mountain arc.</p>
        </div>
        <div>
            <div id='tiles' class='tiles'></div>
        </div>
    </div>`,
    onContentBound : function() {
        new Tiles().fill(document.getElementById('tiles'), [
            { title: "12-2017", href: "#dungeons-dragons/notes/2017/12-2017?path=sessions/2017/12-2017", alt: "in the shadowfel 2" },
            { title: "10-2017", href: "#dungeons-dragons/notes/2017/10-2017?path=sessions/2017/10-2017", alt: "in the shadowfel" },
            { title: "09-2017", href: "#dungeons-dragons/notes/2017/09-2017?path=sessions/2017/09-2017", alt: "at claw mountain" },
            { title: "08-2017", href: "#dungeons-dragons/notes/2017/08-2017?path=sessions/2017/08-2017", alt: "travels part 3" },
            { title: "06-2017", href: "#dungeons-dragons/notes/2017/06-2017?path=sessions/2017/06-2017", alt: "travels part 2" },
            { title: "04-2017", href: "#dungeons-dragons/notes/2017/04-2017?path=sessions/2017/04-2017", alt: "long travels" },
            { title: "recap-01/2017", href: "#dungeons-dragons/notes/2017/01-2017?path=sessions/2017/01-2017", alt: "recap with my new notes." }
        ]);
    }
});
