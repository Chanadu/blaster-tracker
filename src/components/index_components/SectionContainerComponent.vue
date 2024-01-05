<template>
	<q-btn
		class="bg-dark rounded-borders flex justify-center items-center text-h5 nocaps q-pa-xl full-width border"
		v-ripple
		:to="toLocation"
	>
		<slot></slot>
	</q-btn>
</template>

<script setup lang="ts">
defineProps<{
	toLocation: string;
}>();
</script>

<style scoped lang="scss">
.border {
	border: 0.05em solid $light-border;
}
</style>
