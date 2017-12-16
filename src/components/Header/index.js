import React, {Component} from 'react';
import './index.less'
export default class Header extends Component {
    render() {
        return (
            <div className="nav-header">
                {this.props.title}
                <i className="iconfont icon-fanhui" onClick={()=>this.props.history.goBack()}>

                </i>
            </div>
        )
    }
}