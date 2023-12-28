<template>
	<q-btn
		class="bg-dark rounded-borders flex justify-center items-center text-h5 border nocaps q-pa-xl"
		ripple
	>
		<slot></slot>
	</q-btn>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.border {
	border: 0.05em solid $light-border;
}
</style>
