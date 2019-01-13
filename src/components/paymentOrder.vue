<template>
  <div class="body" style="background-color: #f0f0f0;">
    <section class="pay-section">
      <!-- 支付时间显示 -->
      <div class="count-down">
        支付剩余时间:
        <span class="cd-time">00:46</span>
      </div>
      <!-- 电影信息 -->
      <div class="movie-info">
        <div class="box-flex middle">
          <div class="title">{{orderData.movie?orderData.movie.movieName:''}}</div>
          <div class="flex"></div>
          <div class="logo"></div>
        </div>
        <div class="date">{{orderData.show?orderData.show.showDate:''}} {{orderData.show?orderData.show.showTime:''}} ({{orderData.show?orderData.show.lang:''}} {{orderData.show?orderData.show.dim:''}})</div>
        <div class="local">{{orderData.cinema?orderData.cinema.cinemaName:''}}</div>
        <div class="seats">IMAX厅
          <div class="seat"> {{orderData.hall?orderData.hall.hallName:''}} {{orderData.seats?orderData.seats.sectionName:''}} 
            <div
            class="seat"
            v-for="(item,index) in orderData.seats"
            :key="index"
          >{{item.rowId}}排{{item.columnId}}座&nbsp;&nbsp;</div>
          </div>&nbsp;&nbsp;
        </div>
      </div>
      <!-- 支付信息 -->
      <div class="pay-info mb-outline-b">
        <div class="box-flex mb-line-t discount-block">
          <div>活动与抵用券</div>
          <div class="flex"></div>
          <div data-bid="dp_wx_order_coupon">
            <span class="blk discount-amount" data-amount="无可用">无可用</span>
            <span class="discount-desc" data-content="不与其他优惠活动同享"></span>
            <span class="arrow"></span>
          </div>
        </div>
        <div class="box-flex mb-line-t">
          <div>手机号码</div>
          <div class="flex"></div>
          <div class="blk">{{orderData.userPhone?orderData.userPhone:''}}</div>
        </div>
        <div class="box-flex mb-line-t">
          <div>小计</div>
          <div class="flex"></div>
          <div class="red">
            <span class="icon">¥</span>
            <span class="paymoney">{{orderData.sellMoney?orderData.sellMoney:''}}</span>
          </div>
        </div>
      </div>
      <!-- 阿里支付 -->
       <form
          id="order"
          action="http://api.chinashouzhi.com/zhtest/alipay-web/pagepay/pagepay.php"
          method="post"
          target="_blank"
        >
          <input type="hidden" name="WIDout_trade_no" :value="Date.now()">
          <input type="hidden" name="WIDsubject" value="猫眼电影票">
          <input
            type="hidden"
            name="WIDtotal_amount"
            :value="this.orderData.sellMoney?this.orderData.sellMoney:''"
          >
          <input
            type="hidden"
            name="WIDbody"
            :value="this.orderData.seats?('电影票'+this.orderData.seats.length+'张'):''"
          >
        </form>
      <!-- 间隔 -->
      <div class="migrate-info mb-outline-tb"></div>
      <!-- 小吃模块 -->
      <div class="food-block mb-outline-tb has-food">
        <header class="box-flex middle">
          <div>观影标配</div>
          <div class="flex"></div>
          <div class="snacktitle box-flex middle">客官，爆米花跟电影最配噢~
            <div class="snackicon"></div>
          </div>
        </header>
        <section class="f-list">
          <div class="f-item mb-outline-t" data-id="100038467">
            <div class="f-img">
              <img
                data-com="album"
                data-page="0"
                data-pics="//p1.meituan.net/180.132/movie/d3d80cd8f8ee0d6d8878986f07223ee030258.jpg"
                src="//p1.meituan.net/180.132/movie/d3d80cd8f8ee0d6d8878986f07223ee030258.jpg"
                onerror="this.style.display='none'"
              >
            </div>
            <div class="f-con">
              <div class="f-name">
                <span class="personNum">单人</span>
                贝肯熊正版双人套餐 昆仑山*2+爆米花*1+毛绒公仔1套
              </div>
              <div class="f-recommend-container">
                <div class="f-recommend">
                  <div class="recommendicon"></div>
                  <span>观影用户推荐</span>
                </div>
              </div>
              <div class="f-con-b flex-between">
                <div class="f-price">
                  <span class="p-real">
                    <span class="icon">¥</span>                   
                    99
                  </span>
                  <span class="p-yet">¥
                    <span>159</span>
                  </span>
                </div>
                <div class="f-oper" data-id="100038467">
                  <div class="box">
                    <span class="minus" data-bid="dp_wx_order_deal_minus"></span>
                    <span class="num">0</span>
                    <span class="add" data-bid="dp_wx_order_deal_plus"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="f-item mb-outline-t" data-id="100038468">
            <div class="f-img">
              <img
                data-com="album"
                data-page="0"
                data-pics="//p0.meituan.net/180.132/movie/2eaf966008a1beb96c921e0731cbfb4f13879.jpg"
                src="//p0.meituan.net/180.132/movie/2eaf966008a1beb96c921e0731cbfb4f13879.jpg"
                onerror="this.style.display='none'"
              >
            </div>
            <div class="f-con">
              <div class="f-name">
                <span class="personNum">单人</span>
                贝肯熊正版单人套餐 昆仑山*1+挂饰*1 1套
              </div>
              <div class="f-recommend-container"></div>
              <div class="f-con-b flex-between">
                <div class="f-price">
                  <span class="p-real">
                    <span class="icon">¥</span>                    
                    39
                  </span>
                  <span class="p-yet">¥
                    <span>69</span>
                  </span>
                </div>
                <div class="f-oper" data-id="100038468">
                  <div class="box">
                    <span class="minus" data-bid="dp_wx_order_deal_minus"></span>
                    <span class="num">0</span>
                    <span class="add" data-bid="dp_wx_order_deal_plus"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="f-item mb-outline-t" data-id="100038464">
            <div class="f-img">
              <img
                data-com="album"
                data-page="0"
                data-pics="//p0.meituan.net/180.132/movie/4825d03dd0053c55b9864fd697397ad726297.jpg"
                src="//p0.meituan.net/180.132/movie/4825d03dd0053c55b9864fd697397ad726297.jpg"
                onerror="this.style.display='none'"
              >
            </div>
            <div class="f-con">
              <div class="f-name">贝肯熊正版零钱包1个</div>
              <div class="f-recommend-container"></div>
              <div class="f-con-b flex-between">
                <div class="f-price">
                  <span class="p-real">
                    <span class="icon">¥</span>                    
                    19
                  </span>
                  <span class="p-yet">¥
                    <span>39</span>
                  </span>
                </div>
                <div class="f-oper" data-id="100038464">
                  <div class="box">
                    <span class="minus" data-bid="dp_wx_order_deal_minus"></span>
                    <span class="num">0</span>
                    <span class="add" data-bid="dp_wx_order_deal_plus"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="f-item mb-outline-t" data-id="100038466">
            <div class="f-img">
              <img
                data-com="album"
                data-page="0"
                data-pics="//p0.meituan.net/180.132/movie/e7eb1038ac8f8124b817bece9e85fc8218067.jpg"
                src="//p0.meituan.net/180.132/movie/e7eb1038ac8f8124b817bece9e85fc8218067.jpg"
                onerror="this.style.display='none'"
              >
            </div>
            <div class="f-con">
              <div class="f-name">贝肯熊正版毛绒公仔 坐姿款1个</div>
              <div class="f-recommend-container"></div>
              <div class="f-con-b flex-between">
                <div class="f-price">
                  <span class="p-real">
                    <span class="icon">¥</span>                   
                    59
                  </span>
                  <span class="p-yet">¥
                    <span>89</span>
                  </span>
                </div>
                <div class="f-oper" data-id="100038466">
                  <div class="box">
                    <span class="minus" data-bid="dp_wx_order_deal_minus"></span>
                    <span class="num">0</span>
                    <span class="add" data-bid="dp_wx_order_deal_plus"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="f-item mb-outline-t" data-id="100038465">
            <div class="f-img">
              <img
                data-com="album"
                data-page="0"
                data-pics="//p1.meituan.net/180.132/movie/35d93937155666e894a2fb720319480920462.jpg"
                src="//p1.meituan.net/180.132/movie/35d93937155666e894a2fb720319480920462.jpg"
                onerror="this.style.display='none'"
              >
            </div>
            <div class="f-con">
              <div class="f-name">贝肯熊正版挂饰1个</div>
              <div class="f-recommend-container"></div>
              <div class="f-con-b flex-between">
                <div class="f-price">
                  <span class="p-real">
                    <span class="icon">¥</span> 
                    29
                  </span>
                  <span class="p-yet">¥
                    <span>59</span>
                  </span>
                </div>
                <div class="f-oper" data-id="100038465">
                  <div class="box">
                    <span class="minus" data-bid="dp_wx_order_deal_minus"></span>
                    <span class="num">0</span>
                    <span class="add" data-bid="dp_wx_order_deal_plus"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer class="snack-discount-block mb-outline-t">
          <div class="f-left">抵用券</div>
          <div class="f-right" data-bid="dp_wx_snack_coupon">
            <span class="snack-discount-amount">无可用</span>
            <span class="arrow"></span>
          </div>
        </footer>
        <footer class="mb-outline-t count-price-container" style="display:none">
          <div class="f-left">小计</div>
          <div class="f-right">
            <span class="icon">¥</span>
            <span class="count-price">0</span>
          </div>
        </footer>
      </div>
      <!-- 食品 -->
      <section class="food-modal modal"></section>
      <!-- 确认订单 -->
      <section class="price-section"><div class="price-block mb-outline-t">
      <div class="box-flex" style="margin-bottom:10px;justify-content: space-between;">
        <div id="refundmigrateDetail" class="refundmigrateDetail support" style="display: none;">
            <span style="color: #FF9900;">退改签须知</span><span class="arrow up"></span>
        </div>
        <div class="refundmigrateDetail nosupport" style="">
            <span style="color: #999;">不支持退票、改签</span>
            <span class="arrow up"></span>
        </div>
        <div id="priceDetail" class="price tips-money" style="padding: 12px 0 6px 0;line-height: 0;"><span class="also">应付:</span><span class="d">¥</span><span class="last-amount">{{orderData.sellMoney?orderData.sellMoney:''}}</span><span class="arrow up"></span></div>
      </div>
      <div  @click="dealPayOrder" class="price-btn" data-bid="dp_wx_order_pay_btn">确认支付</div>
      </div>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: "paymentOrder",
  data() {
    return {
      orderData:{}
    };
  },
  created() {
    this.$store.commit("setNavTitle", "支付订单");
    var orderId = this.$route.params.id;

    var user = JSON.parse(localStorage.Maoyan_user);

    var dict = {
      userId: user.id,
      token: user.token,
      orderId: orderId
    };

    var self = this;
    this.request.getOrderInfo(dict, data => {
      self.orderData = data.data;
      console.log(self.orderData)
    });
  },
  methods:{
    dealPayOrder(){
      var orderForm = document.getElementById("order");
      order.submit();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section.pay-section {
    color: #333;
    padding-bottom: 57px;
}
article, aside, details, figcaption, figure, footer, header, main, menu, nav, section, summary {
    display: block;
}
/* 支付时间 */
section.pay-section .count-down {
    color: #f90;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    background: #fef3d9;
    background-size: 17px 17px;
    text-align: center;
    line-height: 38px;
    box-sizing: border-box;
    height: 38px;
    font-size: 13px;
}
/* 电影信息 */
section.pay-section .movie-info {
    background-color: #fff;
    padding: 15px;
    line-height: 1;
    color: #333;
    font-size: 13px;
}
.box-flex:not(.column).middle, .inline-flex:not(.column).middle {
    -webkit-box-align: center;
    align-items: center;
}
.box-flex {
    display: -webkit-box;
    display: flex;
}
section.pay-section .movie-info .date {
    font-size: 14px;
    line-height: 20px;
    margin-top: 7px;
    color: #f34d41;
}
section.pay-section .movie-info .local {
    font-size: 14px;
    line-height: 20px;
    margin-top: 4px;
}
section.pay-section .movie-info .title {
    font-family: PingFangSC-Medium,Hiragino Sans GB,sans-serif;
    font-size: 16px;
    line-height: 23px;
}
.flex {
    -webkit-box-flex: 1;
    flex: 1;
}
section.pay-section .movie-info .logo {
    -webkit-box-flex:0;
    flex:0 0 auto;
    height:14px;
    width:81px;
    background-image:url(data:image/png;base64,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);
    background-size:cover
}
section.pay-section .movie-info .seats {
    font-size: 14px;
    line-height: 20px;
    margin-top: 4px;
}
section.pay-section .movie-info .seats .seat {
    display: inline-block;
}
/* 支付信息 */
section.pay-section .pay-info {
    background-color: #fff;
    padding: 0 15px;
}
section.pay-section .migrate-info {
    background-color: #fff;
    padding: 0 15px;
    margin-top: 10px;
}

section.pay-section .pay-info>div {
    line-height: 45px;
    font-size: 15px;
    color: #666;
    margin-right: -15px;
    padding-right: 15px;
}
.mb-line-t {
    background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAABlBMVEUAAADh4eGdLxMbAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjOMDAAAACRADBQq93fQAAAABJRU5ErkJggg==) 0 top repeat-x
}
.mb-outline-b {
    background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzhCNEEzQTE0NzNBMTFFNkEyMkFFN0M2MDc0NjIyN0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzhCNEEzQTA0NzNBMTFFNkEyMkFFN0M2MDc0NjIyN0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2Mzg3REIwMzQ3MzcxMUU2QTIyQUU3QzYwNzQ2MjI3RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2Mzg3REIwNDQ3MzcxMUU2QTIyQUU3QzYwNzQ2MjI3RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoL90/MAAAAZSURBVHjaYvr//z8DCLM8evToPwMQAAQYAGuLCaa37ZaAAAAAAElFTkSuQmCC) 0 bottom repeat-x
}
@media (-webkit-min-device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 3)
.mb-line-all, .mb-line-b, .mb-line-l, .mb-line-lr, .mb-line-r, .mb-line-t, .mb-line-tb, .mb-outline-b, .mb-outline-t, .mb-outline-tb {
    background-size: 1px 1px;
}
.flex {
    -webkit-box-flex: 1;
    flex: 1;
}
section.pay-section .pay-info .blk {
    color: #333;
    font-size: 13px;
}
section.pay-section .pay-info .coupon-desc, section.pay-section .pay-info .discount-desc {
    font-size: 12px;
}
section.pay-section .arrow {
    width: 8px;
    height: 8px;
    margin-left: -2px;
}
.arrow {
    width: 10px;
    height: 10px;
    border: 1px solid #ccc;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    border-left: none;
    border-top: none;
    left: -2px;
}
section.pay-section .pay-info .blk {
    color: #333;
    font-size: 13px;
}
section.pay-section .pay-info .red .icon {
    font-size: 13px;
}
section.pay-section .pay-info .red {
    color: #ef4238;
    font-size: 18px;
}
section.pay-section .migrate-info {
    background-color: #fff;
    padding: 0 15px;
    margin-top: 10px;
}
@media (-webkit-min-device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 3)
.mb-line-all, .mb-line-b, .mb-line-l, .mb-line-lr, .mb-line-r, .mb-line-t, .mb-line-tb, .mb-outline-b, .mb-outline-t, .mb-outline-tb {
    background-size: 1px 1px;
}

/* 小吃模块 */


section.pay-section .food-block.has-food {
    margin-top: 10px;
}
section.pay-section .food-block {
    padding: 0 15px;
    font-size: 15px;
    background-color: #fff;
}
.food-modal {
    width: 100%;
    bottom: 0;
    color: #464646;
    font-size: 12px;
    height: 350px;
    overflow-y: scroll;
    background-color: #f0f0f0;
}
.modal {
    display: none;
    position: fixed;
    z-index: 99;
}
.box-flex:not(.column).middle, .inline-flex:not(.column).middle {
    -webkit-box-align: center;
    align-items: center;
}
section.pay-section .food-block header .snacktitle {
    font-size: 12px;
    color: #999;
}
section.pay-section .food-block header .snackicon {
    height:20px;
    width:17px;
    margin-left:4px;
    background-size:cover;
    background-image:url(data:image/png;base64,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)
}
section.pay-section .food-block footer, section.pay-section .food-block header {
    color: #666;
    padding: 12px 0;
}
section.pay-section .food-block .f-item {
    padding: 15px 15px 15px 0;
    margin-bottom: -1px;
    overflow-y: hidden;
    -webkit-transition: height .2s linear;
    transition: height .2s linear;
    margin-right: -15px;
}
section.pay-section .food-block .f-item .f-img {
    width: 95px;
    height: 95px;
    margin-right: 15px;
    background: #f0f0f0;
    position: relative;
}
section.pay-section .food-block .f-item .f-con {
    -webkit-box-flex: 1;
    flex: 1;
}
section.pay-section .food-block .f-item .f-img img {
    width: 100%;
    height: 100%;
}
section.pay-section .food-block .f-item .f-con .f-name {
    height: 40px;
    line-height: 20px;
    margin-bottom: 4px;
    overflow: hidden;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
}
section.pay-section .food-block .f-item .f-recommend-container {
    display: inline-block;
    font-size: 10px;
    color: #f90;
    height: 23px;
}
section.pay-section .food-block .f-item .f-con .f-con-b {
    -webkit-box-align: end!important;
    align-items: flex-end!important;
}
.flex-between, section.pay-section .food-block .f-item, section.pay-section .food-block footer {
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
}
section.pay-section .food-block .f-item .f-con .f-name .personNum {
    background: #f90;
    color: #fff;
    font-size: 10px;
    line-height: 12px;
    height: 12px;
    padding: 1px 4px;
    border-radius: 2px;
    position: relative;
    top: -1px;
}
section.pay-section .food-block .f-item .f-recommend {
    background: #fff7ea;
    line-height: 16px;
    padding: 0 5px;
}
section.pay-section .food-block .f-item .f-recommend .recommendicon {
    display:inline-block;
    width:10px;
    height:10px;
    margin-right:5px;
    background-size:cover;
    background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVCAYAAABCIB6VAAAAAXNSR0IArs4c6QAAAmBJREFUOBGllTtoVFEQhv/Zh8S3Qiy2EYtUgqVPjFj5aEQsFCujwRdYiFhYWFraiJWaGIU0ChY2IiEiBJFtAsHGF6j4wFKTQjS77vGbc+8mu5u7ZNcMzJkzr//OOWeGa+qCwi31yjRKylYFPdAyXbKT+p0FUcgytrWZrgG4P/Wf16x+sb+cFZ/LMra1BSp1Ml1krboMw1odbS1Lx8BhRD3kbon5pkeAvqD6vP5qewtmVDsG5thHyCgC+NpO6yv7zxHBtC7KlqUjYB5tLXnXY27QzRQjuYLAJzNoUeDwkONK9+AS1U4hh2BxDZuilL6nskkYias0rQMEroke41EKmqCNPsV7reg+vqP4fmDfaYN6S85ytBlsBeV0AVlvuRp7v6qyhdt6SmK9hbBH8iR/qMPwDXiGag/aGb1kr3BH/appwvdt6Kr38e7UOUqy39cePtTHvh/OAeDtNVIHjbE1KjYNp3mNIk/uAL5zDjwNr6SZrtgJfeMEI+h9cBFOKBDeQHZWY6jOTcQjlzAMEN3jj+fAoh/95f1RLMr/WfLaHNNM73IA/YxKNe1Ha66uK/yatqXxk/MVK624K6QFwTuiJaic4+BJxW0maEFqG0PwKwzaFd1FB67fcVhixUOxPXvB+2Kn9MGBk4pD9szHCjpZgvbFMNMzl/MVL/2OkyEzBg4qzHWFaX14jv4+fsx9YjiqyUalOMYbVEn1ZvFRG/Hs5ZZntSLpbx/pQ4A/bo5EMx1nfYNvEuknW5xMd5nQQQ/0Ph4H5An7P7BXWEEv4xkjaAp5DP1Vg99jWtlzxpnfud/UP+V0ob2tyHowAAAAAElFTkSuQmCC)
}
section.pay-section .food-block .f-item .f-price {
    font-size: 12px;
}
section.pay-section .food-block .f-item .f-oper {
    display: -webkit-box;
    display: flex;
    box-sizing: border-box;
    height: 25px;
    width: 82px;
    border-radius: 100px;
    overflow-x: hidden;
    line-height: 25px;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
}
section.pay-section .food-block .f-item .f-price .p-real {
    color: #f03d37;
    font-size: 17px;
}
section.pay-section .food-block .f-item .f-price .p-yet {
    color: #999;
    text-decoration: line-through;
}
section.pay-section .food-block .f-item .f-price .p-real .icon {
    font-size: 13px;
}
section.pay-section .food-block .f-item .f-oper .box {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    box-sizing: border-box;
    -webkit-box-pack: end;
    justify-content: flex-end;
}

section.pay-section .food-block .f-item .f-oper .box>span.minus, section.pay-section .food-block .f-item .f-oper .box>span.num {
    display: block;
}
section.pay-section .food-block .f-item .f-oper .add, section.pay-section .food-block .f-item .f-oper .minus {
    display:inline-block;
    width:25px;
    height:25px;
    border-radius:50%;
    background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAyCAYAAADx/eOPAAAAAXNSR0IArs4c6QAABUZJREFUaAXdWmtoXEUUPmfu3U23ZG8qSPNDU38E04a2giAmMUk3MamKQlpbUrREa1GCgi8E66Oo+EPQ/lDwlwQf+KCUiqHBP8W+kprmAaLFtGoSCjatYMyf7CY2bXZ3jmdueveVu4+7uTG7uT92HufMN+e7M3N27plBcOmhzk7Pv+Mj22QUWiXJTQhQBYC3ElApIno5neWuZpBwgpBGkcQvXg9+7zs9cNklE4D7zP+htnp/MCgfQqIdbOwjQLDOMRrCeQTs0YQ4Vto7cN5x+4QGeZGh9jpfcFK+xDivM4GyBLwlZZlUPwpxwOgbGMwHyBEZam/XZiavPiWB3gWi2/LpMKc2iN3Co79hnOofy0n/plLOZILbau4kwO+YxFYnHeSry+sswm3fN/oG3+Y85YKTE5npptpWiMJRALolF1A3dRChxxC+DuztVQ4k45OVTDBQ+wKvi4+ISMuItJxCxJESAW2+3qE/M3WTkcx0Y+0HPBoHMgH8XzJ2DlOoa43GmXOj6fpMSyYUqNkvJXyeruFK1LOxY4bmq+EpN23Xv7CrDDXX1pOET+xkK1nHXqAqJK8fVV7Vzo5FZOZaGzZQBLq5odeuwUrX8drdHpq88qGdHYvIzM+Hu/jffL2dcqHUMaEXZwL1zan2JJGZba5rIYIHU5UKsSwpcohJJa35GBkliETpkNuG640B8O7eA2gYrkLzS78nGKjbkwgaY8aCx0nKw4nCpeZLOvbBms7nTJjoxGWY3bcXIBpdKmysPbvrS0b1XdXY1RVWlbGRASkPxrRcyugNjTEkbcMdIG6viJXdyPDargyNXnjMwjLJhFoaqth7bbYq3UpR9yRDed13kCSju6xOFkZmPrrDqijC9AH1SaLsNsnwl9/OIiRhmbx2ZpK2m2RmW2rKeVtfa0mKMeXvK3NmCRnGGl4vcUdQhGzYq91njgwQbixC+5NNJqqkpiZdAMrKZEnxlXhmea5LWSH4U9h5RKUA+UoIr9PZLn8+tq159nnwProb0Gd6xZwg/J99lVaPdx8Q/e0iXHvnTaCpqbR66QQS0M8Ln3c5Dh9tUzWU7O1wRCRbFxxiAn3LVih5Yn82VVs5cdCDyWDWQIFt6wKr1EjOCgSy/QTNZGv0j9/hxuFvgObmMqk5kqlpFrkwAje+/sJRO0tZgGcaQ411r0qQrm/9VSeln34JWlXc8888/STIcUdxPcvWjClv/cMcG1jLrpnSRjsyIhSSEPESBzkiQnhomJnJQrLNqS38KTCg2ojSU8OTgDjkFKCQ9Hl69Zhk1A+fmRwrJOMc2nLNX44nVJuFDaZXM5k5BCkU9R/w20HTrZpk1NEBr5uLhWKdEztQaN2W/sLIqJIQ71mVbqUUMeMMcbj5+XjehZwZ0Ni45YgFFSNj9A4cYUfwsyVwI430/xiDUdEZefVKrOxGhqNmB63IjMLj2RV/VBAwEpEn4zVLz6m4mVhfDuETx4FCoaUD3kTgc5ufjL6hexMPopLIKD0+ITteDFFNTej3+/vOnUl8O7FpZlV6vZ5Onov/WOVCTHk0Pk4louxcRMZ3sn8CddjFQ+buanXprTCRE0Z5xSt2cIummaW0ag6bFCGjb5j34rgsu2nrhTlJeerzMaDelu7UTGGlHRmro1VzQGsRWjVH5xahYrjUsMibWcanpmVnh8fLyivuFiie4Z3CX6lyV8t83QQ9+uays0NvJf4pZusj65qxAzAvAv0NL3MA8bWivQiUSizhitZO/tp7mIk5Dyiu9BWtVFKqrC7PBcd+DQiJLcmX58DP+yjr8lxoOS/P/Qc5asye9h9/awAAAABJRU5ErkJggg==);
    background-position:50%;
    background-repeat:no-repeat;
    background-size:25px 25px;
    -webkit-transition:all .3s linear;
    transition:all .3s linear
}
section.pay-section .food-block .f-item .f-oper .box>span {
    box-sizing: border-box;
    display: block;
}
section.pay-section .food-block .f-item .f-oper .num {
    height: 14px;
    line-height: 16px;
    width: 32px;
    text-align: center;
}
section.pay-section .food-block .f-item .f-oper .minus {
    background-image:url(data:image/png;base64,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)
}

