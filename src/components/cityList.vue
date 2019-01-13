<template>
	<section class="city-list-container">

		<!-- 定位城市 -->
		<section>
			<div id="locate" class="city-title">
				定位城市
			</div>
			<div class="city-list city-list-inline clearfix">
				<div class="location-city">
					<span v-if="locationState==1">
						正在定位...
					</span>
					<span v-if="locationState==2" @click="dealSelectCity($event)" :data-nm="locationCity.nm" :data-id="locationCity.id">
						{{locationCity.nm}}
					</span>
					<span v-if="locationState==3">
						定位失败，请点击重试
					</span>
				</div>
			</div>
		</section>

		<!-- 最近访问城市 -->
		<section class="history-city-list">
			<div id="history" class="city-title">
				最近访问城市
			</div>
			<div class="city-list city-list-inline clearfix">

				<div v-for="(item,index) in historyCity" :key="index" @click="dealSelectCity($event)" class="city-item" :data-nm="item.nm" :data-id="item.id">
					{{item.nm}}
				</div>

			</div>
		</section>

		<!-- 热门城市 -->
		<section>
			<div id="hot" class="city-title">
				热门城市
			</div>
			<div class="city-list city-list-inline clearfix">

				<div v-for="(item,index) in hot" :key="index" @click="dealSelectCity($event)" class="city-item" :data-nm="item.nm" :data-id="item.id">
					{{item.nm}}
				</div>

			</div>
		</section>

		<!-- 城市列表(分组) -->
		<section>
			<div v-for="(item,index) in group" :key="index">
				<div :id="item.big" class="city-title city-title-letter">
					{{item.big}}
				</div>
				<div  class="city-list city-list-block clearfix">
					<div class="city-item" v-for="(city,index) in item.list" :key="index" @click="dealSelectCity($event)"  :data-nm="city.nm" :data-id="city.id">
						{{city.nm}}
					</div>
				</div>
			</div>
		</section>

		<!-- nav -->
		<section class="nav">
			<div @click="dealClickIndex($event)" class="  nav-item" data-id="locate">
				定位
			</div>

			<div @click="dealClickIndex($event)" class="  nav-item" data-id="history">
				最近
			</div>

			<div @click="dealClickIndex($event)" class="  nav-item" data-id="hot">
				热门
			</div>

			<div @click="dealClickIndex($event)" v-for="(item,index) in group" :key="index" class="nav-letter  nav-item" :data-id="item.big">
				{{item.big}}
			</div>

		</section>

	</section>
</template>

