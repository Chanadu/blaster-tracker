import { defineStore } from "pinia";

export type IncompleteTask = {
	title: string;
	description: string;
	createdDate: Date;
	markedDate: Date | undefined;
};

export type Task = {
	id: number;
	title: string;
	description: string;
	createdDate: Date;
	markedDate: Date | undefined;
};

export const useTasksStore = defineStore("tasks", {
	state: () => ({
		tasks: [] as Task[],
		idCounter: 0,
	}),

	getters: {
		isEmpty(state) {
			return state.tasks.length == 0;
		},
	},

	actions: {
		addTask(task: IncompleteTask) {
			const completeTask = task as Task;
			completeTask.id = this.idCounter;
			this.idCounter++;
			this.tasks.push(completeTask);
		},
	},
});
