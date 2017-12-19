import React,{Component} from 'react';
import './index.less'
export default class SearchListHeader extends Component{
    render(){
        return (
                <header>
             {/*       <section className="search-list-input">
                        <form className="search-list-input-form">
                            <i className="iconfont icon-sousuo"></i>
                            <input type="search" autofocus="autofocus" placeholder="输入商家、商品名称" className="app-11zxJ_1"/>
                                <button type="submit" className="search-list-input-button">
                                    搜索
                                </button>
                        </form>
                    </section>*/}
                    <section className="search-list-type">
                        <div className="classNameification">分类 <i className="iconJiantou"></i></div>
                        <div className="comprehensive">综合排序 <i className="iconJiantou"></i></div>
                        <div className="screen">筛选 <i className="iconfont icon-shaixuanxuanzhong"></i></div>
                    </section>
                    <section className="search-hot-world">
                        <ul>
                            <li>蜂鸟配送</li>
                            <li>简餐</li>
                            <li>火锅烤鱼</li>
                            <li>小龙虾</li>
                            <li>川香</li>
                            <li>川香</li>
                            <li>川香</li>
                            <li>川香</li>
                            <li>川香</li>
                            <li>川香</li>
                            <li>川香</li>
                        </ul>
                    </section>
                </header>
        )
    }
}