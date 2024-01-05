<template>
	<q-page class="q-py-xl flex justify-center items-center"
		><q-page-sticky position="bottom-right" :offset="[32, 32]">
			<q-btn
				fab
				icon="close"
				to="/task-tracker"
				size="lg"
				color="primary"
			/>
		</q-page-sticky>
		<q-form @submit="onSubmit" @reset="onReset" class="q-gutter-lg size">
			<div>
				<q-input
					filled
					v-model="title"
					label="Title"
					lazy-rules
					:rules="[
						(val) =>
							(val && val.length > 0) || 'A Title is Required',
					]"
					class="col"
				/>
			</div>

			<q-input
				filled
				v-model="description"
				label="Description"
				hint=""
				lazy-rules
				:rules="[]"
			/>

			<q-toggle v-model="dated" label="Dated" />

			<q-input
				filled
				v-model="markedDate"
				mask="date"
				:rules="['date']"
				:disable="!dated"
			>
				<template v-slot:append>
					<q-icon
						name="event"
						class="cursor-pointer"
						:color="dated ? 'primary' : 'white'"
					>
						<q-popup-proxy
							cover
							transition-show="scale"
							transition-hide="scale"
						>
							<q-date v-model="markedDate">
								<div class="row items-center justify-end">
									<q-btn
										v-close-popup
										label="Close"
										color="primary"
										flat
									/>
								</div>
							</q-date>
						</q-popup-proxy>
					</q-icon>
				</template>
			</q-input>

			<div class="row justify-center">
				<q-btn
					label="Create"
					type="submit"
					color="dark"
					text-color="primary"
					size="lg"
					rounded-bordered
				/>
				<q-btn
					label="Reset"
					type="reset"
					color="negative"
					flat
					class="q-ml-lg"
					size="lg"
					rounded-bordered
				/>
			</div>
		</q-form>
	</q-page>
</template>

<script setup lang="ts">
import { useQuasar } from "quasar";
import { ref } from "vue";
import { date } from "quasar";
import { useTasksStore, IncompleteTask } from "src/stores/tasks";
import { useRouter } from "vue-router";

const currentDate = new Date();

const $q = useQuasar();

const title = ref("");
const description = ref("");

const dated = ref(false);

const markedDate = ref(date.formatDate(currentDate, "YYYY/MM/DD"));

const Router = useRouter();
function onSubmit() {
	const store = useTasksStore();
	const { addTask } = store;

	addTask({
		title: title.value,
		description: description.value,
		createdDate: currentDate,
		markedDate: dated.value
			? date.extractDate(markedDate.value, "YYYY/MM/DD")
			: null,
	} as IncompleteTask);

	$q.notify({
		color: "dark",
		textColor: "primary",
		icon: "cloud_done",
		message: "Created",
	});

	Router.push("/task-tracker");
}

function onReset() {
	title.value = "";
	description.value = "";
	markedDate.value = date.formatDate(currentDate, "YYYY/MM/DD");
}
</script>

<style scoped lang="scss">
.size {
	min-width: 75%;
	max-width: 90%;
}
</style>
