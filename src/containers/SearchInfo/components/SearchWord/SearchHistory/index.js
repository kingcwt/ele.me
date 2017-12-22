import React,{Component} from 'react';
import './index.less'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import actions from  '../../../../../store/actions/searchInfo'
class SearchHistory extends Component{
    handleClick=(event)=>{
        /*                 for(let i in event.target){
                             console.log(i+"-------"+event.target[i]);
                            }
                            打印event.target里的值
                            */
        this.props.wordClicSearch(event.target.innerHTML)
        this.props.ajaxSearch(event.target.innerHTML);
    }
    render(){
        return (
            <div>
                <section className="search-history">
                    <header className="search-history-header"><span>历史搜索</span>
                    </header>
                    <section className="search-history-body">
                        {
                            this.props.data.map((item, index) => {
                                return (<Link to="/home/list" key={index} >
                                    <span className="search-history-body-text"  onClick={this.handleClick}>{item}</span>
                                </Link>)
                            })
                        }

                    </section>
                </section>
            </div>
        )
    }
}
export default connect(
    state => state.searchInfo,//把仓库中的状态对象映射为组件的属性对象
    actions
)(SearchHistory);