import React,{Component} from 'react';
import SearchHistory from "./SearchHistory/index";
import SearchHot from "./SearchHot/index";
export default class SearchWord extends Component{
    render(){
        return (
            <div>
                <SearchHistory/>
                <SearchHot/>
            </div>
        )
    }
}