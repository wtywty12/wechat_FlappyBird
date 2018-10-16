"use strict";
cc._RF.push(module, '0b90d67qXZM7IxHhi/W3vmE', 'Game');
// scripts/Game.js

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
var Player = require('Player');
var BackGround = require('BackGround');
// var PipeManager = require('PipeManager')

var GameState = cc.Enum({
    Menu: -1,
    Run: -1,
    Over: -1
});
var GameManager = cc.Class({
    extends: cc.Component,

    properties: {
        //-- 获取角色
        player: Player,
        //-- 获取gameOverMenu对象
        gameOverMenu: cc.Node,
        //-- 获取分数对象
        lbl_score: cc.Label,
        //-- 获取背景音效
        // gameBgAudio: {
        //     default: null,
        //     url: cc.AudioClip
        // },
        playBtn: cc.Node
        //-- 获取死亡音效
        // dieAudio: {
        //     default: null,
        //     url: cc.AudioClip
        // },
        //-- 获取失败音效
        // gameOverAudio: {
        //     default: null,
        //     url: cc.AudioClip
        // },
        // //-- 获取得分音效
        // scoreAudio: {
        //     default: null,
        //     url: cc.AudioClip
        // }
    },
    statics: {
        GameState: GameState
    },
    onLoad: function onLoad() {
        _G.GameManager = GameManager;
        _G.game = this;
        _G.player = this.player;

        // activate colliders
        cc.director.getCollisionManager().enabled = true;
        // cc.director.getCollisionManager().enabledDebugDraw = true
        // cc.director.enabledDrawBoundingBox = true;
        // activate colliders
        // cc.director.getCollisionManager().enabled = true;
        //-- 游戏状态
        this.GameState = GameState.Menu;
        //-- 分数
        this.score = 0;
        this.lbl_score.string = this.score;

        this.playBtn.on(cc.Node.EventType.TOUCH_START, this.startGame, this);
        this.gameOverMenu.active = false;
        this.player.init();
    },


    //-- 开始
    startGame: function startGame() {
        this.GameState = GameState.Run;
        this.score = 0;
        this.playBtn.active = false;
        _G.pipeManager.startSpawn();
        this.player.startRun();
    },
    gameOver: function gameOver() {
        //-- 背景音效停止，死亡音效播放
        // cc.audioEngine.stopMusic(this.gameBgAudio);
        // cc.audioEngine.playEffect(this.dieAudio);
        // cc.audioEngine.playEffect(this.gameOverAudio);
        _G.pipeManager.reset();
        this.GameState = GameState.Over;
        this.gameOverMenu.active = true;
        this.gameOverMenu.getComponent('GameOverMenu').score.string = this.score;
    },

    //-- 更新分数
    gainScore: function gainScore() {
        //-- 分数+1
        this.score++;
        this.lbl_score.string = this.score;
        //-- 分数增加音效
        // cc.audioEngine.playEffect(this.scoreAudio);
    }
});

cc._RF.pop();