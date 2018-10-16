"use strict";
cc._RF.push(module, 'd868f9E5bpCRKEjU/63HUoK', 'Player');
// scripts/Player.js

'use strict';

var _properties;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

var State = cc.Enum({
    None: -1,
    Run: -1,
    Jump: -1,
    Drop: -1,
    DropEnd: -1,
    Dead: -1
});
cc.Class({
    extends: cc.Component,

    properties: (_properties = {
        // 主角跳跃高度
        maxY: 0,
        jumpHeight: 0

    }, _defineProperty(_properties, 'maxY', 0), _defineProperty(_properties, 'groundY', 0), _defineProperty(_properties, 'gravity', 0), _defineProperty(_properties, 'initJumpSpeed', 0), _defineProperty(_properties, '_state', State.None), _defineProperty(_properties, 'state', {
        get: function get() {
            return this._state;
        },
        set: function set(value) {
            if (value !== this._state) {
                this._state = value;
                // if (this._state !== State.None) {
                // var animName = State[this._state];
                // this.anim.stop();
                // this.anim.play(animName);
                // }
            }
        },
        type: State
    }), _properties),
    statics: {
        State: State
    },
    //初始化
    init: function init() {
        this.currentSpeed = 0;
        this.state = State.None;
        //this.registerListen()
    },

    onCollisionEnter: function onCollisionEnter(other) {
        if (this.state !== State.Dead) {
            var group = cc.game.groupList[other.node.groupIndex];
            if (group === 'Obstacle') {
                // bump
                this.state = State.Dead;
                _G.game.gameOver();
                // this.enableInput(false);
            } else if (group === 'NextPipe') {
                // jump over
                _G.game.gainScore();
            }
        }
    },
    jump: function jump() {
        this.state = State.Jump;
        this.currentSpeed = this.initJumpSpeed;
    },
    startRun: function startRun() {
        this.state = State.Run;
        // this.enableInput(true);
    },
    onDropFinished: function onDropFinished() {
        this.state = State.Run;
    },

    //-- 更新
    update: function update(dt) {
        switch (this.state) {
            case State.Jump:
                if (this.currentSpeed < 0) {
                    this.state = State.Drop;
                }
                break;
            case State.Drop:
                if (this.node.y < this.groundY) {
                    this.node.y = this.groundY;
                    this.state = State.DropEnd;
                    // this.spawnDust('DustDown');
                }
                break;
            case State.None:
            case State.Dead:
                return;
        }
        var flying = this.state === State.Jump || this.node.y > this.groundY;
        if (flying) {
            this.currentSpeed -= dt * this.gravity;
            this.node.y += dt * this.currentSpeed;
        }
    }
});

cc._RF.pop();