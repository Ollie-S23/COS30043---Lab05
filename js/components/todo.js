const todo = {
    props: ['item', 'priority'],
    template: `
        <div class="row">
            <p class="col-6 testclasst">{{item}}</p>
            <p class="col-3 testclassp">({{priority}})</p>
            <button class="btn btn-danger col-3">Delete</button>
        </div>
    `
}