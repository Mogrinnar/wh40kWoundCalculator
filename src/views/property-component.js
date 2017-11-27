"use strict";

const m = require("mithril");

export default class PropertyComponent {
    constructor (title, model, prop, min, max) {
        this.title = title;
        this.value = model[prop];
        this.model = model;
        this.prop = prop;
        this.min = min;
        this.max = max;
    }

    setValue (value) {
        value = _.clamp(value, this.min, this.max);
        console.info(value);
        this.value = value;
        this.model[this.prop] = _.toInteger(value);
        this.model.calculateWounds();
    }

    getValue () {
        return this.value;
    }

    component() {
        return m("form", {id:"prop_comp"},  [
            m("div", {class: "title"}, this.title),
            m("input.input[type=number]", {
                oninput: m.withAttr("value", this.setValue.bind(this)),
                value: _.clamp(this.value, this.min, this.max),
                max: this.max,
                min: this.min,
                size: 200
            })
        ])
    }
}