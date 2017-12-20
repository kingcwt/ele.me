import React,{Component} from 'react';
export default class SearchListHeaderFilterComprehensive extends Component{
    render(){
        return (
            <div className={{/*this.props.date.comprehensive?"DivDisplayBlock":"DivDisplayNone"*/}}>
                <ul className="comprehensiveType">
                    <li>
                        <i className="iconfont icon-jiage"></i>
                        综合排序
                    </li>
                    <li>
                        <i className="iconfont icon-xiaolianghuikuang"></i>
                        销量最高
                    </li>
                    <li>
                        <i className="iconfont icon-jiage-copy"></i>
                        起送价最低
                    </li>
                    <li>
                        <i className="iconfont icon-shizhong"></i>
                        配送最快
                    </li>
                </ul>

            </div>
        )
    }
}