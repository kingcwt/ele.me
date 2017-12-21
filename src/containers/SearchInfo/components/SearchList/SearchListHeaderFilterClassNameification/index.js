import React,{Component} from 'react';
export default class SearchLIstHeaderFilterClassNameification extends Component{
   componentDidMount(){
       console.log(this.props.date);
   }
    render(){
        return (
            <div >
                <ul className="classNameificationType">
                    <li>
                        全部商家
                    </li>
                    <li>
                        美食
                        <ul>
                            <li>全部</li>
                            <li>小吃炸串</li>
                            <li>地方菜系</li>
                        </ul>
                    </li>
                    <li>
                        快捷便当
                        <ul>
                            <li>全部</li>
                            <li>简餐</li>
                            <li>盖浇饭</li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}