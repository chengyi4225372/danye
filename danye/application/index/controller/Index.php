<?php

namespace app\index\controller;

use think\Db;

 class Index extends Common {


    //首页展示
    public function index() {

        $banner = Db::name('banner')->where('status',1)->order('id desc')->find();
        $bi     = Db::name('shop')->select();
        $t1     = Db::name('other')->where('pid',1)->select();
        $t2     = Db::name('other')->where('pid',2)->select();
        $t3     = Db::name('other')->where('pid',3)->select();
        $t4     = Db::name('other')->where('pid',4)->select();
        $t5     = Db::name('other')->where('pid',5)->select();
        $t6     = Db::name('other')->where('pid',6)->select();
        $t7     = Db::name('other')->where('pid',7)->select();
        $t8     = Db::name('other')->where('pid',8)->select();
        $t9     = Db::name('other')->where('pid',9)->select();
        $foot   = Db::name('foot')->order('id desc')->find();

        $this->assign('banner',$banner);
        $this->assign('bi',$bi);
        $this->assign('t1',$t1);
        $this->assign('t2',$t2);
        $this->assign('t3',$t3);
        $this->assign('t4',$t4);
        $this->assign('t5',$t5);
        $this->assign('t6',$t6);
        $this->assign('t7',$t7);
        $this->assign('t8',$t8);
        $this->assign('t9',$t9);
        $this->assign('foot',$foot);

        return $this->fetch();
    }  

}
