const jobsData = [];

const app = Vue.createApp({
    data() {
        return { jobs: [], todos: [], newItem: "" };
    },
    methods: {
        loadJobs() {
            fetch("jobs.json")
                .then(response => {
                    if (response.ok) return response.json();
                    throw new Error("Could not load jobs.json");
                })
                .then(data => {
                    this.jobs = data;
                    jobsData.push(...data);
                })
                .catch(error => console.error("Error loading job data:", error));
        },
        addTask() {
            if (this.newItem.trim() !== "") {
                this.todos.push({ item: this.newItem, priority: "Medium" });
                this.newItem = "";
            }
        }
    },
    mounted() {
        this.loadJobs();
    }
});

app.component(JobList);
app.component('todo', todo);
app.use(router);
app.mount('#app');
