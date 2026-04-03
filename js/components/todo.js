const todo = {
    props: ['item', 'priority', 'togglePriority', 'index'],
    emits: ['delete', 'toggle'],
    methods: {
        deleteTaskEmit() {
            this.$emit('delete', this.index);
        },
        toggleTaskEmit() {
            this.$emit('toggle', this.index);
        }
    },
    template: `
        <div class="row g-0 align-items-stretch mb-2">
            <div class="col-6 testclasst d-flex align-items-center">{{item}} ({{priority}})</div>
            <button @click="toggleTaskEmit" class="col-3 testclassp centerItems">{{togglePriority}}</button>
            <button @click="deleteTaskEmit" class="btn btn-danger col-3 centerItems">Delete</button>
        </div>
    `
}