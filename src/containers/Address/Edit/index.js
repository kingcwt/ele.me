import React, {Component} from 'react';
import './index.less'
import Header from "../../../components/Header/index";

export default class Edit extends Component {
    render() {
        return (
            <div className='app-3Rse1_0'>
                <Header title='编辑地址'/>
                {/*内容框*/}
                <div className='addressfrom '>
                    {/*这是修改框*/}
                    <div className='content'>
                        {/*联系人*/}
                        <div className='label-wrap'>
                            联系人
                        </div>
                        {/*联系人输入框*/}
                        <div className='input-group-wrap'>
                            <div className='input-wrap'>
                                <input placeholder="你的姓名" />
                            </div>
                            {/*选择框*/}
                            <div className='spans'>
                                <span className='form-span'>先生</span>
                                <span className='form-span'>女士</span>
                            </div>
                        </div>
                    </div>
                    {/*电话*/}
                    <div className='content telephone'>
                        {/*联系人*/}
                        <div className='label-wrap'>
                            电话
                        </div>
                        <div className='input-group-wrap'>
                            <div className='input-wrap '>
                                <input placeholder="你的手机号" />
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAAAXNSR0IArs4c6QAAAHRJREFUSA1jZCAT8E59/R+m9XO2KCOMTQrNRIpiaqsdtZzaIUqUeaPBTlQwUVvRaLBTO0SJMm802IkKJmorYkSunahtOCHzRm6ck9UIAAUncnSNNiYIJTB0+ZGb4EZ9jp4W6MIfDXa6BDO6JaPBjh4idOEDAOTZCsiDM8JjAAAAAElFTkSuQmCC" alt=""/>
                            </div>
                        </div>
                    </div>
                    {/*位置*/}
                    <div className='content telephone'>
                        {/*位置*/}
                        <div className='label-wrap'>
                            位置
                        </div>
                        <div className='input-group-wrap'>
                            <div className='input-wrap '>
                                <input placeholder="小区/写字楼/学校等" />
                                <i className='iconfont icon-xiangyou1 Arrow'/>
                            </div>
                        </div>
                    </div>
                    {/*详细地址*/}
                    <div className='content telephone  '>
                        {/*详细位置*/}
                        <div className='label-wrap'>
                            详细地址
                        </div>
                        <div className='input-group-wrap'>
                            <div className='input-wrap bottom'>
                                <input placeholder="详细地址（门牌号等）" />
                                <i className='iconfont icon-xiugai modify'/>
                            </div>
                        </div>
                    </div>
                    {/*标签*/}
                    <div className='content'>
                        {/*标签*/}
                        <div className='label-wrap'>
                            标签
                        </div>
                        {/*联系人输入框*/}
                        <div className='input-group-wrap'>
                            {/*块状选择框*/}
                            <div className='spans'>
                                <span className='form-span'>家</span>
                                <span className='form-span'>学校</span>
                                <span className='form-span'>公司</span>
                            </div>
                        </div>
                    </div>
                    {/*确定框*/}
                    <div className='form-button-wrap'>
                        <button  className="form-button">确定</button>
                    </div>
                </div>

            </div>
        );
    }
}