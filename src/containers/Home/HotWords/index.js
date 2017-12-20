import React,{Component} from 'react'
import './index.less';
import {connect} from 'react-redux';
import actions from '../../../store/actions/home'

class HotWords extends Component{
  constructor(){
    super();
    this.state={

    }
  }
  componentDidMount(){
  this.props.fetchAdd()
  }

  render(){
    console.log(this.props);


    return(




      <div className='hot'>
        <div className='words'>
          {this.props.da}
        </div>
      </div>
    )
  }
}
export default connect(state => state.home,actions)(HotWords)