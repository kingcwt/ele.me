import React,{Component} from 'react';
import './index2.less';
import Header from "../../../components/Header/index";
export default class FirmOrder extends Component{
    render(){
        return (
            <div>
              <Header title='确认订单'/>
                <section className='_section_1'>
                    <div className='_section_div'>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNSA0MiI+PHBhdGggZmlsbD0iIzMxOTBFOCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTQuNTQ4IDQwLjU5MmMuMTQ3LjEzNCAxLjE1My45NTcgMi40NTIuOTY0IDEuMy4wMDYgMi4zMjItLjg1NSAyLjQ1OC0uOTc5QzI0LjE2OCAzNi4zMDMgMzQgMjYuMjggMzQgMTcuMDc5IDM0IDcuNjQ3IDI2LjM4OSAwIDE3IDBTMCA3LjY0NyAwIDE3LjA4Yy0uMDY2IDkuMjEgOS44MjUgMTkuMjQ4IDE0LjU0OCAyMy41MTJ6TTE3IDI0LjI4NmE3LjI4NiA3LjI4NiAwIDEgMCAwLTE0LjU3MiA3LjI4NiA3LjI4NiAwIDAgMCAwIDE0LjU3MnoiLz48L3N2Zz4=" alt=""/>
                        <span>请添加收货地址</span>
                        <img src={require('./jt.png')} alt=""/>
                    </div>
                   <i className='_section_i'></i>
                </section>
                <section className='_section_2'>
                    <svg></svg>
                    <span>送达时间</span>
                    <p>尽快送达 | 预计14:12</p>
                </section>
                <section className='_section_3'>
                   <div className='_section_3_div'>
                       <i className='_section_3_i1'></i>
                       <span>2222</span>
                       <i className='_section_3_i2'></i>
                   </div>
                    <ul className='_section_3_ul'>
                        <li className='_section_3_ul_li'>
                            <p className='_section_3_ul_li_p1'>蔬菜沙拉</p>
                            <p className='_section_3_ul_li_p2'>*5</p>
                            <p className='_section_3_ul_li_p3'>^22</p>
                        </li>
                    </ul>
                    <ul  className='_section_3_ul_2'>
                        <li className='_section_3_ul_2_li'>
                            <span className='_section_3_ul_2_li_span1'>配送菜</span>
                            <i className='_section_3_ul_2_li_i'></i>
                            <span className='_section_3_ul_2_li_span2'>&7</span>
                        </li>
                        <li className='_section_3_ul_2_li_2'>
                            <span className='_section_3_ul_2_li_2_span1'>参合</span>
                            <i className='_section_3_ul_2_li_2_i'></i>
                            <span className='_section_3_ul_2_li_2_span2'>&27</span>
                        </li>
                    </ul>
                    <ul className='_section_3_ul_3'>
                        <li className='_section_3_ul_li'>
                            <span className='_section_3_ul_3_span1'>抢</span>
                            <span className='_section_3_ul_3_span2'>限量抢购-19.9元午餐</span>
                            <span className='_section_3_ul_3_span3'>- ¥28.1</span>
                        </li>
                    </ul>
                    <div className='__section_div1'>
                        <span className='__section_div1_span1'>红包(含店铺红包)</span>
                        <span className='__section_div1_span2'>选择地址后使用红包 ></span>
                    </div>
                    <div className='__section_div2'>
                        <span className='__section_div2_span1'>优惠说明</span>
                        <span className='__section_div2_span2'>小计<h5>¥646.9</h5></span>
                    </div>
                    <div className='__div1'>在线支付</div>
                    <div className='__div2'>
                        <span className='__div2_span1'>订单备注</span>
                        <span className='__div2_span2'>口味偏重</span>
                    </div>
                    <div className='__div3'>不需要开发票</div>
                </section>
                <footer className='_gg'>
                    <span>待支付 ¥44.5</span>
                    <small>        ｜优惠 ¥16.5
                    </small>
                    <a>去支付</a>
                </footer>
            </div>
        )
    }
}