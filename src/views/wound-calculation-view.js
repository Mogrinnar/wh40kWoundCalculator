"use strict";

const m = require("mithril");
import WoundCalculationModel from "../models/wound-calculation.js";
import PropertyComponent from "./property-component.js";

export default class WoundCalculationView {
    constructor () {
        this.wc_model = new WoundCalculationModel();
        this.amount = new PropertyComponent('Amount', this.wc_model, 'amount', 1, 99);
        this.bs = new PropertyComponent('Balistic Skill', this.wc_model, 'bs', 1, 6);
        this.strength = new PropertyComponent('Strength', this.wc_model, 'strength', 1, 6);
        this.ap = new PropertyComponent('AP', this.wc_model, 'ap', -6, 0);
        this.damage = new PropertyComponent('Damage', this.wc_model, 'damage', 1, 10);
        this.toughness = new PropertyComponent('Thoughness', this.wc_model, 'toughness', 1, 10);
        this.armourSave = new PropertyComponent('Armor Save', this.wc_model, 'armourSave', 2, 7);
        this.invulSave = new PropertyComponent('Invulnerable Save', this.wc_model, 'invulSave', 2, 6);
        this.wounds = new PropertyComponent('Wounds Amount Per Model', this.wc_model, 'woundpermodel', 1, 50);

        this.attackersComponents = [
            this.amount,
            this.bs,
            this.strength,
            this.ap,
            this.damage
        ];

        this.defenderComponents = [
            this.toughness,
            this.armourSave,
            this.invulSave,
            this.wounds
        ]

        this.attackerTitle = m('div',"Attacking stats");
        this.attacker = this.attackersComponents.map(component => {
            return component.component();
        });
        this.attackerDiv = m('div', this.attacker);
        
        this.defenderTitle = m('div',"Defender stats");
        this.defender = this.defenderComponents.map(component => {
            return component.component();
        });
        this.defenderDiv = m('div', this.defender);
        
        this.woundsAmountTitle = "Amount of Wounds:";
        
        this.basicLayout = [
            m('hr'),
            this.attackerTitle,
            this.attackerDiv,
            this.defenderTitle,
            this.defenderDiv,
            this.woundsAmountTitle
        ];
    }

    view() {
        return this.basicLayout.concat(this.wc_model.view());
    }
}