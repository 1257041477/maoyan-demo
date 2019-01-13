<template>
  <div>
    <noOrder v-if="orderList.length==0"></noOrder>
    <div class="order-list">
      <div
        class="order-item mb-line-tb"
        v-for="(item,index) in orderList"
        :key="index"
        @click="$router.push('/paymentOrder/'+item.id)"
      >
        <div class="order-title mb-line-b">
          <a class="cinema-name line-ellipsis">{{item.cinema.cinemaName}}</a>
        </div>
        <a data-link="/order/20579641457?$from=canary&amp;_v_=yes" class="order-detail-link">
          <div class="order-info">
            <img src="//p1.meituan.net/114.160/movie/a596474c1c29118d908d1eff0fd4293f1017066.jpg">
            <div class="order-desc">
              <div class="movie-name line-ellipsis">
                {{item.movie.movieName}}&nbsp;&nbsp;
                <span>{{item.seats.length}}张</span>
              </div>
              <div class="showTime line-ellipsis">{{item.show.showDate}} {{item.show.showTime}}</div>
              <div class="position line-ellipsis">
                {{item.hall.hallName}}
                <span
                  v-for="(seatItem,seatIndex) in item.seats"
                  :key="seatIndex"
                >{{seatItem.rowId}}排 {{seatItem.columnId}}座</span>

                <!-- <span>4排1座</span>
                <span>4排2座</span>
                <span>4排3座</span>
                <span>4排4座</span>-->
              </div>
            </div>
          </div>
        </a>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      orderList: []
    };
  },
  created() {
    this.$store.commit("setNavTitle", "我的电影订单");

    var user = JSON.parse(localStorage.Maoyan_user);

    var dict = {
      userId: user.id,
      token: user.token,
      userPhone: user.mobile
    };

    var self = this;
    this.request.getMyOrderList(dict, data => {
      self.orderList = data.data;
    });
  }
};
</script>
<style scoped>
.order-list {
  background: #eee;
  position: fixed;
  width: 100%;
  height: calc(100% - 48.5px);
  overflow-y: scroll;
}
.order-list::-webkit-scrollbar {
  display: none;
}
.order-list .order-item {
  background-color: #fff;
  margin-bottom: 10px;
}
.order-list .order-item .order-title {
  display: -webkit-box;
  display: flex;
  padding: 0 15px;
}
.order-list .order-item .order-title .cinema-name {
  display: inline-block;
  text-align: left;
  -webkit-box-flex: 1;
  flex: 1 1 auto;
  line-height: 38px;
  height: 38px;
  font-size: 13px;
  color: #666;
  margin-right: 6px;
}
.order-list .order-item .order-title .cinema-name:after {
  display: inline-block;
  content: "";
  width: 7px;
  height: 7px;
  border-left: 1px solid #777;
  border-top: 1px solid #777;
  -webkit-transform: rotate(135deg);
  transform: rotate(135deg);
}
.order-list .order-item .order-info {
  margin: 12px 15px;
  overflow: hidden;
  position: relative;
  display: -webkit-box;
  display: flex;
}
.order-list .order-item .order-info img {
  -webkit-box-flex: 0;
  flex: 0 0 auto;
  width: 57px;
  height: 80px;
}
.order-list .order-item .order-info .order-desc {
  -webkit-box-flex: 1;
  flex: 1 1 auto;
  margin-left: 12px;
  margin-top: 4px;
  overflow: hidden;
}
.order-list .order-item .order-info .order-desc .movie-name {
  font-size: 15px;
  color: #000;
  line-height: 21px;
  height: 21px;
}
.order-list .order-item .order-info .order-desc .position,
.order-list .order-item .order-info .order-desc .showTime {
  font-size: 12px;
  color: #888;
  line-height: 18px;
  height: 18px;
}
.line-ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.order-list .order-item .order-info .order-desc .showTime {
  margin-top: 5px;
}
.order-list .order-item .order-more {
  margin-left: 15px;
  padding: 0 15px 0 0;
}
.order-list .order-item .order-more .price,
.order-list .order-item .order-more .status {
  line-height: 42px;
  height: 42px;
  font-size: 13px;
  color: #888;
  display: inline-block;
}
.order-list .order-item .order-more .status {
  color: #333;
  float: right;
}
.order-list .order-item.good .order-title .cinema-name:after {
  display: none;
}
.order-list .order-item.good .order-title .left-time {
  color: #666;
}
.order-list .order-item.good .order-info img {
  width: 57px;
  height: 57px;
}
</style>

