import React,{Component} from 'react';
import Header from '../../components/Header'
import './NoOrder/index.less';
import NoOrder from "./NoOrder/index";
import OrderLogin from "./OrderLogin/index";
import Index2 from "./FirmOrder/index";
import FirmOrder from '../../containers/Order/FirmOrder/index'
import HistoryOrder from "./HistoryOrder/index";
export default class Order extends Component{
    render(){
        return (
            <div>
             <HistoryOrder/>

            </div>
        )
    }
}