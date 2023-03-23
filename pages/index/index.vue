<template>
	<view class="container">
		<u--input v-model = "factorsSelectedResult" class ="ipt" placeholder="请选择因子" suffixIcon="arrow-down"
			readonly suffixIconStyle="color: #909399" @click.native.stop='showFactorSelector'>
		</u--input>
		<vr-factor-selector ref='factorSelector' @factorsChange="factorsChange"></vr-factor-selector>
	</view>
</template>
<script>
	import VrFactorSelector from '@/components/vr-factor-selector/index.vue'
	export default {
		components: {
			VrFactorSelector
		},
		data(){
			return{
				factorsSelectedResult:''
			}
		},
		methods: {
			showFactorSelector() {
				this.$refs.factorSelector.show()
			},
			factorsChange(result,data){
				console.log(result,data)
				this.factorsSelectedResult = result
			}
		}
	}
</script>
<style>
.ipt{
	width: 50%;
	/* background: #FF87f2; */
	margin: auto;
	margin-top: 50px;
	border: 1px solid black;
}
</style>
