(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/Global.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'f9e1dzFvTxEfqEcMW7OA2JL', 'Global', __filename);
// scripts/Global.js

"use strict";

// declare global variable "D"
window._G = {
    // types
    GameManager: null,
    gameName: "FlappyBird",
    // singletons
    game: null,
    player: null,
    pipeManager: null
};

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
        //# sourceMappingURL=Global.js.map
        