<template>
	<view class="d-flex main-text-color font-md line-h">
		<text class="a-self-start" :class="unitSize">￥</text><slot />
	</view>
</template>

<script>
	export default {
		props:{
			priceSize: {
				type: String,
				default: "font-md"
			},
			unitSize: {
				type: String,
				default: "font-md"
			}
		}
	}
</script>

<style>
</style>
