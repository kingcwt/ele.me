import React,{Component} from 'react';
import './index.less'
export default class SearchListFilter extends Component{
    render(){
        return (
            <section className="search-list-type">
                <div className="classNameification">分类 <i className="iconJiantou"></i></div>
                <div className="comprehensive">综合排序 <i className="iconJiantou"></i></div>
                <div className="screen">筛选 <i className="iconfont icon-shaixuanxuanzhong"></i></div>
            </section>
        )
    }
}