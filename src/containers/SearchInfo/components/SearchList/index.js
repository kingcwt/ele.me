import React,{Component} from 'react';
import SearchListHeader from "./SearchListHeader/index";
import SearchListBody from "./SearchListBody/index";
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