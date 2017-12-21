/**
 * Created by hayashisakaikyou on 2017/12/20.
 */
import React,{Component} from 'react';
import './index.less';

export default class LoadMore extends Component{
  render(){
    return (
      <div className="loading">
        <div className="bars">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="cover"></div>
        </div>
      </div>
    )
  }
}