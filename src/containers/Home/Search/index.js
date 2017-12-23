import React,{Component} from 'react';
import './index.less';
import {Link} from 'react-router-dom'

class Search extends Component{

  //下拉时，顶部搜索框固定
  //这里google了一下，仿照固钉demo，完成搜索框下拉固定功能
  constructor(){
    super();
    this.state={
      support:false,
      css:null,
      height:0
    }
  }
  componentDidMount(){
    //supports是用来查询浏览器是否支持css特性
    //判断浏览器是否兼容sticky
    //这里用到了position：sticky这个新的css3属性，相当于fixed和relative的合体
    if (CSS.supports("position", "sticky") || CSS.supports("position", "-webkit-sticky")) {
      this.setState({
        support:true
      })
    }else{
      let offsetY=this.searchBox.offsetTop;
      this.scrollTop=this.scrollTop.bind(this,offsetY);
      document.addEventListener('scroll',this.scrollTop)
    }
  }

  componentWillUnmount(){
    document.removeEventListener('scroll',this.scrollTop);
  }

  scrollTop(offsetY){
    let css=null;
    let height=this.searchBox.offsetHeight;
    if(window.scrollY>offsetY){
      css={
        position:'fixed',
        top:0,
        zIndex:100,
      }
    }else{
      css={
        position:'static',
      }
    }
    this.setState({
      css,
      height
    })
  }

  render(){
    return(
    <div className='lin_searchBox'  style={this.state.support? {position: 'sticky',top: '-1px',zIndex: 100}:{height:this.state.height===0?null:this.state.height}}>
      <div ref={(div)=>{this.searchBox=div;}}  className='lin_search' style={this.state.support? null : this.state.css}>
        <Link to="/home/search">
          <span className='searchContent'>
            <i className='searchIcon'></i>
            <span className='searchPlaceholder'>搜索商家、商品名称</span>
          </span>
        </Link>
      </div>
    </div>
    )
  }
}

export default Search;