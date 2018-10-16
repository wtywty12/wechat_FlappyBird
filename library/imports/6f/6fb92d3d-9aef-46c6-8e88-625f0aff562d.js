"use strict";
cc._RF.push(module, '6fb9209mu9Gxo6IYl8K/1Yt', 'BackGround');
// scripts/BackGround.js

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
// var game = require("Game")
var player = require('Player');
cc.Class({
    extends: cc.Component,

    properties: {

        //-- 滚动的速度
        speed: 0,
        //-- X轴边缘
        resetX: 0
    },
    onLoad: function onLoad() {
        this.registerListen();
    },

    registerListen: function registerListen() {
        this.node.on(cc.Node.EventType.TOUCH_START, function () {
            _G.player.jump();
            return true;
        }, this);
    },
    //
    update: function update(dt) {
        if (_G.game.GameState !== _G.GameManager.GameState.Run) {
            return;
        }
        var x = this.node.x;
        x += this.speed * dt;
        if (x <= -this.resetX) {
            x = this.resetX;
        }
        this.node.x = x;
    }
});

cc._RF.pop();