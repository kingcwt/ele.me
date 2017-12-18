import React,{Component} from 'react';
import './index.less'
export default class SearchListBody extends Component{
    render(){
        return (

                <article>
                    <section className="search-unite">
                        <div className="search-unite-headerImg"></div>
                        <div className="search-unite-body">
                            <div className="search-unite-restaurant">
                                <h4>与挚爱成都冒菜小吃</h4>
                                <div className="search-unite-restaurant-info1">
                        <span>
                            <img src={require('./star_org.png')} alt=""/>
                        </span>
                                    <span>4.5</span>
                                    <span>月售<b>850</b>单</span>
                                </div>
                                <div className="search-unite-restaurant-info2">
                                    <span>￥<b>20</b>起送</span>
                                    <span>配送费￥<b>5</b></span>
                                    <span><b>1.81</b>km</span>
                                    <span><b>28</b>分钟</span>
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
                </article>
        )
    }
}
