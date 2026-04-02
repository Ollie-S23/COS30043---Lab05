const JobDetail = {
    props: ['id'],
    data() {
        return { job: null };
    },
    mounted() {
        this.job = jobsData.find(j => j.job_id === this.id) || null;
    },
    watch: {
        id(newId) {
            this.job = jobsData.find(j => j.job_id === newId) || null;
        }
    },
    template: `
        <div v-if="job">
            <h3>{{ job.job_id }}</h3>
            <p><strong>Company:</strong> {{ job.company }}</p>
            <p><strong>Location:</strong> {{ job.location }}</p>
            <p><strong>Type:</strong> {{ job.employment_type }}</p>
            <p><strong>Salary:</strong> {{ job.salary_range }}</p>
            <p><strong>Level:</strong> {{ job.job_level }}</p>
            <p><strong>Deadline:</strong> {{ job.application_deadline }}</p>
            <p>{{ job.job_description }}</p>
        </div>
        <div v-else><p>Job not found.</p></div>
    `
};
