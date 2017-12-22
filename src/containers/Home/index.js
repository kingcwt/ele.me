import React,{Component} from 'react';
import HomeHeader from './HomeHeader/index';
import Search from "./Search/index";
import HotWords from "./HotWords/index";
import Banner from "./Banner/index";
import Title from "./Title/index";
import './index.less'
import ShopList from "./ShopList/index";

export default class Home extends Component{
    render(){
        return (
            <div className="home">
              <HomeHeader/>
              <Search/>
              <HotWords/>
              <Banner/>
              <a href="https://h5.ele.me/newuser/#geohash=wx4g0bmjetr7" className="
package"><img src="https://fuss10.elemecdn.com/3/c8/45b2ec2855ed55d90c45bf9b07abbpng.png?imageMogr/format/webp/thumbnail/!710x178r/gravity/Center/crop/710x178/"/></a>
              <Title/>
              <ShopList/>
            </div>
        )
    }
}