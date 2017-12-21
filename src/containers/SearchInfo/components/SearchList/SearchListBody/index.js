import React,{Component} from 'react';
import './index.less'
import {connect} from 'react-redux';
import  actions from '../../../../../store/actions/searchInfo'
import {Link} from 'react-router-dom';
 class SearchListBody extends Component{
     componentDidMount(){
        /* console.log(this.props.searchInfoList.list);*/
     }
    render(){
        return (

                <article>
                    {this.props.searchInfoList.list.map((res,index)=>(
                        <Link  key={res.id} to="/">
                        <section className="search-unite">
                            <div className="search-unite-headerImg"><img src={res.image_path} alt=""/></div>
                            <div className="search-unite-body">
                                <div className="search-unite-restaurant">
                                    <h4>{res.name}</h4>
                                    <div className="search-unite-restaurant-info1">
                        <span>
                            <img src={require('./star_org.png')} alt=""/>
                        </span>
                                        <span>{res.rating}</span>
                                        <span>月售{res.recent_order_num}单</span>
                                    </div>
                                    <div className="search-unite-restaurant-info2">
                                        <span>￥{res.float_minimum_order_amount}起送</span>
                                        <span>配送费￥{res.float_delivery_fee}</span>
                                        <span>{res.distance}km</span>
                                        <span>{res.order_lead_time}分钟</span>
                                    </div>
                                    <div>口碑人气</div>
                                </div>
                                <div className="search-unite-food">
                                    <div>有一个活动</div>
                                    <div>
                                        <div>
                                            <span>新用户下单立减7元</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        </Link>
                    ))}

                </article>
        )
    }
}
export default connect(
    state => state.searchInfo,//把仓库中的状态对象映射为组件的属性对象
    actions
)(SearchListBody);
