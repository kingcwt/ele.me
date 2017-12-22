import React,{Component} from 'react';
import './index.less';
import {connect} from 'react-redux';
import  actions from '../../../../store/actions/searchInfo'
import  WebStorageCache from 'web-storage-cache'
import {Link} from 'react-router-dom'
/*import { } from 'react-router'*/

class SearchHeader extends Component{
    constructor () {
        super();
        this.wsCache = "";
        this.state = {
            valuse:""
        }
    }
    handlValueChange(event){
        this.props.wordClicSearch(event.target.value);
        if(event.target.value ==''){
            this.props.history.push('/home/search')
        }

    }


    launch() {
        this.props.ajaxSearch(this.props.searchWord);
        this.props.HeighOderFn(this.props.searchWord);
    }
    cb=()=>{
        this.props.history.push('/')
    }
    render(){
        return (
            <div>
                <section className="search-list-input">
                    <i className='iconfont icon-fanhui' onClick={this.cb}></i>
                    <form className="search-list-input-form" >
                        <i className="iconfont icon-sousuo"></i>
                        <input  type="search"  autoFocus placeholder="输入商家、商品名称" className="app-11zxJ_1" name="value" autoComplete = "off" value={this.props.searchWord} onChange={this.handlValueChange.bind(this)}/>
                        <Link to="/home/list">
                            <div type="submit"  onClick={this.launch.bind(this)} className="search-list-input-button">
                                搜索
                            </div>
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