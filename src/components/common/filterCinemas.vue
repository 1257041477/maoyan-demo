<template>
	<div>
		<!-- 区域/品牌/特色 选择 -->
		<div class="nav-wrap filter-nav-wrap">
			<div class="tab mb-line-b">
				<div @click="dealClickIndex(1)" class="item" :class="{chosenTitle:showIndex==1}" data-tab=".region">
					<!-- 朝阳区 -->
					{{showDistrictName}}
					<span class="drop"></span></div>
				<div @click="dealClickIndex(2)" class="item" :class="{chosenTitle:showIndex==2}" data-tab=".brand">
					<!-- 全部 -->
					{{selectBrandId==-1?'品牌':selectBrandName}}
					<span class="drop"></span></div>
				<div @click="dealClickIndex(3)" class="item" :class="{chosenTitle:showIndex==3}" data-tab=".special">特色<span class="drop"></span></div>
			</div>
			<div class="close-tab" :style="showIndex>0?'display:block':''">

				<!-- 显示商圈/地铁 -->
				<div v-if="showIndex==1">
					<div class="district-title">
						<div @click="districtType=0" :class="{chosen:districtType==0}">
							商区

						</div>
						<div @click="districtType=1" :class="{chosen:districtType==1}">
							地铁站</div>
					</div>
					<div class="district-content">
						<div v-if="districtType==0">
							<div v-if="filterCinemas.district" class="left-show">
								<div v-for="(item,index) in filterCinemas.district.subItems" :key="index" :class="{chosen:selectDistrictId == item.id}"
								 @click="dealSelectDistrict(item,index)">
									{{item.name}}({{item.count}})
								</div>
							</div>
							<div class="right-show">
								<div v-for="(item,index) in filterCinemas.district.subItems[selectDistrictIndex].subItems" :key="index" :class="{chosen:selectAreaId == item.id}"
								 @click="dealSelectArea(item,index)">
									{{item.name}}
								</div>
							</div>
						</div>
						<div v-if="districtType==1">
							<div v-if="filterCinemas.subway">
								<div v-for="(item,index) in filterCinemas.subway.subItems" :key="index" :class="{chosen:selectLineId == item.id}" @click="dealSelectLine(item,index)">
									{{item.name}}({{item.count}})
								</div>
							</div>
							<div class="right-show">
								<div v-for="(item,index) in filterCinemas.subway.subItems[selectLineIndex].subItems" :key="index" :class="{chosen:selectStationId == item.id}"
								 @click="dealSelectStation(item,index)">
									{{item.name}}
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- 显示品牌 -->
				<div v-if="showIndex==2">
					<div v-if="filterCinemas.brand != undefined" class="shop-title">

						<div v-for="(item,index) in filterCinemas.brand.subItems" :key="index" @click="dealSelectBrand(item.id,item.name)" :class="{chosen:item.id == selectBrandId}">
							{{item.name}} 
							<i>{{item.count}}</i>
						</div>
					</div>
				</div>
				<!-- 显示特色 -->
				<div v-if="showIndex==3" class="function">
					<div  class="function-content">
						<h4>特色功能</h4>
						<ul v-if="filterCinemas.service != undefined" class="function-ul-first">
							<li v-for="(item,index) in filterCinemas.service.subItems" :key="index" :class="{chosen:item.id==tempSelectServiceId}" @click="tempSelectServiceId = item.id">
								{{item.name}}
							</li>
						</ul>
					</div>
					<div class="function-content">
						<h4>特殊厅</h4>
						<ul v-if="filterCinemas.hallType != undefined">
							<li v-for="(item,index) in filterCinemas.hallType.subItems" :key="index" :class="{chosen:item.id==tempSelectHallTypeId}"
							 @click="tempSelectHallTypeId = item.id">
								{{item.name}}
							</li>
						</ul>
					</div>
					<div class="select-button">
						<button @click="dealReset()">重置</button>
						<button @click="dealConfim()" class="active">确认</button>
					</div>
				</div>
			</div>
		</div>

		<div class="blacker" :style="showIndex>0?'display:block':'display:none'" @click="showIndex=0"></div>
	</div>
</template>

