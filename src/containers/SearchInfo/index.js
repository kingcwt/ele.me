import React,{Component} from 'react';
import SearchHeader from "./components/SearchHeader/index";
import SearchList from "./components/SearchList/index";
import  WebStorageCache from 'web-storage-cache'
export default class SearchInfo extends Component{
    componentDidMount(){
        this.wsCache = new WebStorageCache();
        this.wsCache.set('username', 'wqteam', {exp : 100});
    }
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