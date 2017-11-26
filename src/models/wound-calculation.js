"use strict";

const m = require("mithril")
const _ = require("lodash");

export default class WoundCalculation {
    constructor () {
        this.amount = 1;
        this.bs = 3;
        this.strength = 4;
        this.ap = 0;
        this.damage = 1;
        this.toughness = 4;
        this.armourSave = 3;
        this.invulSave = 0;
        this.woundpermodel = 1;

        this.actualWoundsModelValue = 0;
    }

    calculateWounds()  {
        let probToHit = (7 - this.bs) / 6;

        let probToWOund = 0;
        if(this.strength === this.toughness) {
            probToWOund = 0.5;
        } else if (this.strength >= (this.toughness * 2)) {
            probToWOund = 0.83333333333;
        } else if ((this.strength *2) <= (this.toughness)) {
            probToWOund = 0.16666666666;
        } else if (this.strength > this.toughness) {
            probToWOund = 0.66666666666;
        } else if (this.strength <this.toughness) {
            probToWOund = 0.33333333333;
        }

        let armorFactor = this.armourSave + this.ap;
        if (this.invulSave > armorFactor) {
            armorFactor = this.invulSave;
        }

        let probToSave = (armorFactor - 1) / 6;

        //assuming one multi-wound model
        this.actualWoundsModelValue = this.amount * probToHit * probToWOund * probToSave * this.damage;
        return this.actualWoundsModelValue;
    }

    view() {
        return m("div", this.actualWoundsModelValue);
    }
}