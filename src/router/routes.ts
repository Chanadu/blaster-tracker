import { RouteRecordRaw } from "vue-router";

import MainLayout from "layouts/MainLayout.vue";
import IndexLayout from "src/layouts/IndexLayout.vue";

import IndexPage from "pages/IndexPage.vue";
import ErrorNotFoundPage from "pages/ErrorNotFoundPage.vue";

import HomeworkTrackerPage from "src/pages/HomeworkTrackerPage.vue";

import TaskTrackerPage from "src/pages/TaskTracker/TaskTrackerPage.vue";
import CreateNewTaskPage from "src/pages/TaskTracker/CreateNewTaskPage.vue";

import CalendarPage from "src/pages/CalendarPage.vue";

const routes: RouteRecordRaw[] = [
	{
		path: "/",
		component: () => IndexLayout,
		children: [{ path: "", component: IndexPage }],
	},
	{
		path: "/homework-tracker",
		component: () => MainLayout,
		children: [{ path: "", component: HomeworkTrackerPage }],
	},
	{
		path: "/task-tracker",
		component: () => MainLayout,
		children: [
			{ path: "", component: TaskTrackerPage },
			{
				path: "create-new-task",
				component: CreateNewTaskPage,
			},
		],
	},
	{
		path: "/calendar",
		component: () => MainLayout,
		children: [{ path: "", component: CalendarPage }],
	},
	// Always leave this as last one,
	// but you can also remove it
	{
		path: "/:catchAll(.*)*",
		component: () => ErrorNotFoundPage,
	},
];

export default routes;