<script>
	export default {
		name: 'city',
		data() {
			return {
				list:[],
				hot:[],
				historyCity:[],
				//分组城市
				group:[],
				
				locationState:1,
				locationCity:{}
			}
		},

		created() {
			this.request.getCityList({},(data)=>{
				this.hot = data.hot
				var list = data.cts
				this.list = list
				//分组
				var group = []
				//添加A-Z 26个小分组
				for(var i=0; i<26; i++){
					//传入字符的ascii码，返回这个字符
					var c = String.fromCharCode(65 + i).toString()
					var dict = {
						'big':c,
						'list':[]
					}
					group.push(dict)
				}
				//处理每个城市
				for(var i=0; i<list.length; i++){
					var city = list[i]
					var index = city.py.charAt(0).charCodeAt() - 97
					group[index].list.push(city)
				}
				this.group = group
				this.startLocation()
				this.historyCity = JSON.parse(localStorage.Maoyan_historyCity).data
			})
		},
		mounted() {

		},
		methods: {
			startLocation(){
				if (navigator.geolocation){
				
					// console.log("开始定位")
					
// 					navigator.geolocation.getCurrentPosition(
// 						 function (position) {
// 				              //获取地理位置成功时所做的处理
// 							  var lan = position.coords.latitude
// 							  var lon = position.coords.longitude
// 							  console.log("lan = "+lan)
// 							  console.log("lon = "+lon)
// 							  
// 							  //lan = 40.1445387
// 							  //lon = 116.28328359999999
// 							  
// 							  this.request.getCurrentCity(lan,lon,(cityName)=>{
// 							  	console.log("cityName="+cityName)
// 							  
// 							  	var lastChar = cityName.charAt(cityName.length-1)
// 							  	console.log(lastChar)
// 							  	if(lastChar == "市"){
// 							  		cityName = cityName.substr(0,cityName.length-1);
// 							  		console.log("cityName="+cityName)
// 							  		
// 							  		//根据城市名找id
// 							  		
// 							  		for(var city of this.list){
// 							  			if(city.nm == cityName){
// 							  				this.locationState = 2
// 							  				this.locationCity = city
// 							  				console.log("isLocation = true")
// 							  			}
// 							  		}
// 							  
// 							  	}
// 							  },(error)=>{
// 							  	console.log("定位失败 error="+error)
// 							  	
// 							  	this.locationState = 3
// 							  })
// 						},
// 						function (error) {
// 							//获取地理位置信息失败时所做的处理
// 							console.log(error)
// 						},
// 					)}
						
					
					navigator.geolocation.getCurrentPosition((position)=>{
						var lan = position.coords.latitude
						var lon = position.coords.longitude
						console.log("lan = "+lan)
						console.log("lon = "+lon)
						
						//lan = 40.1445387
						//lon = 116.28328359999999
						
						this.request.getCurrentCity(lan,lon,(cityName)=>{
							console.log("cityName="+cityName)
						
							var lastChar = cityName.charAt(cityName.length-1)
							console.log(lastChar)
							if(lastChar == "市"){
								cityName = cityName.substr(0,cityName.length-1);
								console.log("cityName="+cityName)
								
								//根据城市名找id
								
								for(var city of this.list){
									if(city.nm == cityName){
										this.locationState = 2
										this.locationCity = city
										console.log("isLocation = true")
									}
								}
						
							}
						},(error)=>{
							console.log("定位失败 error="+error)
							
							this.locationState = 3
						})
					});
				}else{
					console.log("环境不支持定位")
					
					this.locationState = 3
				}
			},
			dealSelectCity(event){
				var id = event.target.dataset.id
				var nm = event.target.dataset.nm
				var city = {
					id:id,
					nm:nm
				}
				this.$store.commit('setSelectCity',city)
				//存储到localStorage
				var saveData = {
					expire_data:Date.now().toString(),
					data:city
				}
				var saveHistoryData = {
					expire_data:Date.now().toString(),
					data:[city]
				}
				localStorage.Maoyan_cityConfirm = JSON.stringify(saveData)
				if(localStorage.Maoyan_historyCity == undefined){
					localStorage.Maoyan_historyCity = JSON.stringify(saveHistoryData)
				}
				var historyCity = JSON.parse(localStorage.Maoyan_historyCity)
				for(var index in historyCity.data){
					var item = historyCity.data[index].nm
					if(nm == item){
						historyCity.data.splice(index,1)
					}
				}
				historyCity.data.unshift(city)
				if(historyCity.data.length>=3){
					historyCity.data.splice(3,1)
				}
				localStorage.Maoyan_historyCity = JSON.stringify(historyCity)
				this.historyCity = historyCity.data
				this.$router.push('/movie')
			},
			dealClickIndex(event){
				var id = event.target.dataset.id
				var tag = document.getElementById(id)
				var container = document.querySelector(".city-list-container")
				container.scrollTop = tag.offsetTop
			}
		},
		computed: {

		},
		watch: {

		},
		computents: {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.city-list-container {
		display: none;
		background-color: #ebebeb;
		font-size: 14px;
		color: #333;
		top: 0;
		bottom: 0;
		height: 100%;
		width: 100%;
		position: absolute;
		z-index: 1000;
		overflow-y: auto;
		-webkit-overflow-scrolling: touch;
	}

	.city-list-container {
		display: block;
	}

	.city-title {
		padding-left: 15px;
		line-height: 30px;
	}

	.city-list-inline {
		background-color: #f5f5f5;
		padding-bottom: 8px;
	}

	.city-list {
		padding-right: 30px;
	}

	.city-list-inline .location-city {
		width: auto;
		min-width: 30%;
		padding: 0 20px;
	}

	.city-list-inline .city-item,
	.city-list-inline .location-city {
		float: left;
		background: #fff;
		width: 29%;
		height: 33px;
		margin-top: 15px;
		margin-left: 4%;
		padding: 0 4px;
		border: 1px solid #e6e6e6;
		border-radius: 3px;
		line-height: 33px;
		text-align: center;
		box-sizing: border-box;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.city-list-inline .location-city {
		width: auto;
		min-width: 30%;
		padding: 0 20px;
	}

	.city-list-block {
		background-color: #f5f5f5;
	}

	.city-list-block .city-item {
		height: 44px;
		line-height: 44px;
		margin-left: 15px;
		border-bottom: 1px solid #c8c7cc;
	}

	.city-list-block .city-item:last-child {
		border-bottom: none;
	}

	.nav {
		position: fixed;
		top: 75px;
		top: 11vh;
		right: 0;
		width: 35px;
		z-index: 10;
		text-align: center;
		font-size: 12px;
	}

	.nav .nav-item {
		height: 16px;
		height: 2.8vh;
	}
</style>
