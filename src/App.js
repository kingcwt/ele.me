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
import OrderLogin from "./containers/Order/OrderLogin/index";
import HistoryOrder from "./containers/Order/HistoryOrder/index";
import Login from "./containers/Login/login";
import AccounHeader from "./containers/Login/AccounHeader/accounheader";
import ChangePassword from "./containers/Login/AccounHeader/ChangePassword/changepassword";
import FirmOrder from "./containers/Order/FirmOrder/index";

// import Header from "./components/Header/index";
export default class App extends Component {

    render() {
        return (
            <Router>
                <div>

                    <Route path="/home" component={Home}/>
                    <Route path="/discover" component={Discover}/>
                    <Route path="/order" component={Order}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/edit" component={Edit}/>
                    <Route path="/add" component={Add}/>
                    <Route path="/search" component={Search}/>
                    <Route path="/my" component={My}/>
                    <Route path='/historyorder' component={HistoryOrder}/>
                    <Route path='/orderlogin' component={OrderLogin}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/accounheader' component={AccounHeader}/>
                    <Route path='/changepassword' component={ChangePassword}/>
                    <Route path='/firmorder' component={FirmOrder}/>
                    <Tab/>
                </div>
            </Router>
        )
    }
}
