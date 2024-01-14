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
		<div class="column col-shrink q-pl-lg flex justify-around">
			<q-btn size="md" round flat v-ripple @click="onDelete">
				<q-icon name="delete" color="negative"></q-icon>
			</q-btn>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useQuasar } from "quasar";
import { Task, useTasksStore } from "src/stores/tasks";
const props = defineProps({
	id: Number,
	title: String,
	createdDate: Date,
	markedDate: Date || null,
	description: String,
});

const store = useTasksStore();
const $q = useQuasar();

function onDelete() {
	const task = {
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		id: props.id!,
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		title: props.title!,
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		createdDate: props.createdDate!,
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		markedDate: props.markedDate!,
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		description: props.description!,
	} as Task;
	const result = store.deleteTask(task);
	if (!result) {
		$q.notify({
			color: "dark",
			textColor: "primary",
			icon: "error",
			message: "Failed to Delete Task",
		});
	} else {
		$q.notify({
			color: "dark",
			textColor: "primary",
			icon: "error",
			message: `Deleted Task - ${task.title}`,
		});
	}
}
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
