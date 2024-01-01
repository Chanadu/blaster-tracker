<template>
	<q-page class="q-pa-xl q-gutter-md">
		<task-holder-component
			title="Longer title idk what is about to happen"
			:createdDate="new Date()"
			:endDate="new Date(2018, 12, 12)"
			description="Testing Description"
		>
		</task-holder-component>
		<task-holder-component
			title="Longer title idk what is about to happen"
			:createdDate="new Date()"
			:endDate="new Date(2018, 12, 12)"
			description="Testing Description"
		>
		</task-holder-component>
		<task-holder-component
			title="Longer title idk what is about to happen"
			:createdDate="new Date()"
			:endDate="new Date(2018, 12, 12)"
			description="Testing Description"
		>
		</task-holder-component>
		<task-holder-component
			title="Longer title idk what is about to happen"
			:createdDate="new Date()"
			:endDate="new Date(2018, 12, 12)"
			description="Testing Description"
		>
		</task-holder-component>
		<task-holder-component
			title="Longer title idk what is about to happen"
			:createdDate="new Date()"
			:endDate="new Date(2018, 12, 12)"
			description="Testing Description"
		>
		</task-holder-component>
		<task-holder-component
			title="Longer title idk what is about to happen"
			:createdDate="new Date()"
			:endDate="new Date(2018, 12, 12)"
			description="Testing Description"
		>
		</task-holder-component>
		<task-holder-component
			title="Longer title idk what is about to happen"
			:createdDate="new Date()"
			:endDate="new Date(2018, 12, 12)"
			description="Testing Description"
		>
		</task-holder-component>
		<task-holder-component
			title="Longer title idk what is about to happen"
			:createdDate="new Date()"
			:endDate="new Date(2018, 12, 12)"
			description="Testing Description"
		>
		</task-holder-component>
		<task-holder-component
			title="Longer title idk what is about to happen"
			:createdDate="new Date()"
			:endDate="new Date(2018, 12, 12)"
			description="Testing Description"
		>
		</task-holder-component>
		<task-holder-component
			title="Longer title idk what is about to happen"
			:createdDate="new Date()"
			:endDate="new Date(2018, 12, 12)"
			description="Testing Description"
		>
		</task-holder-component>
		<task-holder-component
			title="Longer title idk what is about to happen"
			:createdDate="new Date()"
			:endDate="new Date(2018, 12, 12)"
			description="Testing Description"
		>
		</task-holder-component>
		<task-holder-component
			title="Longer title idk what is about to happen"
			:createdDate="new Date()"
			:endDate="new Date(2018, 12, 12)"
			description="Testing Description"
		>
		</task-holder-component>
		<q-page-sticky position="bottom-right" :offset="[32, 32]">
			<q-btn fab icon="add" color="accent" ripple />
		</q-page-sticky>
	</q-page>
</template>

<script setup lang="ts">
// import { ref } from "vue";
import TaskHolderComponent from "src/components/task_components/TaskHolderComponent.vue";

// let tasks = ref([{}, {}]);
</script>

<style scoped lang="scss">
.border {
	border: 1px solid $primary;
}
</style>
