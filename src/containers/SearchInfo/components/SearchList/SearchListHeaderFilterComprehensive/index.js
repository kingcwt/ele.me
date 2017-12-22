import React,{Component} from 'react';
import {connect} from 'react-redux';
import actions from  '../../../../../store/actions/searchInfo'
import './index.less'
 class SearchListHeaderFilterComprehensive extends Component{
    listSort=(val)=>{
       return( this.props.searchInfoList.list.sort((item1,item2)=>{
            return (item1.val- item2.val);
        }))
    }
    handleclick=(event)=>{
  /*      recent_order_num//月售单数
        order_lead_time//配送时间
        float_minimum_order_amount//起送价
        for (let i in event.target) {
            console.log(i + "-------" + event.target[i]);
        }*/
        this.props.contrl(event,'comprehensive');//点击子列表隐藏，调用的是父级传过来的函数
        let val = event.target.getAttribute('type');
        let newList = [];
        if(val == 'A'){

        }else if (val =='B'){
           newList =  this.props.searchInfoList.list.sort((item1,item2)=>{
                return (item2.recent_order_num- item1.recent_order_num);
            })
            this.props.sortSearch(newList);
        }else if (val == 'C'){
            newList =    this.listSort('order_lead_time')
            this.props.sortSearch(newList);
        }else{
            newList =   this.listSort('float_minimum_order_amount')
            this.props.sortSearch(newList);
        }
    }
    render(){
        return (
            <div className='Type-bg'>
                <ul className="comprehensiveType" onClick={this.handleclick}>
                    <li type="A">
                        <i className="iconfont icon-jiage"></i>
                        综合排序
                    </li>
                    <li type="B">
                        <i className="iconfont icon-xiaolianghuikuang"></i>
                        销量最高
                    </li>
                    <li type="C">
                        <i className="iconfont icon-jiage-copy"></i>
                        起送价最低
                    </li>
                    <li type="D">
                        <i className="iconfont icon-shizhong"></i>
                        配送最快
                    </li>
                </ul>

            </div>
        )
    }
}
export default connect(
    state => state.searchInfo,//把仓库中的状态对象映射为组件的属性对象
    actions
)(SearchListHeaderFilterComprehensive);