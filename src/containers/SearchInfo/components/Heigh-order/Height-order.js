import React, { Component } from 'react'
import  WebStorageCache from 'web-storage-cache'
export default (WrappedComponent, name) => {
    class NewComponent extends Component {
        constructor () {
            super()

        }
        setTime(date){//设置超市秒数
            let date1 = null;
            if(date){//如果传递描述，就在当前时间家秒数
                date1 = new Date();
                date1 = new Date(date1.getTime() + 1000*date);
            }else{//如果没传递就用默认值
                date1= '2018/12/24 13:55:00';
                date1= new Date(date1)
            }
            let date2 = new Date();    //开始时间时间
            let  date3 =  date1.getTime() - date2.getTime();   //时间差的毫秒数
            return date3/1000
        }
        HeighOderFn = (_data) => {
            //下面逻辑设置搜索数据缓存的
            this.wsCache = new WebStorageCache();
            let opt = this.wsCache.get('searchData');//localhost里的字段值
            let Time = this.setTime(100000);//秒，可以统一设置超时时间，切每次搜索新的次，都会重新设置时间，如果不写参数默认一年过期
            if (opt == null && !_data.match(/^\s*$/)) {// 用正则匹配不是空的或空格
                opt = [_data];
                this.wsCache.set('searchData', opt, {exp: Time});//exp设置超时秒数，按照秒来算
            } else if (opt.length < 10 && !_data.match(/^\s*$/)) {//如果有数据，切数据不足十条！
                if (opt.indexOf(_data) != -1) {//如果有重复的
                    opt = opt.filter((item, index) => item != _data)//去除重复的
                }
                opt = [_data, ...opt];
                this.wsCache.set('searchData', opt, {exp: Time})

            } else if (!_data.match(/^\s*$/)) {//数据为10条时候，默认缓存就10条
                if (opt.indexOf(_data) != -1) {//如果有重复的就删掉重复的
                    opt = opt.filter((item, index) => item != _data)
                } else {//如果没有重的删除最后一条
                    opt.pop();//删除多余的一条
                }
                opt.unshift(_data)//把搜索的数据插入数组最前面
                this.wsCache.set('searchData', opt, {exp: Time})
            }

        }
        render () {
            return <WrappedComponent HeighOderFn = {this.HeighOderFn} history = {name} />
        }
    }
    return NewComponent
}