import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';
import './index.less';

class Banner extends Component {
  render() {
    return (
      <ReactSwipe className="banner">
        <div className='bannerList'>
          <a href="/">
            <img
              src="//fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
            <span>美食</span>
          </a>
          <a href="/">
            <img
              src="//fuss10.elemecdn.com/d/38/7bddb07503aea4b711236348e2632jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
            <span>晚餐</span>
          </a>
          <a href="/">
            <img
              src="//fuss10.elemecdn.com/c/3c/0184f5b3fa72f295fc01864734218jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
            <span>商超便利</span>
          </a>
          <a href="/">
            <img
              src="//fuss10.elemecdn.com/c/db/d20d49e5029281b9b73db1c5ec6f9jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
            <span>果蔬生鲜</span>
          </a>
          <a href="/">
            <img
              src="//fuss10.elemecdn.com/1/a5/b4aa9dd27ff21d0a76bb0da550fd7jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
            <span>炸鸡炸串</span>
          </a>
          <a href="/">
            <img
              src="//fuss10.elemecdn.com/6/74/785eafaf358fa6b18df37c64c3510jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
            <span>大牌5折</span>
          </a>
          <a href="/">
            <img
              src="//fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
            <span>甜品饮品</span>
          </a>
          <a href="/">
            <img
              src="//fuss10.elemecdn.com/b/e1/58aa34ef194d216c9f2328f603588jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
            <span>医药健康</span>
          </a>
        </div>
        <div className='bannerList'>
          <a href="/">
            <img
              src="//fuss10.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
            <span>浪漫鲜花</span>
          </a>
          <a href="/">
            <img
              src="//fuss10.elemecdn.com/3/c7/a9ef469a12e7a596b559145b87f09jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
            <span>麻辣烫</span>
          </a>
          <a href="/">
            <img
              src="//fuss10.elemecdn.com/7/43/0947110c24c620a767745054d798bjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
            <span>地方菜系</span>
          </a>
          <a href="/">
            <img
              src="//fuss10.elemecdn.com/7/b6/235761e50d391445f021922b71789jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
            <span>披萨意面</span>
          </a>
          <a href="/">
            <img
              src="//fuss10.elemecdn.com/a/fa/d41b04d520d445dc5de42dae9a384jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
            <span>新店特惠</span>
          </a>
          <a href="/">
            <img
              src="//fuss10.elemecdn.com/9/3f/cd951a6dbc7ecc5b12e24e9f8a124jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
            <span>快餐便当</span>
          </a>
        </div>
      </ReactSwipe>
    )
  };
}

export default Banner;