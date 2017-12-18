import React,{Component} from 'react';
import './index.less'
export default class SearchHistory extends Component{
    render(){
        return (
            <div>
                <section className="search-history">
                    <header className="search-history-header"><span>历史搜索</span>
                    </header>
                    <section className="search-history-body">
                        <span className="search-history-body-text">海底捞</span>
                        <span className="search-history-body-text">海底捞</span>
                        <span className="search-history-body-text">海底捞</span>
                        <span className="search-history-body-text">海底捞</span>
                        <span className="search-history-body-text">海底捞</span>
                        <span className="search-history-body-text">海底捞</span>
                        <span className="search-history-body-text">海底捞</span>
                    </section>
                </section>
            </div>
        )
    }
}