import React,{Component} from 'react';
import './index.less'
import SearchLIstHeaderFilterClassNameification from "../SearchListHeaderFilterClassNameification/index";
import SearchListHeaderFilterComprehensive from "../SearchListHeaderFilterComprehensive/index";
import SearchListHeaderFilterScreen from "../SearchListHeaderFilterScreen/index";
export default class SearchListHeaderFilter extends Component{
    constructor(){
        super();
        this.state = {
            classNameification:false,
            comprehensive:false,
            screen:false
        }
    }
    handleClick=(event)=>{
        let name = event.target.getAttribute('type');//获取type属性，type属性值就是state的属性名，传过来那个命，就把相应的值改成true
        if(this.valu == name ){//判断上次点的和这次点的是不是一个，是一个就收起来
            this.setState({
                [name]:false
            })
            this.valu= "repet"//重复点击，赋其他值，放置下次在点击不能开启
        }else {
            this.setState({//上次的收起来，这次的开启
                [this.valu]:false,
                [name]:true
                /* event.target.getAttribute('type'):true*/
            })
            this.valu =name ;
        }




    }
    render(){
        return (
            <div>
            <section onClick={this.handleClick} className="search-list-type">
                <div className="classNameification" type='classNameification'>
                    分类
                    <i className="iconJiantou"></i>
                </div>
                <div className="comprehensive" type="comprehensive">
                    综合排序
                    <i className="iconJiantou"></i>
                </div>
                <div className="screen" type='screen'>
                    筛选
                    <i className="iconfont icon-shaixuanxuanzhong"></i>
                </div>
            </section>
                {this.state.classNameification?<SearchLIstHeaderFilterClassNameification data={this.state}/>:this.state.comprehensive?<SearchListHeaderFilterComprehensive data={this.state}/>:this.state.screen?<SearchListHeaderFilterScreen data={this.state}/>:null}
            </div>
        )
    }
}