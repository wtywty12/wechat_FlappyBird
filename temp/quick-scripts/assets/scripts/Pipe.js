(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/Pipe.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '78feasPazpLiKX9nE7+gbNV', 'Pipe', __filename);
// scripts/Pipe.js

"use strict";

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
        //移动速度
        speed: 0,
        // botYRange: cc.p(0, 0),
        // spacingRange: cc.p(0, 0),
        topPipe: cc.Node,
        botPipe: cc.Node
    },
    onEnable: function onEnable() {
        var botYPos = -2300 + Math.random() * 500; //+ Math.random() * 300;//this.botYRange.x + Math.random() * (this.botYRange.y - this.botYRange.x);
        // let space = 400 + Math.random() * 100;//this.spacingRange.x + Math.random() * (this.spacingRange.y - this.spacingRange.x);
        // var topYPos = 0;//botYPos + space//Math.random() *(250 -0)//botYPos - space;
        this.topPipe.y = botYPos + 1350; //botYPos + space;//topYPos;
        this.botPipe.y = botYPos;
    },
    update: function update(dt) {
        if (_G.game.GameState !== _G.GameManager.GameState.Run) {
            return;
        }

        this.node.x += this.speed * dt;

        var disappear = this.node.getBoundingBoxToWorld().xMax < 0;
        if (disappear) {
            _G.pipeManager.despawnPipe(this);
        }
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=Pipe.js.map
        