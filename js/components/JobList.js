const JobList = {
    props: ['jobs'],
    template: `
        <div>
            <router-link to="/job-overview">Overview</router-link>
            <p v-for="job in jobs" :key="job.job_id">
                <router-link :to="'/job/' + job.job_id">{{ job.job_id }}</router-link>
            </p>
        </div>
    `
};
