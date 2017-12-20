import React, {Component} from 'react';
import './index.less'
import {searchHotwords} from '../../../../../api/search'

export default class SearchHot extends Component {
    constructor() {
        super();
        this.state = {
            hotWord: []
        }
    }

    componentDidMount() {
        searchHotwords().then(res => {
            this.setState({hotWord: res})
        })
    }

    render() {
        return (
            <div>
                <section className="search-hot">
                    <header className="search-hot-header">热门搜索</header>
                    <section className="search-hot-body">
                        {
                            this.state.hotWord.map((item, index) => {
                                console.log(item);
                                return !(item.search_word.match(/^\s*$/))?<span key = {index} className="search-hot-body-text">{item.search_word}</span>:"";
                            })
                        }

                    </section>
                </section>
            </div>
        )
    }
}