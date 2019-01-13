<template>
	<div class="body">


		<div class="body-wrap">

			<!-- 影院信息 -->
			<div class="cinema-wrap">
				<div class="cinema-block">

					<!-- 影院基本信息 -->
					<div class="cinema-info">
						<div class="title line-ellipsis">UME国际影城(双井店)</div>
						<div class="location line-ellipsis">朝阳区东三环中路65号富力广场北区5层</div>
						<div class="location-icon" data-bid="dp_wx_cinema_map"><img src="data:image/png;base64,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"></div>
					</div>

					<!-- 轮播图 -->
					<div>
						<div>

							<!-- 真正轮播图 -->
							<!-- Swiper -->
							<div class="cinema-nav swiper-container swiper-container-horizontal">
								<div class="post-bg" style="background-image: url(&quot;//p1.meituan.net/148.208/movie/426f1f3f1b145f763b75a60c7c39c44a535093.jpg&quot;);"></div>
								<div class="post-bg-filter"></div>
								<div class="swiper-wrapper">
									<div class="swiper-slide" v-for="(item,index) in movies" :key="index">
										<div class="post" data-bid="dp_wx_cinema_movie_pic_click">
											<img :src="item.img|wh128x180">
										</div>
									</div>

								</div>
							</div>

							<div class="movie-info" v-if="movies.length>0">
								<div class="movie-title line-ellipsis">
									<span class="title">
										{{movies[activeMovieIndex].nm}}
									</span>
									<span class="grade">
										<span>{{movies[activeMovieIndex].sc}}<span class="small">分</span></span>

									</span>

								</div>
								<div class="movie-desc line-ellipsis">
									{{movies[activeMovieIndex].desc}}
								</div>
							</div>

						</div>
					</div>



				</div>
			</div>

			<!-- 日期 -->
			<div class="nav-wrap">
				<div class="nav-block mb-line-t">
					<div class="nav-bar mb-line-b" v-if="movies.length>0">

						<div class="nav-item" 
						data-bid="dp_wx_cinema_show_date" 
						data-id="today-show-end" 
						v-for="(item,index) in movies[activeMovieIndex].shows"
						:key="index"
						 :class="{active:selectDayIndex==index}" 
						 @click="selectDayIndex=index">
							<span class="date-title">
								{{item.dateShow}}
							</span>
						</div>
					</div>
				</div>
			</div>

			<div class="seat-wrap">
				<div class="seat-inner-wrap">
					<div class="seat-list">
						<div class="list-wrap" v-if="movies.length>0">
							<div class="item-outer mb-line-b" 
								data-bid="dp_wx_cinema_show_item"
								v-for="(item,index) in movies[activeMovieIndex].shows[selectDayIndex].plist"
								:key="index">
								<div class="item box-flex">
									<div class="time-block">
										<div class="begin">{{item.tm}}</div>
										<div class="end">11:44<span class="tui">散场</span></div>
									</div>
									<div class="info-block">
										<div class="lan">{{item.lang}} {{item.tp}}</div>
										<div class="hall">{{item.th}}</div>
									</div>
									<div class="price">
										<div class="sellPr"><span class="d">¥</span>
										{{item.vipPrice}}
										</div>
									</div>
									<div class="button-block">
										<div class="button"  data-bid="dp_wx_cinema_show_btn" @click="dealBuyTicket">购票</div>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
			
			<!-- 购票套餐 -->
			<div class="tuan-wrap" v-if="movietuan.length>0">
				<div class="gap" style="height: 10px; background-color: #f0f0f0;"></div>
				<div class="tuan-list">
					<div class="tuan-title mb-line-b">影院超值套餐</div>
					<div class="tuan-item mb-line-b" v-for="(item,index) in movietuan"
					:key="index">
						<img data-ui-type="image-viewer" :src="item.imageUrl|wh128x180">
						<span class="hot-tag ">{{item.cardTag}}</span>
						<div class="item-info">
							<div class="title">
								<span>双人</span>
								{{item.title}}
							</div>
							<div class="sell-num">{{item.curNumberDesc}}</div>
							<div class="price">
								<span class="sell-price">
								<span>¥</span><span class="num">{{item.price}}</span>
								</span>
							</div>
							<div class="buy-btn">去购买</div>
						</div>
					</div>
				</div>
			</div>


		</div>



	</div>
