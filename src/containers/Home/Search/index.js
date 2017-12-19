import React,{Component} from 'react';
import './index.less';

class Search extends Component{
  constructor(){
    super();
    this.state={
      css:null,
      height:0
    }
  }
  render(){
    return(
      <div className='searchBox' ref={(input)=>this.searchBox=input}>
        <div className='search'>
          <a className='searchContent'>
            <i className='searchIcon'></i>
            <span className='searchPlaceholder'>搜索商家、商品名称</span>
          </a>
        </div>
      </div>
    )
  }
}

export default Search;