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
    None   : -1,
    Run    : -1,
    Jump   : -1,
    Drop   : -1,
    DropEnd: -1,
    Dead   : -1
});
cc.Class({
    extends: cc.Component,

    properties: {
        // 主角跳跃高度
        maxY: 0,
        jumpHeight: 0,
        
        //-- Y轴最大高度
        maxY: 0,
        //-- 地面高度
        groundY: 0,
        //-- 重力
        gravity: 0,
        //-- 起跳速度
        initJumpSpeed: 0,

        _state:State.None,
        state: { 
            get: function () {
                return this._state;
            },
            set: function(value){
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
        },
        // state:{
        //     default:State.None,
        //     type:State
        // }
        // state: {
        //     get: function () {
        //         return this._state;
        //     },
        //     set: function(value){
        //         if (value !== this._state) {
        //             this._state = value;
        //             // if (this._state !== State.None) {
        //                 // var animName = State[this._state];
        //                 // this.anim.stop();
        //                 // this.anim.play(animName);
        //             // }
        //         }
        //     },
        //     type: State
        // },
    },
    statics: {
        State
    },
    //初始化
    init(){
        this.currentSpeed = 0;
        this.state = State.None;
        //this.registerListen()
    },
    onCollisionEnter: function (other) {
        if (this.state !== State.Dead) {
            var group = cc.game.groupList[other.node.groupIndex];
            if (group === 'Obstacle') {
                // bump
                this.state = State.Dead;
                _G.game.gameOver();
                // this.enableInput(false);
            }
            else if (group === 'NextPipe') {
                // jump over
                _G.game.gainScore();
            }
       }
    },
    jump()
    {
        this.state = State.Jump;
        this.currentSpeed = this.initJumpSpeed;
    },
    startRun () {
        this.state = State.Run;
        // this.enableInput(true);
    },
    onDropFinished () {
        this.state = State.Run;
    },
    //-- 更新
    update (dt) {
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
    },

   
});




