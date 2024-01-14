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
		addTask(task: IncompleteTask): boolean {
			const completeTask = task as Task;
			completeTask.id = this.idCounter;
			this.idCounter++;
			this.tasks.push(completeTask);
			return true;
		},
		deleteTask(task: Task): boolean {
			let index = -1;
			for (let i = 0; i < this.tasks.length; i++) {
				const { id, title, description, createdDate, markedDate } =
					this.tasks[i];
				if (
					id == task.id &&
					title == task.title &&
					description == task.description &&
					createdDate == task.createdDate &&
					markedDate == task.markedDate
				) {
					index = i;
				}
			}
			if (index == -1) {
				return false;
			}
			this.tasks.splice(index, index);
			return true;
		},
	},
});
