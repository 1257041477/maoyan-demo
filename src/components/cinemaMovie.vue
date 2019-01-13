<template>
	<div class="app">
		<div class="body">
			<div class="movie-detail" data-bid="dp_wx_buy_movie">
				<div class="movie-filter"></div>
				<div class="poster-bg" style="background-image:url(//p0.meituan.net/71.100/movie/c304c687e287c7c2f9e22cf78257872d277201.jpg)" ></div>
				<div class="detail box-flex" @click="$router.push('/movieDetail')">
					<div class="poster">
						<img :src="detail.detailMovie?detail.detailMovie.img:'' |wh128x180">
					</div>
					<div class="content flex">
						<div class="title middle line-ellipsis">{{detail.detailMovie?detail.detailMovie.nm:''}}</div>
						<div class="title-en-name line-ellipsis">{{detail.detailMovie?detail.detailMovie.enm:''}}</div>
						<div class="score line-ellipsis">
							{{detail.detailMovie?detail.detailMovie.sc:''}}
							<span class="snum">({{detail.detailMovie?(detail.detailMovie.snum/10000).toFixed(1):''}}万人评)</span>
						</div>
						<div class="type line-ellipsis">
							<span>{{detail.detailMovie?detail.detailMovie.cat:''}}</span>
							<div class="type-group">
							</div>
						</div>
						<div class="src line-ellipsis">{{detail.detailMovie?detail.detailMovie.src:''}}/{{detail.detailMovie?detail.detailMovie.dur:''}}分钟</div>
						<div class="pubDesc line-ellipsis">{{detail.detailMovie?detail.detailMovie.pubDesc:''}}</div>
					</div>
				</div>
				<div class="arrow-g" >
					<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAWCAYAAAAfD8YZAAAAAXNSR0IArs4c6QAAAS5JREFUOBGVkktuwkAMhpOoJ+hhSouE2HbDgiVCNCAOVtQHnINHhbgMJ6g6/f9gR848kmDJeOzxZ3scskzEOfcKXUMLjXXZByYQhJlqMvz3PM//1E9Z7fJoEp5wXvWZoILRZQtg7xVYdhXQzuR2XoEB/NYCOSkVdKI/g441BnuBbmI7aMAE7ilgxyaboYOD4RMO9EWiTwhgJksBLtEvUNolRmGvwJG+yDNsXSB4s2aplR3M4Y80BnuGfiQ7m0Q2qP6JJvaLc/VpTKx5lPe9IfpibviMb+4lOXYXyGLRsRPgSTsSpASdW8Av+YQ3Er+NzgIuELdvZMcAZIUaBsgpCA55IZIEeV+NLSC32hskXCTAH9xFRyWkUsgSrhqAJfjpL8fch0dMMIGWMkmYEIn8Az5Wgp5LHlhmAAAAAElFTkSuQmCC">
				</div>
			</div>
			<div id="showDays" :class="headerFixed?'issFixed':''">
				<ul id="timeline" class="mb-line-b" v-if="movie.showDays">

					<li data-day="2019-01-03"  
					:key="index"
					v-for="(item,index) in movie.showDays.dates" 
					class="showDay" 
					:class="{chosen:selectDayIndex==index}"  
					@click="dealClickDay(item,index)">
						{{item.date}}
					</li>
				</ul>
			</div>
			<div class="nav-wrap"  :class="headerFixed?'isFixed':''">
				<filterCinemas></filterCinemas>
				
			</div>
			
			<div class="blacker"></div>
			<div class="cinema-list cinema">
				<div class="list-wrap" v-if="movie.cinemas">
					<div v-for="(item,index) in movie.cinemas" :key="index" class="item mb-line-b" data-id="17304" data-bid="dp_wx_home_cinema_list" @click="$router.push('/shows/'+item.id+'/'+item.nm)">
						<div class="title-block box-flex middle">
							<div class="title line-ellipsis">
								<span>{{item.nm}}</span>
								<span class="price-block">
									<span class="price">{{item.sellPrice}}</span><span class="q">元起</span>
								</span>
							</div>
							<div class="location-block box-flex">
								<div class="flex line-ellipsis">{{item.addr}}</div>
								<div class="distance">{{item.distance}}</div>
							</div>
							<div class="flex"></div>
							<div class="label-block">
								<div class="endorse">改签</div>
								<div class="snack">小吃</div>
								<div class="vipTag">{{item.tag.vipTag}}</div>
								<div class="hallType">{{hallTypeVOList[1].name}}</div>
							</div>
							<div class="discount-block">
								<div>
									<div class="discount-label normal card">
										<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg=="
										 alt="">
									</div>
									<div class="discount-label-text">{{item.promotion.cardPromotionTag}}</div>
								</div>
							</div>
						</div>
						<div class="min-show-block  disabled  J-fload" data-bid="dp_wx_buy_cinema_list_spread">
							<span>近期场次：</span>
							<span class="time-line">{{item.showTimes}} </span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import filterCinemas from './common/filterCinemas'
	
	export default {
		name: '',
		data() {
			return {
				detail: {},
				movie: {},
				selectDayIndex: 0,
				cinemas:[],
				hallTypeVOList:[],
				headerFixed:0
			}
		},
		created(){
			this.$store.commit("setNavTitle",this.$route.params.name)
			var id=this.$route.params.id
			this.request.getMovieDetail({movieId:id}, (data) => {
				// console.log(data)
				this.detail = data
				// console.log(this.deatailMovies)
			});
			
			//现在时间
			var now = new Date();
			var day = now.Format("yyyy-MM-dd")
			var cityId = this.$store.getters.getSelectCity.id
			
			this.request.getMovie({
				movieId: id,
				day: day,
				cityId: cityId,
				}, (data) => {
				this.movie = data
				
				this.cinemas = data.cinemas
				console.log(this.cinemas)
				this.hallTypeVOList = data.cinemas[0].tag.hallTypeVOList
			})			
			
		},
		mounted() {
			// 监听dom渲染完成
			this.$nextTick(function(){
			// 这里fixedHeaderRoot是吸顶元素的ID
			let header = document.querySelector(".nav-wrap");
			// let header1 = document.getElementById("showDays");
			// 这里要得到top的距离和元素自身的高度
			this.offsetTop = header.offsetTop;
			this.offsetHeight = header.offsetHeight;
			
			console.log("offsetTop:" + this.offsetTop + "," + this.offsetHeight);
			});
		// handleScroll为页面滚动的监听回调
			window.addEventListener('scroll', this.handleScroll);
		},
		destroyed(){
			window.removeEventListener('scroll', this.handleScroll);
		},
		methods: {
			dealClickDay(item, index) {

				console.log(index)

				this.selectDayIndex = index

				var box = document.getElementById("timeline")

				this.$nextTick(() => {
					var selectItem = document.querySelector(".showDay.chosen")
					box.scrollLeft = selectItem.offsetLeft - box.clientWidth / 3
				})

			},
			handleScroll(){
				// 得到页面滚动的距离
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				// 判断页面滚动的距离是否大于吸顶元素的位置
				this.headerFixed = scrollTop > (this.offsetTop - this.offsetHeight * 2);
			},
		},
		computed: {

		},
		watch: {
			
		},
		components: {
			filterCinemas
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.isFixed{
		position: fixed;
		top:45px;
		left:0;
		right:0;
		z-index: 4;
	}	
	.issFixed{
		position: fixed;
		top:0px;
		left:0;
		right:0;
		z-index: 4;
	}	

</style>
