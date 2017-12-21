import React,{Component} from 'react'
import './index.less';
import {connect} from 'react-redux';
import actions from '../../../store/actions/hot_words';
import {Link} from 'react-router-dom';

class HotWords extends Component{

  componentDidMount(){
    this.props.fetchHot();
  }
  render(){
    return(
      <div className='hot'>
        <div className='words'>
          {
            this.props.words.map((item,index)=>{
              return(
                <Link key={index} to='/home'>
                  <span>
                  {item.search_word}
                  </span>
                </Link>
              )
            })
          }
        </div>
      </div>
    )
  }
}
export default connect(state=>state.hot_words,actions)(HotWords);