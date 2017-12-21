import React,{Component} from 'react';
import './index.less'
import Header from "../../../components/Header/index";

export default class HistoryOrder extends Component{
    render(){
        return (
            <div>
              <Header title='订单'/>
                <p className='__p'></p>
                <section className='_section'>
                    <ul className='_section_ul1'>
                        <li className='_section_ul1_li1'><img src={require('./4F16F4F3333AA3A7EF830D236890E0CA.jpg')} alt=""/></li>
                        <li className='_section_ul1_li2'>十五言（会龙店）</li>
                        <li className='_section_ul1_li3'>订单完成</li>
                        <li className='_section_ul1_li4'></li>
                    </ul>
                    <ul className='_section_ul2'>
                        <li className='_section_ul2_li1'>鸟会下蛋3</li>
                        <li className='_section_ul2_li2'>￥22.00</li>
                        <li className='_section_ul2_li3'></li>
                    </ul>
                    <ul className='_section_ul3'>
                        <li className='_section_ul2_li1'>在来一单</li>
                        <li className='_section_ul2_li2'>评价得10金币</li>
                        <li className='_section_ul2_li3'></li>
                    </ul>

                </section>
                <section className='_section'>
                    <ul className='_section_ul1'>
                        <li className='_section_ul1_li1'><img src={require('./4F16F4F3333AA3A7EF830D236890E0CA.jpg')} alt=""/></li>
                        <li className='_section_ul1_li2'>十五言（会龙店）</li>
                        <li className='_section_ul1_li3'>订单完成</li>
                        <li className='_section_ul1_li4'></li>
                    </ul>
                    <ul className='_section_ul2'>
                        <li className='_section_ul2_li1'>鸟会下蛋3</li>
                        <li className='_section_ul2_li2'>￥22.00</li>
                        <li className='_section_ul2_li3'></li>
                    </ul>
                    <ul className='_section_ul3'>
                        <li className='_section_ul2_li1'>在来一单</li>
                        <li className='_section_ul2_li2'>评价得10金币</li>
                        <li className='_section_ul2_li3'></li>
                    </ul>

                </section>
                <section className='_section'>
                    <ul className='_section_ul1'>
                        <li className='_section_ul1_li1'><img src={require('./4F16F4F3333AA3A7EF830D236890E0CA.jpg')} alt=""/></li>
                        <li className='_section_ul1_li2'>十五言（会龙店）</li>
                        <li className='_section_ul1_li3'>订单完成</li>
                        <li className='_section_ul1_li4'></li>
                    </ul>
                    <ul className='_section_ul2'>
                        <li className='_section_ul2_li1'>鸟会下蛋3</li>
                        <li className='_section_ul2_li2'>￥22.00</li>
                        <li className='_section_ul2_li3'></li>
                    </ul>
                    <ul className='_section_ul3'>
                        <li className='_section_ul2_li1'>在来一单</li>
                        <li className='_section_ul2_li2'>评价得10金币</li>
                        <li className='_section_ul2_li3'></li>
                    </ul>

                </section>
            </div>
        )
    }
}