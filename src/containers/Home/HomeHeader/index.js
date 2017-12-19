import React,{Component} from 'react'
import './index.less'

class Header extends Component{
  constructor(){
    super();
    this.state={

    }
  }
  render(){
    return(
        <header className='HomeHeader'>
          <div className='HeaderTitle'>
            <div className="address">
              <span className='addIcon'></span>
              <span className="index-word">北京市东城区</span>
              <i className='triangle'></i>
            </div>
            <div className='weather'>
              <div>
                <h2 className='temperature'>20℃</h2>
                <p className='today'>晴朗</p>
              </div>
              <img alt="天气图标" className="icon" src="//fuss10.elemecdn.com/9/b9/c8e482821be2080edcffbb3a8d376png.png?imageMogr/format/webp/thumbnail/!69x69r/gravity/Center/crop/69x69/"/>
            </div>
          </div>
        </header>
    )
  }
}
export default Header;

