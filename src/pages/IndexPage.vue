<template>
	<q-page class="column q-pa-xl gap-3 q-gutter-lg">
		<section-container-component
			v-for="{ id, name } in items"
			:key="id"
			@click="onClick(id)"
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
		name: `Object ${id + 1}`,
	},
	{
		id: id++,
		name: `Object ${id + 1}`,
	},
	{
		id: id++,
		name: `Object ${id + 1}`,
	},
	{
		id: id++,
		name: `Object ${id + 1}`,
	},
]);

function onClick(index: number) {
	console.log(index);
}
</script>
