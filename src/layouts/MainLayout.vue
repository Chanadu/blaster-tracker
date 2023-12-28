<template>
	<q-layout view="hHh lpr lff" class="bg-grad">
		<layout-header-component></layout-header-component>
		<q-page-container>
			<router-view />
		</q-page-container>
	</q-layout>
</template>

<script setup lang="ts">
import LayoutHeaderComponent from 'src/components/layout_components/LayoutHeaderComponent.vue';
</script>

<style scoped lang="scss">
.bg-grad {
	background-image: linear-gradient(
		to top,
		$dark-page 0%,
		$dark-page 85%,
		$primary
	);
}
</style>
