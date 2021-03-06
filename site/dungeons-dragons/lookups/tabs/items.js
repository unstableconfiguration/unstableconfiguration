import { lite } from '../../../../scripts/homerolled/lite.js';
import { Gridify } from '../../../../scripts/homerolled/gridify.js';
import { items } from '../../../../5e/items.js';

export let ItemsTab =  lite.extend({
    content : `<div id='items-table'></div>`
    , initialize : function() {
        let _items = [];
        for(let k in items) { _items.push(items[k]); }
        this.data = _items;
    }
    , onContentBound : function(){
        this.buildItemsTable();
    }
    // filter, sort, attach to header?
    // 
    , buildItemsTable : function(){
        let view = this;
        let grid = new Gridify({
            container : 'items-table',
            data : view.data,
            columns : [
                { field : 'Name', header : 'Name', filter : true, sort : true, style : 'width: 175px; overflow:hidden;' }
                , { field : 'Weight', header : 'Weight', filter : true, sort : view.numberSort, style : 'width: 75px; text-align: right;' }
                , { field : 'Value', header : 'Value', filter : true, sort : view.coinSort.bind(view), style : 'width: 75px; text-align: right;' }
            ]
            , paging : true
            , style : 'width:325px; table-layout:fixed;'
            , className : 'grid'
        });
    }
    , numberSort : function(a, b) {
        a = +a || 0;
        b = +b || 0;
        if(a === b) { return 0; }
        return a > b ? 1 : -1;
    }
    , getCoinValue : function(val) {
        let coinValues = { cp : 1, sp : 10, ep : 50, gp : 100, pp : 1000 };
        let value = +val.replace(/[^\d\.]/g, '');
        for(let cv in coinValues) {
            if(val.includes(cv)) { value = value * coinValues[cv]; }
        }
        return +value || -1;
    }
    , coinSort : function(a, b) { 
        a = this.getCoinValue(a);
        b = this.getCoinValue(b);

        if(a === b) { return 0; }
        else return a > b ? 1 : -1;
    }
});
