import React,{Component} from 'react';
import SearchListHeader from "./SearchListHeader/index";
import SearchListBody from "./SearchListBody/index";
import  HeightOrder from "../Heigh-order/Height-order"
export default class SearchList extends Component{

    render(){
        let NewComponent3 = HeightOrder(SearchListHeader)
        return (
            <div>
                <NewComponent3/>
                <SearchListBody/>
            </div>
        )
    }
}