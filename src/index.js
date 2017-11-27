// src/index.js
"use strict";

const m = require("mithril");
const _ = require("lodash");

import PropertyComponent from "./views/property-component.js";
import WoundCalculationModel from "./models/wound-calculation.js";
import WoundCalculationView from "./views/wound-calculation-view.js";

var root = document.body;

let layout = [
    new WoundCalculationView()
];

let testFunc = function() {
    return [
        m('button', { onclick: ()=> {
            let newView = new WoundCalculationView();
            layout = _.concat([newView], layout);
        }}, "New Wound Calculation ")
    ].concat(
        layout.map(maindata => {
            return maindata.view();
        })
    );
}

var main = {
    view: () => {
        return testFunc();
    }
}

m.mount(root, main);