</template>

<script>
	export default {
		name: 't',
		data() {
			return {
				detail: {},
				movies: [],
				movietuan:[],
				activeMovieIndex: 0,
				selectDayIndex: 0
			}
		},

		created() {


			var self = this

			this.$store.commit("setNavTitle", this.$route.params.name)

			var id = this.$route.params.id
			this.request.getCinemaDetail({
				cinemaId: id
			}, (data) => {
				this.detail = data
				console.log(this.detail)
				this.movies = data.showData.movies
				// console.log(this.movies)
				this.movietuan = data.dealList.dealList
				console.log(this.movietuan)


				this.$nextTick(() => {
					//初始化轮播图
					//注意:数据下载完成后加载
					var swiper = new Swiper('.swiper-container', {
						slidesPerView: 'auto',
						centeredSlides: true,
						spaceBetween: 0,
						//点击图片切换
						slideToClickedSlide: true,
						pagination: {
							el: '.swiper-pagination',
							clickable: true,
						},
						
						//日期
						on: {
							slideChange: function() {
								// console.log(this.activeIndex)
								self.activeMovieIndex = this.activeIndex
								
								//日期序号归0
								self.selectDayIndex = 0
							},
						},
					});

				})
			})
		},
		mounted() {
			
		},
		methods: {
			dealBuyTicket(){
				if(!this.$store.getters.getIsLogin){
						this.$router.push("/login")
						return
				}
				this.$router.push("/seatingPlan")
			}
		},
		computed: {

		},
		watch: {

		},
		components: {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.body .body-wrap {
		margin-bottom: 25px;
	}

	.body .body-wrap>div {
		background-color: #fff;
	}

	.cinema-block .cinema-info {
		position: relative;
		padding: 15px 100px 15px 15px;
	}

	.cinema-block .cinema-info .title {
		font-size: 17px;
		line-height: 24px;
		font-weight: 700;
		color: #333;
	}

	.line-ellipsis {
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}

	.cinema-block .cinema-info .location {
		margin-top: 2px;
		font-size: 13px;
		line-height: 18.5px;
		color: #999;
	}

	.cinema-block .cinema-info .location-icon {
		position: absolute;
		right: 0;
		top: 50%;
		width: 70px;
		height: 31px;
		-webkit-transform: translateY(-50%);
		transform: translateY(-50%);
		border-left: 1px solid #d8d8d8;
		text-align: center;
	}

	.cinema-block .cinema-info .location-icon img {
		display: inline-block;
		width: 19px;
		height: 22px;
		margin-top: 5px;
	}



	.cinema-block .movie-info {
		padding: 11px 15px;
		text-align: center;
	}

	.cinema-block .movie-info .movie-title {
		height: 24px;
		line-height: 24px;
		font-size: 17px;
		color: #333;
		font-weight: 700;
	}

	.cinema-block .movie-info .movie-title {
		height: 24px;
		line-height: 24px;
		font-size: 17px;
		color: #333;
		font-weight: 700;
	}

	.cinema-block .movie-info .movie-title .grade {
		color: #ffb400;
		font-size: 16px;
	}

	.cinema-block .movie-info .movie-title .grade .small {
		font-size: 10px;
	}

	.cinema-block .movie-info .movie-desc {
		margin-top: 2px;
		height: 18.5px;
		line-height: 18.5px;
		font-size: 13px;
		color: #999;
	}


	/* 轮播图 */
	.swiper-container {
		width: 100%;
		height: 100%;
	}

	.swiper-slide {
		text-align: center;
		font-size: 18px;
		background: transparent;

		height: 135px;


		/* Center slide text vertically */
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		align-items: center;
		width: 60%;
	}

	.swiper-slide {
		width: 30%;
	}

	.swiper-slide img {
		width: 100%;
		height: 95px;
	}


	.cinema-block .cinema-nav .post-bg {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: -1;
		overflow: hidden;
		-webkit-filter: blur(30px);
		filter: blur(30px);
		background-position-y: 40%;
	}

	.cinema-block .cinema-nav .post-bg-filter {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background-color: #40454d;
		opacity: .55;
	}

	.cinema-block .cinema-nav .swiper-slide .post {
		width: 65px;
		-webkit-transition: -webkit-transform .3s;
		transition: -webkit-transform .3s;
		transition: transform .3s;
		transition: transform .3s, -webkit-transform .3s;
		position: relative;
	}

	.cinema-block .cinema-nav .swiper-slide.swiper-slide-active .post {
		-webkit-transform: scale(1.15);
		transform: scale(1.15);
		border: 2px solid #fff;
	}

	.cinema-block .cinema-nav .swiper-slide.swiper-slide-active .post:after {
		content: "";
		position: absolute;
		bottom: -6px;
		left: 50%;
		-webkit-transform: translateX(-50%);
		transform: translateX(-50%);
		width: 10px;
		height: 5px;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjMwODIyNEEwNTkwRDExRTZBNkMwOTE1NDA0RjA5MDA3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjMwODIyNEExNTkwRDExRTZBNkMwOTE1NDA0RjA5MDA3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzA4MjI0OUU1OTBEMTFFNkE2QzA5MTU0MDRGMDkwMDciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzA4MjI0OUY1OTBEMTFFNkE2QzA5MTU0MDRGMDkwMDciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7kjYk3AAAAVUlEQVR42qzMMQ7AIAwEwSvy8P25EwokZNkYCFcgCu/IzLB7Q9+jS2gz1MG/KN0ZwVOU0fDgLorvI3AVJWozsELJuhmYocyaCvQo1f2jeiT/cK8AAwBzvH2t7aaajQAAAABJRU5ErkJggg==) no-repeat;
		background-size: contain;
	}

	/* 时间 */
	.nav-block .nav-bar {
		position: relative;
		height: 45px;
		overflow: hidden;
		white-space: nowrap;
	}

	.nav-block .nav-bar .nav-bar-wrap {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: -20px;
		padding-bottom: 20px;
		overflow: auto;
		-webkit-overflow-scrolling: touch;
	}

	.nav-block .nav-bar .nav-item.active {
		color: #f03d37;
		position: relative;
	}

	.nav-block .nav-bar .nav-item:first-child {
		margin-left: 15px;
	}

	.nav-block .nav-bar .nav-item {
		display: inline-block;
		line-height: 45px;
		height: 45px;
		text-align: center;
		font-size: 14px;
		color: #666;
	}

	.nav-block .nav-bar .nav-item+.nav-item {
		margin-left: 30px;
	}

	.nav-block .nav-bar .nav-item:last-child {
		margin-right: 15px;
	}

	.nav-block .nav-bar .nav-item.active:after {
		content: "";
		position: absolute;
		width: 110%;
		height: 2px;
		bottom: 0;
		left: 50%;
		-webkit-transform: translateX(-50%);
		transform: translateX(-50%);
		background-color: #f03d37;
	}
	

	.seat-inner-wrap {
    min-height: 40px;
	}
	.seat-list .list-wrap .item-outer {
    padding: 17px 0;
    margin-left: 12.5px;
}
.seat-list .list-wrap .item {
    padding-right: 12.5px;
}

.box-flex {
    display: -webkit-box;
    display: flex;
}
.seat-inner-wrap, .seat-list .list-wrap .item .time-block {
    position: relative;
}
.seat-list .list-wrap .item .time-block .begin {
    font-size: 20px;
    color: #333;
    line-height: 1;
    white-space: nowrap;
}
.seat-list .list-wrap .item .time-block .end {
    margin-top: 10px;
    color: #999;
    font-size: 11px;
    line-height: 1;
    white-space: nowrap;
}
.seat-list .list-wrap .item .time-block .end>.tui {
    margin-left: 4px;
    display: inline-block;
    -webkit-transform: translateY(-.5px);
    transform: translateY(-.5px);
}
.seat-list .list-wrap .item .info-block {
    margin-left: 17px;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    overflow-x: hidden;
}
.seat-list .list-wrap .item .info-block .lan {
    margin-top: 2px;
    line-height: 18px;
    font-size: 13px;
    color: #333;
    white-space: normal;
}
.seat-list .list-wrap .item .info-block .hall {
    margin-top: 7px;
    font-size: 11px;
    color: #999;
    white-space: normal;
}
.seat-list .list-wrap .item .price {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 130px;
    margin-left: 5px;
}
.seat-list .list-wrap .item .price .sellPr {
    display: inline-block;
    line-height: 1;
    color: #f03d37;
    margin-top: 1px;
    font-size: 19px;
}
.seat-list .list-wrap .item .price .sellPr .d {
    color: 13px;
    font-size: 11px;
}
.stonefont {
    font-family: 'stonefont';
}
.seat-list .list-wrap .item .button-block {
    width: 45px;
    margin-left: 2px;
    position: relative;
}
.seat-list .list-wrap .item .button-block .button {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 100%;
    height: 27px;
    line-height: 28px;
    font-size: 12px;
    background-color: #f03d37;
    color: #fff;
    border-radius: 4px;
    text-align: center;
}
/* 购票套餐 */
.tuan-wrap .tuan-list {
    position: relative;
    margin: 0 0 0 15px;
}
.tuan-wrap .tuan-list .tuan-title {
    line-height: 45px;
    height: 45px;
    font-size: 15px;
    color: #666;
}
@media (-webkit-min-device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 3)
.mb-line-all, .mb-line-b, .mb-line-l, .mb-line-lr, .mb-line-r, .mb-line-t, .mb-line-tb, .mb-outline-b, .mb-outline-t, .mb-outline-tb {
    background-size: 1px 1px;
}
.mb-line-b {
    background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAABlBMVEUAAADh4eGdLxMbAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjYGA4AAAAxADBPcXUKgAAAABJRU5ErkJggg==) 0 bottom repeat-x
}
.tuan-wrap .tuan-list .tuan-item {
    cursor: pointer;
    position: relative;
    width: 100%;
    padding: 13px 0;
    overflow: hidden;
}
.tuan-wrap .tuan-list .tuan-item img {
    display: inline-block;
    width: 92px;
    height: 92px;
    float: left;
}
.tuan-wrap .tuan-list .tuan-item .hot-tag {
    position: absolute;
    left: 0;
    top: 13px;
    display: inline-block;
    height: 18px;
    line-height: 18px;
    background-color: #fa5939;
    font-size: 12px;
    padding: 0 5px;
    color: #fff;
    border-bottom-right-radius: 2px;
}
.tuan-wrap .tuan-list .tuan-item .item-info {
    position: relative;
    margin: 0 15px 0 102px;
    height: 92px;
    overflow: hidden;
}
.tuan-wrap .tuan-list .tuan-item .item-info .title {
    font-size: 14px;
    line-height: 18px;
    color: #333;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.tuan-wrap .tuan-list .tuan-item .item-info .sell-num {
    display: inline-block;
    position: absolute;
    bottom: 34px;
    right: 0;
    line-height: 16px;
    height: 16px;
    font-size: 12px;
    color: #999;
}
.tuan-wrap .tuan-list .tuan-item .item-info .title span {
    display: inline-block;
    vertical-align: top;
    margin-top: 1px;
    margin-right: 7px;
    padding: 0 4px;
    font-size: 10px;
    line-height: 15px;
    height: 15px;
    background: #f90;
    border-radius: 2px;
    color: #fff;
}
.tuan-wrap .tuan-list .tuan-item .item-info .price {
    position: absolute;
    bottom: 0;
    left: 0;
}
.tuan-wrap .tuan-list .tuan-item .item-info .price .sell-price {
    color: #f03d37;
    display: inline-block;
}
.tuan-wrap .tuan-list .tuan-item .item-info .price .sell-price span {
    font-size: 14px;
}
.tuan-wrap .tuan-list .tuan-item .item-info .price .sell-price .num {
    font-size: 17px;
}
.tuan-wrap .tuan-list .tuan-item .item-info .buy-btn {
    position: absolute;
    right: 0;
    bottom: 0;
    display: inline-block;
    padding: 0 8px;
    height: 27px;
    line-height: 27px;
    font-size: 12px;
    border-radius: 3px;
    color: #fff;
    background-color: #f03d37;
}
</style>
