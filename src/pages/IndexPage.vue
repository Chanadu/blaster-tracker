<template>
	<q-page class="column q-pa-xl q-gutter-lg">
		<section-container-component
			v-for="{ id, name, toLocation } in items"
			:key="id"
			@click="onClick(id)"
			:to-location="toLocation"
		>
			{{ name }}
		</section-container-component>
	</q-page>
</template>

<script setup lang="ts">
import SectionContainerComponent from "src/components/SectionContainerComponent.vue";
import { ref } from "vue";

let id = 0;
const items = ref([
	{
		id: id,
		name: `Homework Tracker`,
		toLocation: `homework-tracker`,
	},
	{
		id: id++,
		name: `Task Tracker`,
		toLocation: `task-tracker`,
	},
	{
		id: id++,
		name: `Calendar`,
		toLocation: `calendar`,
	},
	{
		id: id++,
		name: `Object ${id + 1}`,
		toLocation: `object ${id + 1}`,
	},
]);

function onClick(index: number) {
	console.log(index);
}
</script>
