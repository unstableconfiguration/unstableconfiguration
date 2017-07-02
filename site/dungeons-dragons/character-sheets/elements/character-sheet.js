define([
    'lovesyou_util',
    'lovesyou_template'
], function (util, LYTemplate) {

    var template = new LYTemplate();
    template.content_url = 'site/dungeons-dragons/character-sheets/elements/character-sheet.html';
    template.onDataBound = function () {
        var _this = this;
        let set = (id, val) => {
            document.getElementById('character_' + id).innerHTML = val;
        }
        let data = _this.data;
        set('Name', data.Name);
        set('Race', data.Race);
        set('Class', data.ClassName);
        set('Background', data.Background);
        set('XP', data.XP);

        var personality = document.getElementById('character_personality');
        if(data.Personality.isEmpty()) { 
            document.querySelector('#personality_tab').style.display = 'none';
        }
        for (var t in data.Personality) {
            if(typeof(data.Personality[t]) !== 'string')
                continue;
            let div = document.createElement('div');
            let lspan = document.createElement('span');
            let rspan = document.createElement('span');

            lspan.innerHTML = t + ':';
            rspan.innerHTML = data.Personality[t];
            div.appendChild(lspan);
            div.appendChild(rspan);
            personality.appendChild(div);
        }

        set('Strength', data.Stats.Strength);
        set('Dexterity', data.Stats.Dexterity);
        set('Constitution', data.Stats.Constitution);
        set('Intelligence', data.Stats.Intelligence);
        set('Wisdom', data.Stats.Wisdom);
        set('Charisma', data.Stats.Charisma);

        set('HP', data.HP);
        set('AC', data.AC);
        set('StrengthSave', data.Saves.Strength.Bonus);
        set('DexteritySave', data.Saves.Dexterity.Bonus);
        set('ConstitutionSave', data.Saves.Constitution.Bonus);
        set('IntelligenceSave', data.Saves.Intelligence.Bonus);
        set('WisdomSave', data.Saves.Wisdom.Bonus);
        set('CharismaSave', data.Saves.Charisma.Bonus);

        let obj = data.Skills;
        let tbl = document.getElementById('table-skills');
        util.fill_table({
            columns: ['Name', 'Ability', 'Trained', 'Bonus'],
            data: obj,
            table: tbl
        });

        let features = document.getElementById('character_features');
        if(features.length === 0)
            document.querySelector('#features_tab').style.display = 'none';
        for (let f in data.Features) {
            let feature = data.Features[f];
            let span = document.createElement('span')
            span.innerHTML = feature + ' <br/>';
            features.appendChild(span);
        }

        obj = data.Items;
        if(obj.length === 0)
            document.querySelector('#items_tab').style.display = 'none';
        tbl = document.getElementById('table-items');
        util.fill_table({
            columns: ["Name", "Count", "Value", "Weight"],
            data: obj,
            table: tbl
        });

        let totalWeight = 0;
        for (let i in obj) {
            totalWeight += obj[i].Weight || 0;
        }
        let lblItems = document.getElementById('label-items');
        lblItems.innerHTML = lblItems.innerHTML + ' ' + totalWeight + '/' + data.Carry_Weight;

        obj = data.Spells;
        if(obj.length === 0)
            document.querySelector('#spells_tab').style.display = 'none';
        tbl = document.getElementById('table-spells');
        util.fill_table({
            columns: ["Name", 'Level', 'Casting Time', 'Range', 'Duration' /* Ritual */ ],
            data: obj,
            table: tbl
        });
        // on-click spell descriptions.
        for (let i = 1; i < tbl.rows.length; i++) {
            let row = tbl.rows[i];
            let cell = row.cells[0];
            cell.addEventListener('click', (e) => {
                let spell = e.target.innerHTML;

                require(['site/common/modal/modal',
                    'site/dungeons-dragons/character-sheets/elements/spellbox/spellbox',
                    '5e/spells'
                ], (modal, spellbox, spells) => {
                    spell = spells[spell];
                    modal = modal.new();
                    modal.onContentBound = () => {
                        spellbox = spellbox.new();
                        spellbox.data = spell;
                        spellbox.container = document.getElementById('modal-content');
                        spellbox.attach();
                    };
                    modal.container = document.getElementById('spellbox-container');
                    modal.attach();
                    
                });
            });
        }
    }
    template.onContentBound = function () {
        var fileref = document.createElement("link");
        fileref.rel = "stylesheet";
        fileref.type = "text/css";
        fileref.href = 'css/homerolled/character-sheet.css';
        document.getElementsByTagName("head")[0].appendChild(fileref)

        require(['scripts/homerolled/character-sheet-styler'], (sheet_styler) => {
            sheet_styler.stylize();
        });

        require(['site/common/dice/dice'], (dice) => {
            dice.container = document.getElementById('dice-container');
            dice.attach();
        })
    }

    return template;
});