Vue.createApp({
    data: function () {
        return {
            jobs: []
        };
    },

    methods: {
        loadJobs: function () {
            var self = this;

            fetch("jobs.json")
                .then(function (response) {
                    if (response.ok === true) {
                        return response.json();
                    }
                    else {
                        throw new Error("Could not load jobs.json");
                    }
                })
                .then(function (data) {
                    self.jobs = data;
                })
                .catch(function (error) {
                    console.error("Error loading job data:", error);
                });
        }
    },

    mounted: function () {
        this.loadJobs();
    }
}).mount("#app");