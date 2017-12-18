import React,{Component} from 'react';
import './index.less';
export default class SearchHeader extends Component{
    render(){
        return (
            <div>
                <section className="search-list-input">
                    <form className="search-list-input-form">
                        <i className="iconfont icon-sousuo"></i>
                        <input type="search" autofocus="autofocus" placeholder="输入商家、商品名称" className="app-11zxJ_1"/>
                            <button type="submit" className="search-list-input-button">
                                搜索
                            </button>
                    </form>
                </section>
            </div>
        )
    }
}

