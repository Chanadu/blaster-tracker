<template>
	<div class="border rounded-borders q-px-md q-py-sm row">
		<div class="column col">
			<div class="row col-5 flex justify-center align no-wrap">
				<p class="text-h6">{{ title }}</p>
				<div class="col"></div>
				<p class="text-body1">{{ description }}</p>
			</div>
			<div class="col"></div>
			<div class="row justify-between text-subtitle2 items-center align">
				<p v-if="createdDate">
					Created: {{ createdDate?.toLocaleDateString() }}
				</p>
				<p v-else></p>
				<p v-if="markedDate" class="text-negative">
					Marked: {{ markedDate?.toLocaleDateString() ?? "" }}
				</p>
				<p v-else></p>
			</div>
		</div>
		<div class="column col-shrink q-px-md q-pb-sm flex justify-around">
			<q-icon name="warning" size="sm"></q-icon>
			<q-icon name="warning" size="sm"></q-icon>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps({
	title: String,
	createdDate: Date,
	markedDate: Date || null,
	description: String,
});
</script>

<style scoped lang="scss">
.border {
	border: 1px solid $primary;
}
.size {
	width: 16em;
	height: 16em;
}
.align {
	align-items: first baseline;
}
</style>
