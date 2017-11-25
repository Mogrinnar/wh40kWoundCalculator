// src/index.js
"use strict";

const m = require("mithril");
const _ = require("lodash");

import PropertyComponent from "./views/property-component.js";
import WoundCalculation from "./models/wound-calculation.js";

var root = document.body;

let wc_model = new WoundCalculation();

let _amount = new PropertyComponent('Amount', wc_model, 'amount');
let _bs = new PropertyComponent('Balistic Skill', wc_model, 'bs');
let _strength = new PropertyComponent('Strength', wc_model, 'strength');
let _ap = new PropertyComponent('AP', wc_model, 'ap');
let _damage = new PropertyComponent('Damage', wc_model, 'damage');
let _toughness = new PropertyComponent('Thoughness', wc_model, 'toughness');
let _armourSave = new PropertyComponent('Armor Save', wc_model, 'armourSave');
let _invulSave = new PropertyComponent('Invulnerable Save', wc_model, 'invulSave');
let _wounds = new PropertyComponent('Wounds Amount Per Model', wc_model, 'woundpermodel');

let attackersComponents = [];
attackersComponents.push(_amount);
attackersComponents.push(_bs);
attackersComponents.push(_strength);
attackersComponents.push(_ap);
attackersComponents.push(_damage);

let defenderComponents = [];
defenderComponents.push(_toughness);
defenderComponents.push(_armourSave);
defenderComponents.push(_invulSave);
defenderComponents.push(_wounds);

let attackerTitle = m('div',"Attacking stats");
let attacker = attackersComponents.map(component => {
    return component.component();
});
let attackerDiv = m('div', attacker);

let defenderTitle = m('div',"Defender stats");
let defender = defenderComponents.map(component => {
    return component.component();
});
let defenderDiv = m('div', defender);

let woundsAmountTitle = "Amount of Wounds:";

let testModel = {
    view: () => {
        return m('div', "jdlkjdlqwkjdlqwkdjqwldkjq");
    }
}

let basicLayout = [
    attackerTitle,
    attackerDiv,
    defenderTitle,
    defenderDiv,
    woundsAmountTitle
];

let newButton = m('button', { onclick: ()=> {
    let newBasicLayout = _.cloneDeep(basicLayout);
    basicLayout.push(m('div', "NEW DIV PUSHED"));
    m.mount(root, main);
}}, "New Wound Calculation");

var main = {
    view: () => {
        return m("main",[newButton, m('hr'), basicLayout, wc_model.view()]);
    }
}

m.mount(root, main);
