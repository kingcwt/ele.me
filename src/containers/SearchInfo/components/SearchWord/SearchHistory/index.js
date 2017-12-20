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
                        {
                            this.props.data.map((item, index) => {
                                console.log(item);
                                return <span key = {index} className="search-history-body-text">{item}</span>
                            })
                        }

                    </section>
                </section>
            </div>
        )
    }
}