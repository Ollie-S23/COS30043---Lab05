const jobsData = [];

const app = Vue.createApp({
    data() {
        return { jobs: [] };
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
        }
    },
    mounted() {
        this.loadJobs();
    }
});

app.component(JobList);
app.use(router);
app.mount('#app');
