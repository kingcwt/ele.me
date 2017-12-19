import React,{Component} from 'react';
import './index.less';
import  {ajax} from '../../../../util/index'
export default class SearchHeader extends Component{
    constructor () {
        super();
        this.state = {
            valuse:""
        }
    }
    handlValueChange(event){
        this.setState({valuse:event.target.value})
    }
    launch(){
        ajax({

        })
    }
    render(){
        return (
            <div>
                <section className="search-list-input">
                    <form className="search-list-input-form" >
                        <i className="iconfont icon-sousuo"></i>
                        <input type="search" autofocus="autofocus" placeholder="输入商家、商品名称" className="app-11zxJ_1" name="value" value={this.state.valuse} onChange={this.handlValueChange.bind(this)}/>
                            <button type="submit"  onClick={this.launch.bind(this)} className="search-list-input-button">
                                搜索
                            </button>
                    </form>
                </section>
            </div>
        )
    }
}

