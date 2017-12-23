import React, {Component} from 'react';
import './index.less'
import {searchHotwords} from '../../../../../api/search'
import SearchListHeaderFilter from "../SearchListHeaderFilter/index";
import {connect} from 'react-redux';
import actions from '../../../../../store/actions/searchInfo'

class SearchListHeader extends Component {
  constructor() {
    super();
    this.state = {
      hotWord: []
    }
  }

  handleClick = (event) => {
    this.props.wordClicSearch(event.target.innerHTML);
    this.props.HeighOderFn(event.target.innerHTML);
    this.props.ajaxSearch(event.target.innerHTML);
  };

  componentDidMount() {
    searchHotwords().then(res => {
      this.setState({hotWord: res})
    })
  }

  render() {
    return (
      <header>
        <SearchListHeaderFilter/>
        <section className="search-hot-world">
          {
            this.state.hotWord != null ? (
              <ul>
                {
                  this.state.hotWord.map((item, index) => {
                    return !(item.search_word.match(/^\s*$/)) ?
                      <li key={index} onClick={this.handleClick}>{item.search_word}</li> : "";
                  })
                }
              </ul>
            ) : ""
          }

        </section>
      </header>
    )
  }
}

export default connect(
  state => state.searchInfo,//把仓库中的状态对象映射为组件的属性对象
  actions
)(SearchListHeader);