import React,{Component} from 'react';
import './index.less';
import {connect} from 'react-redux';
import  actions from '../../../../store/actions/searchInfo'
import  {ajax}  from '../../../../api/index'
import {Link} from 'react-router-dom'
class SearchHeader extends Component{
    constructor () {
        super();
        this.state = {
            valuse:""
        }
    }
    handlValueChange(event){
        this.setState({valuse:event.target.value})
    }
    launch() {
        this.props.ajaxSearch(this.state.valuse);
        console.log(1);
        console.log(this.props);
    }
    render(){
        return (
            <div>
                <section className="search-list-input">
                    <form className="search-list-input-form" >
                        <i className="iconfont icon-sousuo"></i>
                        <input type="search" autoFocus placeholder="输入商家、商品名称" className="app-11zxJ_1" name="value" value={this.state.valuse} onChange={this.handlValueChange.bind(this)}/>
                        <Link to="/home/list">
                            <button type="submit"  onClick={this.launch.bind(this)} className="search-list-input-button">
                                搜索
                            </button>
                        </Link>
                    </form>
                </section>
            </div>
        )
    }
}
export default connect(
    state => state.searchInfo,//把仓库中的状态对象映射为组件的属性对象
    actions
)(SearchHeader);