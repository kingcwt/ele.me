import React,{Component} from 'react'
import './index.less';
import {connect} from 'react-redux';
import actions from '../../../store/actions/home_header'

class Header extends Component{
  componentDidMount(){
    this.props.fetchAdd();
    this.props.fetchWeather();
  }
  render(){
    return(
        <header className='HomeHeader'>
          <div className='HeaderTitle'>
            <div className="address">
              <span className='addIcon'></span>
              <span className="index-word">{this.props.add.address}</span>
              <i className='triangle'></i>
            </div>
            <div className='weather'>
              <div>
                <h2 className='temperature'>{this.props.weather.temperature}℃</h2>
                <p className='today'>{this.props.weather.description}</p>
              </div>
              <img alt="天气图标" className="icon" src="//fuss10.elemecdn.com/9/b9/c8e482821be2080edcffbb3a8d376png.png?imageMogr/format/webp/thumbnail/!69x69r/gravity/Center/crop/69x69/"/>
            </div>
          </div>
        </header>
    )
  }
}
export default connect(state => state.home_header,actions)(Header);

