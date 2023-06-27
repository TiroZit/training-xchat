<script>
import {defineComponent} from 'vue'

export default defineComponent({
	name: "Popup"
})
</script>

<template>
	<div class="popup">
		<div class="popup__wrapper">
			<div class="popup__header">
				<div class="popup__title">
					<slot name="title"/>
				</div>
				<div class="popup__subtitle">
					<slot name="subtitle"/>
				</div>
			</div>
			<div class="popup__body">
				<slot name="body"/>
			</div>
			<div class="popup__footer">
				<slot name="footer"/>
			</div>
		</div>
	</div>
</template>

<style scoped lang="sass">
.popup
	background-color: #fff
	border-radius: 20px
	max-width: 480px
	margin: auto
	&__wrapper
		padding: 32px 48px
	&__header
		margin-bottom: 50px
	&__title
		color: #354753
		font-size: 32px
		font-weight: 700
		line-height: 34px
		margin-bottom: 8px
	&__subtitle
		color: #6F91B4
		font-size: 16px
		line-height: 18px
	&__body
		margin-bottom: 64px
</style>
