<script>
import {defineComponent} from 'vue'

export default defineComponent({
	name: "CustomInput",
	props: ['modelValue', "placeholderValue", "typeValue"],
	emits: ['update:modelValue'],
})
</script>

<template>
	<label class="input">
		<input :type="typeValue" :placeholder="placeholderValue" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" class="input__input">
	</label>
</template>

<style scoped lang="sass">
.input
	width: 100%
	border-bottom: 2px solid #6F91B4
	padding: 8px 0
	&:not(:last-child)
	&__input
		width: 100%
		border: unset
		font-size: 16px
		font-weight: 500
		line-height: 24px
		color: #6F91B4
		margin: 8px 0
		padding: 0
</style>
