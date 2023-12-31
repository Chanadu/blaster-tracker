<template>
	<q-page class="row q-pa-xl q-gutter-lg justify-center align-center">
		<task-holder-component></task-holder-component>
		<task-holder-component></task-holder-component>
		<task-holder-component></task-holder-component>
		<task-holder-component></task-holder-component>
		<task-holder-component></task-holder-component>
		<task-holder-component></task-holder-component>
		<task-holder-component></task-holder-component>
		<task-holder-component></task-holder-component>
		<task-holder-component></task-holder-component>
	</q-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TaskHolderComponent from "src/components/task_components/TaskHolderComponent.vue";

let tasks = ref([{}, {}]);
</script>

<style scoped lang="scss"></style>
