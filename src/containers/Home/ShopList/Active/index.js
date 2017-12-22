import React,{Component} from 'react'
import './index.less'

class Active extends Component{
  constructor(){
    super();
    this.handleShowMore=this.handleShowMore.bind(this);
    this.state={
      hide:true,
      isShow:false,
      num:0
    }
  }
  componentWillMount(){
    if(this.props.data){
      let num=this.props.data.length;
      this.setState({
        isShow:true,
        num
      })
    }
  }
  handleShowMore(event){
    event.preventDefault();
    event.stopPropagation();
    this.setState({
      hide:!this.state.hide
    })
  }
  render(){
    let activitiesBox=this.props.data.map((item,index)=>
      <div className='activeItem' key={index} style={index>1?this.state.hide?{display:'none'}:{}:null}>
        <i className='activeLogo' style={{color:'#fff',backgroundColor:`#${item.icon_color}`}}>{item.icon_name}</i>
        <span>{item.description}</span>
      </div>);
    return(
      <div>
        <div className='ItemAll'>
          {activitiesBox}
        </div>
        <div className={`show_more ${this.state.hide?'':'on'} ${this.state.num<=2?'':'activeNum'}`} onClick={this.handleShowMore}>
          <div className='showNum'>
            <span>{this.state.num}个活动</span>
            <svg className={`${this.state.hide?'':'triangle'}`} viewBox="0 0 12 6" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.577 5.423c.79.77 2.073.767 2.857 0l4.12-4.026C12.345.625 12.09 0 10.985 0H1.027C-.077 0-.33.63.457 1.397l4.12 4.026z"></path></svg>
          </div>
        </div>
      </div>
    )
  }
}
export default Active;