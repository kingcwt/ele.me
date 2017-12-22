import React,{Component} from 'react';
import SearchHeader from "./components/SearchHeader/index";
import SearchList from "./components/SearchList/index";
import {HashRouter as Router,Route} from 'react-router-dom';
import HegihtOrder from './components/Heigh-order/Height-order'

import SearchWord from "./components/SearchWord/index";
export default class SearchInfo extends Component{

    render(){
        let NewComponent = HegihtOrder(SearchHeader,this.props.history);
        return (
            <div className="search">
                <NewComponent />
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