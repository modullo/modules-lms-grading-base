Vue.component('grade-header', {
    // props: {
    // },
    template: 
    `
    <div class="grade-header">
        <b-row>
            <b-col>
            <a href="/learner/grades"><b-icon icon="arrow-left" class="grade-back-icon"></b-icon></a>
            <span style="font-size: 1.3em; margin-left: 1em; margin-top: -10em;" class="font-weight-bold">
                Week 2 Quiz
                <p style="margin-left: 4.9em; font-size: .6em">Graded Quiz • 30 min</p>
            </span>
            </b-col>
            <b-col>
                <div class="float-right mt-3">
                <span class="font-weight-bold" style="font-size: .8em">Due Jun 6, 11:59 PM PDT</span>
                </div>
            </b-col>
        </b-row>
    </div>
    `,
    data() {
        return {
           
        }
    }
})