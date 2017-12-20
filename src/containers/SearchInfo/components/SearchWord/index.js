import React,{Component} from 'react';
import SearchHistory from "./SearchHistory/index";
import SearchHot from "./SearchHot/index";
import  WebStorageCache from 'web-storage-cache'
export default class SearchWord extends Component{
    constructor(){
        super();
        this.state = {
            searchInfoList:[]
        }
    }
    componentDidMount(){
        this.wsCache = new WebStorageCache();
        this.setState({
            searchInfoList:this.wsCache.get('searchData')
        })

    }
    render(){
        return (
            <div>
                {this.state.searchInfoList !=null? <SearchHistory data={this.state.searchInfoList}/>:null}
                <SearchHot/>
            </div>
        )
    }
}