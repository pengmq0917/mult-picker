<template>
	<view class="container">
		<custom-picker :closeOnClickOverlay="false" :show="isShow" :columns="columns" :title="title || '请选择因子'" :loading="loading" :leafLevel="2"
			keyName="label" titleColor="#ff5757" ref="factorPicker" @confirm="confirm" @change="changeHandler" @boxChange="boxChange" @cancel="cancel">
		</custom-picker>
	</view>
</template>

<script>
	/**
	 * VrFactorSelector多级选择器
	 * 
	 * @close  【event】 事件函数当点击关闭按钮关闭选择器时触发
	 * @factorsChange  【event】 事件函数当点击确定按钮关闭选择器时触发
	 *  
	 * 使用方式可查看本文件夹内的example.vue
	 */
	import {
		factorStructure1
	} from "./constant";
	import CustomPicker from './origin-component/custom-picker/custom-picker.vue'
	export default {
		components:{
			CustomPicker
		},
		props: {},
		data() {
			return {
				loading: false,
				isShow: false,
				columns: [factorStructure1,factorStructure1[0].children,factorStructure1[0].children[0].children],
				title: '',
				preSelectedData:[] // 记录上次选择的结果，方便取消的时候回滚数据
			};
		},
		watch: {
			isShow(val) {
				if (!val) {
					this.$emit('close')
				}
			}
		},
		methods: {
			show() {
				this.isShow = true
				// const temp = {
				// 		label: "请选择",
				// 		id: -1,
				// 		hasChildren: false,
				// 		class: "test-select"
				// 	}
				
				// this.columns.forEach(item=>{
				// 	item.splice(0, 0, temp)
				// })
				// if (this.$refs.factorPicker.innerColumns.length === 0) {
					// this.loading = true
					// // this.loadData()
					// const temp = [{
					// 		label: "请选择",
					// 		id: -1,
					// 		hasChildren: false,
					// 		class: "test-select"
					// 	},
					// ]
					// this.$refs.factorPicker.setColumnValues(0, temp)
					// this.columns.splice(0, 1, temp)
					// this.loading = false
				// } else {
				// 	if (this.reset) {
				// 		this.$refs.factorPicker.innerColumns.splice(1)
				// 		this.$refs.factorPicker.innerIndex = [0]
				// 		this.$refs.factorPicker.setIndexs([0], true)
				// 	}
				// }
				
			},
			confirm(e) {
				this.isShow = false
				let data = e.checkedBoxs
				this.changeTitle(data)
				this.preSelectedData = []
				data.forEach(item=>{
					this.preSelectedData.push(item)
				})
				this.$emit("factorsChange",this.title,data)
				console.log("确定了")
			},
			cancel(){
				this.isShow = false;
				let temp = []
				this.preSelectedData.forEach(item=>{
					temp.push(item)
				})
				this.$refs.factorPicker.checkedBoxs = temp
				this.changeTitle(temp)
			},
			changeHandler(e) {
				const {
					columnIndex,
					value,
					values, // values为当前变化列的数组内容
					index,
					// 微信小程序无法将picker实例传出来，只能通过ref操作
					picker = this.$refs.factorPicker
				} = e
				// console.log(e)
				
				// this.columns.splice()
				if(columnIndex < 2){
					picker.setColumnValues(columnIndex+1, values[columnIndex][index].children)
					for(let i = columnIndex+1;i < 2; i++){
						picker.setColumnValues(i+1, values[i][0].children)
					}
				}
			},
			boxChange(data){
				this.changeTitle(data)
			},
			changeTitle(data){
				let result = ''
				if(data.length == 0){
					result = ''
				}else if(data.length == 1){
					result = data[0].label
				}else{
					result = `选择了${data.length}个因子`
				}
				this.title = result
			}
		}
	}
</script>

<style lang="scss">
	
</style>
