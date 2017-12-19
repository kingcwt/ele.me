import React,{Component} from 'react';
import SearchHeader from "./components/SearchHeader/index";
import SearchList from "./components/SearchList/index";
export default class SearchInfo extends Component{
    render(){
        return (
            <div className="search">
                <SearchHeader/>
                <div className="search-list">
                    <div className="search-list-zhezhao"></div>
                        <SearchList/>
                    <div style={{display: "none"}} >

                    </div>
                </div>
            </div>

        )
    }
}
import './index.less'