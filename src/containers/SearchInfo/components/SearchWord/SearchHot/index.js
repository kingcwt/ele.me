import React, {Component} from 'react';
import './index.less'
import {searchHotwords} from '../../../../../api/search'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import actions from  '../../../../../store/actions/searchInfo'
 class SearchHot extends Component {
    constructor() {
        super();
        this.state = {
            hotWord: []
        }
    }
    handleClick=(event)=>{
/*                 for(let i in event.target){
                     console.log(i+"-------"+event.target[i]);
                    }
                    打印event.target里的值
                    */
        this.props.wordClicSearch(event.target.innerHTML)
        this.props.HeighOderFn(event.target.innerHTML);
        this.props.ajaxSearch(event.target.innerHTML);
    }
    componentDidMount() {
        searchHotwords().then(res => {
            this.setState({hotWord: res})
        })
    }
    render() {
        return (
            <div>
                <section className="search-hot">
                    <header className="search-hot-header">热门搜索</header>
                    <section className="search-hot-body">
                        {
                            this.state.hotWord.map((item, index) => {
                                return !(item.search_word.match(/^\s*$/)) ? (
                                    <Link to="/home/list" key={index}  >
                                        <span onClick={this.handleClick} className="search-hot-body-text" >{item.search_word}</span>
                                    </Link>) : "";
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
)(SearchHot);