<script>
	export default {
		name: 't',
		data() {
			return {
				filterCinemas: {},

				//选项卡: 不显示为0, 显示某一个为1,2,3
				showIndex: 0,

				//选择的品牌id
				selectBrandId: -1,
				selectBrandName: "",

				tempSelectServiceId: -1,
				tempSelectHallTypeId: -1,

				selectServiceId: -1,
				selecthallTypeId: -1,

				//区域类型  商圈=0,地铁=1
				districtType: 0,

				selectDistrictId: -1,
				selectDistrictName: "全部",
				selectDistrictIndex: 0,

				selectAreaId: -1,
				selectAreaName: "全部",

				selectLineId: -1,
				selectLineName: "全部",
				selectLineIndex: 0,

				selectStationId: -1,
				selectStationName: "全部",

				//那个地方显示的值....
				showDistrictName: "全部"
			}
		},

		created() {
			// this.$store.commit("setNavTitle", "影院")


			this.request.getFilterCinemas({}, (data) => {

				

				this.filterCinemas = data
				console.log(this.filterCinemas)
			})
		},
		mounted() {

		},
		methods: {
			dealSelectLine(item, index) {
				this.selectLineId = item.id
				this.selectLineIndex = index
				this.selectLineName = item.name
			},
			dealSelectStation(item, index) {
				this.selectStationId = item.id
				this.showIndex = 0
				this.selectStationName = item.name

				if (item.id == -1) {
					this.showDistrictName = this.selectLineName
				} else {
					this.showDistrictName = item.name
				}
			},
			dealSelectDistrict(item, index) {
				this.selectDistrictId = item.id
				this.selectDistrictIndex = index
				this.selectDistrictName = item.name
			},
			dealSelectArea(item, index) {
				this.selectAreaId = item.id
				this.showIndex = 0
				this.selectAreaName = item.name

				//选择全部
				if (item.id == -1) {
					this.showDistrictName = this.selectDistrictName
				} else {
					this.showDistrictName = item.name
				}
			},

			dealConfim() {
				this.selectServiceId = this.tempSelectServiceId
				this.selecthallTypeId = this.tempSelectHallTypeId
				this.showIndex = 0
			},
			dealReset() {
				this.selectServiceId = -1
				this.selecthallTypeId = -1
				this.tempSelectServiceId = -1
				this.tempSelectHallTypeId = -1
			},
			dealSelectBrand(id, name) {
				this.selectBrandId = id
				this.selectBrandName = name

				this.showIndex = 0
			},
			dealClickIndex(index) {
				if (index == this.showIndex) {
					this.showIndex = 0
					return
				}
				this.showIndex = index
			}
		},
		computed: {

		},
		watch: {
			showIndex() {
				if (this.showIndex == 3) {
					this.tempSelectServiceId = this.selectServiceId
					this.tempSelectHallTypeId = this.selecthallTypeId
				}
			}
		},
		components: {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.page.active {
		display: block;
	}

	.topbar {
		border-bottom: 1px solid #e6e6e6;
		height: 44px;
	}

	.gray-bg {
		background: #f5f5f5;
	}

	.topbar-bg {
		display: -webkit-box;
		display: flex;
		-webkit-box-align: center;
		align-items: center;
		height: 44px;
		-webkit-box-pack: justify;
		justify-content: space-between;
	}

	.city-entry {
		padding-left: 15px;
		font-size: 15px;
		color: #666;
		display: -webkit-box;
		display: flex;
		-webkit-box-align: center;
		align-items: center;
	}

	.city-entry .city-name {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		max-width: 70px;
		max-width: 19.2vw;
	}

	.city-entry {
		padding-left: 15px;
		font-size: 15px;
		color: #666;
		display: -webkit-box;
		display: flex;
		-webkit-box-align: center;
		align-items: center;
	}

	.city-entry-arrow {
		margin-right: 5px;
		width: 0;
		height: 0;
		border: 4px solid #b0b0b0;
		border-left-color: transparent;
		border-right-color: transparent;
		border-bottom-color: transparent;
		display: inline-block;
		margin-left: 4px;
		margin-top: 5px;
	}

	.topbar .search-input {
		-webkit-box-flex: 1;
		flex-grow: 1;
	}

	.search-input {
		display: -webkit-box;
		display: flex;
		-webkit-box-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		align-items: center;
		height: 28px;
		font-size: 13px;
		color: #b2b2b2;
		margin-left: 18px;
		border: .5px solid #e6e6e6;
		border-radius: 5px;
		margin-right: 15px;
	}

	.search-input,
	.white-bg {
		background-color: #fff;
	}

	.search-input img {
		width: 14px;
		height: 14px;
		margin-left: 3px;
		margin-right: 4px;
	}

	.blacker {
		z-index: 99;
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background: rgba(0, 0, 0, .3);
	}

	.nav-wrap.filter-nav-wrap {
		z-index: 100;
	}

	.close-tab {
		position: relative;
		width: 100%;
		height: 400px;
		background: #fff;
		z-index: 100;
		overflow: scroll;
		display: none;
	}

	.close-tab .chosen {
		color: #dd403b;
		background: #eaeaea;
	}

	.district-title {
		display: flex;
		justify-content: space-around;
		line-height: 40px;
	}

	.district-title>div.chosen {
		color: red;
		border-bottom: 2px solid #f03d37;
	}
	.district-title>div{
		width:180px;
		height: 100%;
		text-align: center;
	}
	.district-content>div{
		width:150px;
		height:100%;
		/* padding: 5px 0px; */
		/* margin: 0 auto; */
		text-align: center;
	}
	.right-show {
		width: 47%;
		height: 100%;
		position: absolute;
		top: 42px;
		right: 0;
		padding: 0 20px;
		/* font-size: 12px; */
		background-color: #eaeaea;
	}
	

	.shop-title>div{
		/* width: 300px; */
		padding: 15px 45px;
		border-bottom: 1px solid #eaeaea;
	}
    .shop-title>div i{
		font-style: normal;
		float: right;
	}
	.function{
		width: 100%;
		/* padding: 0 5px; */
		/* overflow: hidden; */
	}
	.function .function-content ul li{
		display: block;
		float: left;
		width:65px;
		height:35px;
		margin:5px 5px;
		line-height: 15px;
		border-radius: 5px;
		text-align: center;
		border:1px solid #eaeaea;
		font-size: 12px;
	}
	
	.function .function-content .function-ul-first li{
		display: block;
		float: left;
		width:65px;
		height:35px;
		margin:5px 5px;
		line-height: 35px;
		border-radius: 5px;
		text-align: center;
		border:1px solid #eaeaea;
		font-size: 12px;
	}
	.function .function-content h4{
		padding: 0 15px;
	}
	.function .select-button{
		width:100%;
		height: 60px;
		/* line-height: 60px; */
		text-align: center;
		background: #fafafa;
		margin-top:215px;
		margin-top:215px;
		/* margin:0 auto; */
	}
	.function .select-button button{
		width:66px;
		height: 35px;
		margin:15px 50px;
		outline: none;
		border:1px solid #e5e5e5;
		background:#fff ;
		border-radius: 5px;
	}
	.function .select-button button.active{
		background:#f03d37;
		color: #fff;
	}
	/* 对勾 */
	.close-tab .tab-content .page.brand #brand-content .item.chosen:before {
    content:"";
    display:block;
    position:absolute;
    left:8px;
    top:18px;
    width:11.5px;
    height:8px;
    background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAaCAYAAAA9rOU8AAAABGdBTUEAALGPC/xhBQAABFlJREFUSA3dlltoXFUUhtda+8zMmUnStJPLSSdiUmwrSbAIuZEmNo3RQkFEX0pffBIEfVCkgvRmM7ShWk2q9FkQFF+ib1JNWyQXm5BOhpRACpKHIpZQTYg2t5k5c85erpM6YUhTY0aSgPtl7zP79s2/1/r3Rtimwh0dtDB0rTi1pPcoQhsocFdtEwu8nbhXwI7/ZUUQRdYtQHrS2A4Yrqw05wPhV1HjOwzwrEac15prtxzGA/mzwmryMb4PxFWaMaWBB9HlW7SVyngg98uXQU4SYhUDppC411HOxV2RiiHcKpip2kgoFKpoUuCeRMR2Zkxo5D4G/qTQqujHnh53S45pKhIJ7TD3NDPqqAJqchgcB3SvgHwctipHPBBPlE1XhkWRxeCTBxnhjEHQqgVEYmRcs/vmjsHRmABIDD8smxoz9w8cyJsLlh9i4rNE3GozpGXn8bSL3TvaXxrNBvFwNk0ZD6SgKNgKaYqi4rq05rSIcDsButMqG/0Oe2D5aP4WZbky+DAY09M1ZolppjAelwn/vUzu3RsI7vS3ug6d9gmIy5xGxjFHDM4aGP1+tSKZHWnebqg3wwVvzQaMtl+bmoKZjlxrD8TaXVxnsO+MIn0wzWzLAYylye3aZY30Pg7E248cws9Nwo8MhV/lk3tsqrY2lCvIXfGRJ8qK6iUQu8Q/miRSbQnP2BK55648H/tmraPJ3stAoBkHICWNEo3UnRdELUDfRuLxpeyB67VZVF0wjAYXnKgibpSASBHSrSVXn7cGY9ehb70VRBki/brNfJUQbCII+4guBYP+4xtRaKKmJn/Op9skWa7I0SxnjePqIZedqHVz5Pr6GA9HUOHAyCRo9z0xon4UIIl4i1B3BoLGcS8j1luIxdCscH67wXTBR/BMmtEh5jtJggs7B2M/rjc/u38ltaeb6572KbxsomoTPzBR82/imGeXHqS+LhsfX8yelGl7sL5w3nMBB7qU4moxNMlgvpNAOFU6MHI1M+7f1iumV3Jz9Gc/5b2RdPUPPvIuMLQMNDr9heZraynEcjRG2HxRQLqRdLVkTVpi73bCyA3EA15RJkOfbGnZ76Dzmby+2uRfBlytp7Xic/bM0pelExML3rjfBSS/KHREszovj6Nql8F2NY8nyTltDcSvZdbaaP0IjNg1zTbXV8kV/2FQUbutwfOeWXHRD/JnE1/cm53V4ad2v+Bqo8tHvM/LGnkYxRJKR62+2I2NAmSPfwTG6xQgfHCooRJcvBgw8BUJ7gAB/mGDHVWsfgFQlwzU+1zEFLs8aiv1bnH/UCx74Vzaa8JkAyngT31oHBFLNyU658QCkgqh1HsYMUM8CXiqZHC4P5fNV895LEwGaKa5eb8P7E7TUEflfRiS9Ad5xSc16OF54I7IQGxg9aK5fv8jTAYocbixPJnmzoCiYy6yIZfeYMKPJ0pvDI/luvFa89aFyQAtNjaWOn44wYgRR/Plkp9G4mst+L/57S+eQuIEp8oPOAAAAABJRU5ErkJggg==);
    background-repeat:no-repeat;
    background-size:100% 100%
}
</style>
