"use strict";

let m = require("mithril");
let User = require("../models/User");

module.exports = {
    oninit: User.loadList,
    /*view: function() {
        return m(".user-list", User.list.map(function(user) {
            //console.info(".user-list-item", user.firstName + " " + user.lastName);
            //return m(".user-list-item", user.firstName + " " + user.lastName)
            return m("a.user-list-item", {href: "/edit/" + user.id, oncreate: m.route.link}, user.firstName + " " + user.lastName);
        }));
    }*/

    view: function() {
        return m(".user-list", User.list.map(function(user) {
            //console.info(".user-list-item", user.firstName + " " + user.lastName);
            //return m(".user-list-item", user.firstName + " " + user.lastName)
        }));
    }
}