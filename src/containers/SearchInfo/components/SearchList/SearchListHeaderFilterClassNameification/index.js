import React,{Component} from 'react';
import './index.less'
export default class SearchLIstHeaderFilterClassNameification extends Component{
   constructor(){
       super();
       this.state = {
           no1:'none',
           no2:'none',
       }
   }
    componentDidMount(){

   }
   handleClick=(e)=>{
       for (let i in event.target) {
           console.log(i + "-------" + event.target[i]);
       }
       let name = e.target.getAttribute('type');//获取type属性，type属性值就是state的属性名，传过来那个命，就把相应的值改成true
       if(this.valu == name ){//判断上次点的和这次点的是不是一个，是一个就收起来
           this.setState({
               [name]:'none'
           })
           this.valu= "repet"//重复点击，赋其他值，放置下次在点击不能开启
       }else {
           this.setState({//上次的收起来，这次的开启
               [this.valu]:'none',
               [name]:'inline-block'
               /* event.target.getAttribute('type'):true*/
           })
           this.valu =name ;
       }
   }
    render(){
        return (
            <div  className='Type-bg'>
                <ul className="classNameificationType" onClick={this.handleClick}>
                    <li type="no" className="Type1">
                        全部商家
                    </li>
                    <li type="no1" className="Type2">
                        美食
                        <ul style={{"display":this.state.no1}}>
                            <li className="Type-li">全部</li>
                            <li className="Type-li">小吃炸串</li>
                            <li className="Type-li">地方菜系</li>
                        </ul>
                    </li>
                    <li type="no2" className="Type3">
                        快捷便当
                        <ul style={{"display":this.state.no2}}>
                            <li className="Type-li">全部</li>
                            <li className="Type-li">简餐</li>
                            <li className="Type-li">盖浇饭</li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}