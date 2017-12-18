import React,{Component} from 'react';
import SearchListHeader from "./components/SearchListHeader/index";
import SearchListBody from "./components/SearchListBody/index";
export default class SearchList extends Component{
    render(){
        return (
            <div>
                <SearchListHeader/>
                <SearchListBody/>
            </div>
        )
    }
}
import './index.less'