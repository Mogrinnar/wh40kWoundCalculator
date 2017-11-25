
"use strict";

let m = require("mithril");
let User = require("../models/User");

module.exports = {
    view: () => {
        return m("form", [
            m("label.label", "First name"),
            m("input.input[type=text][placeholder=First name]"),
            m("label.label", "Last name"),
            m("input.input[placeholder=Last name]"),
            m("button.button[type=button]", "Save"),
        ])
    }
}