import React,{Component} from 'react';
import SearchHeader from "./components/SearchHeader/index";
import SearchList from "./components/SearchList/index";
import {HashRouter as Router,Route} from 'react-router-dom';
import  WebStorageCache from 'web-storage-cache'
import SearchWord from "./components/SearchWord/index";
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
                    <Router>
                        <div>
                            <Route  path="/home/search" component={SearchWord}/>
                            <Route  path="/home/list" component={SearchList}/>
                        </div>

                    </Router>
                </div>
            </div>

        )
    }
}
import './index.less'