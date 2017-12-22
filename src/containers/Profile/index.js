import React, {Component} from 'react';
import './index.less'
import Header from "../../components/Header/index";
import {Link} from "react-router-dom"

export default class Profile extends Component {
    render() {
        return (
            <div>
                <Header title='我的'/>
                {/*这是那个箭头  <i className="iconfont icon-fanhui" onClick={()=>this.props.history.goBack()}>
                </i>*/}
                {/*这是头部登陆*/}
                <div className='mySign-in'>
                    {/*头像*/}
                    <div className='my-img'>
                        <img
                            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1513671228213&di=0c15fac489dc04cfd6167fbd5141aaf9&imgtype=0&src=http%3A%2F%2F2e.zol-img.com.cn%2Fproduct%2F64_280x2000%2F410%2Fceneo4LyDg8c.jpg"
                            alt=""/>
                    </div>
                    {/*登陆注册*/}
                    <Link  to='/login' className='myLogin'>
                        <p className='myLoginFont'>登陆 / 注册</p>
                        <p className='myPrivilege'>
                            <i className='iconfont icon-shouji'/>登陆后享受更多特权
                        </p>
                        <span className='myLogin-right'>
                            <i className='iconfont icon-xiangyou1'/>
                        </span>
                    </Link>
                </div>
                {/*红包*/}
                <div className='nvelopes'>
                    {/*红包图标*/}
                    <a href="javascript:;" className='redEnvelopes'>
                        <p>
                            <i className='iconfont icon-hongbao'/>
                        </p>
                        <p className='fontLag'>红包</p>
                    </a>
                    {/*金币图标*/}
                    <a href="javascript:;" className='gold'>
                        <p>
                            <i className='iconfont icon-coin-black'/>
                        </p>
                        <p className='fontDag'>金币</p>
                    </a>
                </div>
                {/*地址*/}
                <Link to={'/my'}>
                    <div className='myAddress newMyAddress'>
                        <i className='iconfont icon-dizhi address'/>

                        <div className='addressFont'>
                            我的地址
                            {/*图标*/}
                            <i className='iconfont icon-xiangyou1 addressRigtn'/>
                        </div>
                    </div>
                </Link>

                {/*商城*/}
                <div className='Shopping'>
                    <div className='myAddress '>
                        <i className='iconfont icon-privilege-d address shopping'/>
                        <div className='addressFont border'>
                            金币商城
                            {/*图标*/}
                            <i className='iconfont icon-xiangyou1 addressRigtn'/>
                        </div>
                    </div>
                    <div className='myAddress '>
                        <i className='iconfont icon-liwu1 address gift'/>
                        <div className='addressFont '>
                            分享拿5元现金
                            {/*图标*/}
                            <i className='iconfont icon-xiangyou1 addressRigtn'/>
                        </div>
                    </div>
                </div>
                {/*客服*/}
                <div className='Shopping service'>
                    <div className='myAddress '>
                        <i className='iconfont icon-guanjiaowangtubiao11 address '/>
                        <div className='addressFont border'>
                            我的客服
                            {/*图标*/}
                            <i className='iconfont icon-xiangyou1 addressRigtn'/>
                        </div>
                    </div>
                    <div className='myAddress '>
                        <i className='iconfont icon-eliaomo2 address elm'/>
                        <div className='addressFont '>
                            下载饿了么
                            {/*图标*/}
                            <i className='iconfont icon-xiangyou1 addressRigtn'/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}