"use strict";
cc._RF.push(module, '95aefCFcN9BlZByGKIP5w8m', 'GameOverMenu');
// scripts/GameOverMenu.js

'use strict';

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        score: cc.Label,
        button_play: cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    onLoad: function onLoad() {
        this.button_play.on(cc.Node.EventType.TOUCH_START, this.restart, this);
    },

    restart: function restart() {
        cc.director.loadScene('gameScene');
    }
    // update (dt) {},
});

cc._RF.pop();