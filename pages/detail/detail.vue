<template>
	<view>
		<!-- banner -->
		<swiper-image :resdata="banners" height="750" preview></swiper-image>
		
		<!-- 基础详情 -->
		<view class="p-2">
			<view class="font-lg">
				我是标题
			</view>
			<view class="font text-light-muted mb-3 line-h-sm">
				我是描述
			</view>
			<price priceSize="font-lg" unitSize="font">3500</price>
		</view>
		
		<!-- 滚动商品特性 -->
		
		<!-- 属性选择 -->
		
		<!-- 横向滚动评论 -->
		
		<!-- 商品详情 -->
		
		<!-- 热门推荐 -->
		
	</view>
</template>

<script>
import swiperImage from "@/components/index/swiper-image.vue"	
import price from '@/components/common/price.vue';	
export default {
	components:{
		swiperImage,price
	},
	data() {
		return {
			preview:[
				'https://i8.mifile.cn/v1/a1/6d13e060-d5c5-e610-88d0-80816fa2b0ce.webp','https://i8.mifile.cn/v1/a1/aff0b715-e63a-68f3-91b0-46a22543555e.webp'
			],
			banners:[
				{ src: 'https://i8.mifile.cn/v1/a1/6d13e060-d5c5-e610-88d0-80816fa2b0ce.webp'},
				{ src: 'https://i8.mifile.cn/v1/a1/aff0b715-e63a-68f3-91b0-46a22543555e.webp'}
			],
		}
	},
	onLoad() {
		
	},
	methods: {
		
		
	}
}
</script>

<style>

</style>
