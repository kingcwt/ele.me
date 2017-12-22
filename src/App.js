import React, {Component} from 'react';
import Tab from './components/Tab';
import './style/common.less';
import Home from './containers/Home';
import Discover from './containers/Discover';
import Order from './containers/Order';
import Profile from './containers/Profile';

import Edit from './containers/Address/Edit';
import Add from './containers/Address/Add';
import Search from './containers/Address/Search';
import My from './containers/Address/My';
import {HashRouter as Router, Route} from 'react-router-dom';
import Address from "./containers/Address/My/index";
import SearchInfo from "./containers/SearchInfo/index";
import Detail from "./containers/Detail/detail";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/discover" component={Discover}/>
          <Route path="/order" component={Order}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/edit" component={Edit}/>
          <Route path="/add" component={Add}/>
          <Route path="/search" component={Search}/>
          <Route path="/my" component={My}/>
          <Route path="/home/search" component={SearchInfo}/>
          <Route path="/home/list" component={SearchInfo}/>
          <Route path="/detail" component={Detail}/>
          <Tab/>
        </div>
      </Router>
    )
  }
}
