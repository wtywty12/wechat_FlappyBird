const PipeGroup1 = require('Pipe');

cc.Class({
    extends: cc.Component,
    properties: {
        pipePrefab: cc.Prefab,
        pipeLayer: cc.Node,
        initPipeX: 0,
        //-- 创建PipeGroup需要的时间
        spawnInterval: 0
    },
    onLoad () {
        _G.pipeManager = this;
    },
    startSpawn () {
        this.spawnPipe();
        this.schedule(this.spawnPipe, this.spawnInterval);
    },
    //-- 创建管道组
    spawnPipe () {
        // let pipeGroup = null;
        // if (cc.pool.hasObject('Pipe')) {
        //     pipeGroup = cc.pool.getFromPool('Pipe');
        // } else {
        var  pipeGroup = cc.instantiate(this.pipePrefab).getComponent(PipeGroup1);
        // }
        // var pipeGroup = cc.instantiate(this.pipePrefab).getComponent(PipeGroup1);

        this.pipeLayer.addChild(pipeGroup.node);
        pipeGroup.node.active = true;
        pipeGroup.node.x = this.initPipeX;
    },
    despawnPipe (pipe) {
        pipe.node.removeFromParent();
        pipe.node.active = false;
        // cc.pool.putInPool(pipe);
    },
    reset () {
        this.unschedule(this.spawnPipe);
    }
});