section.pay-section .food-block .f-item .f-oper {
    display: -webkit-box;
    display: flex;
    box-sizing: border-box;
    height: 25px;
    width: 82px;
    border-radius: 100px;
    overflow-x: hidden;
    line-height: 25px;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
}


/* 确认订单 */

section.price-section {
    color: #333;
    padding-bottom: 57px;
}
section.price-section .price-block {
    padding: 10px 15px;
    background-color: #fff;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 10;
    box-sizing: border-box;
}
.box-flex {
    display: -webkit-box;
    display: flex;
}
section.price-section .price-block .price-btn {
    line-height: 45px;
    width: 100%;
    background-color: #ff9e05;
    border-radius: 4px;
    text-align: center;
    color: #fff;
    font-size: 16px;
}
section.price-section .refundmigrateDetail {
    -webkit-box-flex: 1;
    flex: 1;
    padding: 12px 0 6px;
    line-height: 0;
}
section.price-section .refundmigrateDetail {
    -webkit-box-flex: 1;
    flex: 1;
    padding: 12px 0 6px;
    line-height: 0;
}
section.price-section .price-block .price {
    font-size: 21px;
    color: #ef4238;
}
section.price-section .price-block .price .also {
    font-weight: 400;
    color: #333;
    font-size: 14px;
}
section.price-section .price-block .price .d {
    font-size: 13px;
}
section.price-section .arrow {
    width: 8px;
    height: 8px;
    margin-left: -2px;
}
.arrow.up {
    margin-left: 10px!important;
    -webkit-transform: rotate(-135deg) translateY(-3px);
    transform: rotate(-135deg) translateY(-3px);
}
</style>
