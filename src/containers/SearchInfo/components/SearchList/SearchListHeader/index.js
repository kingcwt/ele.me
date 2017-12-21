import React,{Component} from 'react';
import './index.less'
import {searchHotwords} from '../../../../../api/search'
import SearchListHeaderFilter from "../SearchListHeaderFilter/index";
export default class SearchListHeader extends Component{
    constructor(){
        super();
        this.state = {
            hotWord:[]
        }
    }
    componentDidMount() {
        searchHotwords().then(res => {
            this.setState({hotWord: res})
        })
    }
    render(){
        return (
                <header>
                    <SearchListHeaderFilter/>
                    <section className="search-hot-world">
                        {
                            this.state.hotWord !=null ?(                                                   <ul>
                            {
                                this.state.hotWord.map((item, index) => {
                                    return !(item.search_word.match(/^\s*$/))?<li key = {index} >{item.search_word}</li>:"";
                                })
                            }
                                </ul>
                            ):""
                        }

                    </section>
                </header>
        )
    }
}