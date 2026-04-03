const JobList = {
    props: ['jobs'],
    template: `
        <div class="centerItems">
            <p><router-link to="/job-overview" class="centerItems">Overview</router-link></p>
            <p v-for="job in jobs" :key="job.job_id" class="centerItems">
                <router-link :to="'/job/' + job.job_id" class="centerItems">{{ job.job_id }}</router-link>
            </p>
        </div>
    `
};
