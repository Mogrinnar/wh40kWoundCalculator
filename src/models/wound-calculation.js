"use strict";

const m = require("mithril")
const _ = require("lodash");

export default class WoundCalculationModel {
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
        let probToHit = this.probToHit();
        let probToWOund = this.probToWOund();
        let probToFailSave = this.probToFailSave();
        let actualDamage = this.actualDamage();
        this.actualWoundsModelValue = this.amount * probToHit * probToWOund * probToFailSave * actualDamage;
        return this.actualWoundsModelValue;
    }

    probToHit() {
        return (7 - this.bs) / 6;
    }

    probToFailSave() {
        let armorFactor = this.armourSave + this.ap;
        if (this.invulSave > armorFactor) 
            armorFactor = this.invulSave;
        return (armorFactor - 1) / 6;
    }

    probToWOund() {
        let probToWOund = 0;
        if(this.strength === this.toughness) {
            probToWOund = 1/2; // 4+ roll
        } else if (this.strength >= (this.toughness * 2)) {
            probToWOund = 5/6; // 2+ roll
        } else if ((this.strength *2) <= (this.toughness)) {
            probToWOund = 1/6; // 6+ roll
        } else if (this.strength > this.toughness) {
            probToWOund = 2/3; // 3+ roll
        } else if (this.strength <this.toughness) {
            probToWOund = 1/3; // 5+ roll
        }

        return probToWOund;
    }

    actualDamage() {
        return _.clamp(this.damage, 0, this.woundpermodel);
    }

    view() {
        return m("div", this.calculateWounds());
    }
}
