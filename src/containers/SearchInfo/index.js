import React,{Component} from 'react';
import SearchHeader from "./components/SearchHeader/index";
import SearchHistory from "./components/SearchHistory/index";
import SearchHot from "./components/SearchHot/index";
export default class SearchInfo extends Component{
    render(){
        return (
            <div className="search">
                <SearchHeader/>
                <div className="search-list">

                    <div  userid="0">
                        <SearchHistory/>
                        <SearchHot/>
                    </div>
                </div>
            </div>

        )
    }
}
import './index.less'