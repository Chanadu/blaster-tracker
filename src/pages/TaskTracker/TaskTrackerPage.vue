<template>
	<q-page class="q-pa-xl q-gutter-md">
		<task-holder-component
			v-for="{ id, title, description, createdDate, markedDate } in tasks"
			:key="id"
			:id="id"
			:title="title"
			:description="description"
			:createdDate="createdDate"
			:markedDate="markedDate"
		>
		</task-holder-component>

		<q-page-sticky position="bottom-right" :offset="[32, 32]">
			<q-btn
				fab
				icon="add"
				color="primary"
				ripple
				to="/task-tracker/create-new-task"
			/>
		</q-page-sticky>
	</q-page>
</template>

<script setup lang="ts">
// import { ref } from "vue";
import { storeToRefs } from "pinia";
import TaskHolderComponent from "src/components/task_components/TaskHolderComponent.vue";
import { useTasksStore } from "src/stores/tasks";

const store = useTasksStore();
const { tasks } = storeToRefs(store);
</script>

<style scoped lang="scss">
.border {
	border: 1px solid $primary;
}
</style>
