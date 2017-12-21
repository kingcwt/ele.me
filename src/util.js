/**
 * Created by hayashisakaikyou on 2017/12/20.
 */
//上拉加载更多 限流 防抖
export function upLoadMore(dom,callback){
  let timer;
  //给dom绑定滚动事件
  dom.addEventListener('scroll',function(event){
    if(timer) clearTimeout(timer);
    timer = setTimeout(function(){
      let scrollTop = dom.scrollTop;//得到的向上卷去的高度
      let height = dom.clientHeight;//可视区域的高度
      let scrollHeight = dom.scrollHeight;//内容的高度
      if(scrollTop+height+10>scrollHeight){
        callback();
      }
    },80)
  });
}

export function downRefresh(dom,callback){
  dom.addEventListener('touchstart',touchStart);

  let startY;//开始触摸的纵坐标
  let distance;//移动的距离
  let initTop = dom.offsetTop;//记录最原始的top

  function touchStart(e){
    //只有当此元素的距离顶部的高度等于它的初始距离的话，并且没有滚动的话
    if(dom.offsetTop == initTop && dom.scrollTop ==0){
      startY = event.touches[0].pageY;//初始值
      dom.addEventListener('touchmove',touchMove);
      dom.addEventListener('touchend',touchEnd);
    }


    function touchMove(e){
      let pageY = e.touches[0].pageY;
      if(pageY>startY){//新的点的纵坐标大于起始点的纵坐标表示下拉
        distance = pageY - startY;
        dom.style.top = initTop+distance+'px';
      }else{//如果上拉的话不处理，移除监听
        dom.removeEventListener('touchmove',touchMove);
        dom.removeEventListener('touchend',touchEnd);
      }
    }





    function touchEnd(e){
      dom.removeEventListener('touchmove',touchMove);
      dom.removeEventListener('touchend',touchEnd);
      let timer = setInterval(function(){
        //让top值减1
        dom.style.top = dom.offsetTop - 1 +'px';
        //如果说当前的距离已经小于等于初始的值了
        if(dom.offsetTop<=initTop){
          dom.style.top = initTop+'px';
          clearInterval(timer);//清除定时器
        }

      },2);
      if(distance>50){
        callback();
      }
    }
  }
}