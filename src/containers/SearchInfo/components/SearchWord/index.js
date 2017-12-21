import React,{Component} from 'react';
import SearchHistory from "./SearchHistory/index";
import SearchHot from "./SearchHot/index";
import  WebStorageCache from 'web-storage-cache'
import {connect} from 'react-redux';
import  actions from '../../../../store/actions/searchInfo'
import  HeightOrder from '../../components/Heigh-order/Height-order'
 class SearchWord extends Component{
    constructor(){
        super();
        this.state = {
            searchInfoList:[]
        }
    }

    componentDidMount(){
        this.props.wordClicSearch("");
        this.wsCache = new WebStorageCache();
        this.setState({
            searchInfoList:this.wsCache.get('searchData')
        })

    }
    render(){
        let NewComponent2 = HeightOrder(SearchHot);
        return (
            <div className="searchContent">
                {this.state.searchInfoList !=null? <SearchHistory data={this.state.searchInfoList}/>:null}
                <NewComponent2/>
            </div>
        )
    }
}
export default connect(
    state => state.searchInfo,//把仓库中的状态对象映射为组件的属性对象
    actions
)(SearchWord);