import React,{Component} from 'react';
import './index.less'
export default class SearchHot extends Component{
    render(){
        return (
            <div>
                <section className="search-hot">
                    <header className="search-hot-header">热门搜索</header>
                    <section className="search-hot-body">
                        <span className="search-hot-body-text">炸鸡</span>
                    </section>
                </section>
            </div>
        )
    }
}