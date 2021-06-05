Vue.component('admin-mark-grade', {
    template: 
    `
    <div>
        <h2 class="mt-5 font-weight-bold">Module 2 Quiz</h2>
        <h6 style="font-size:.9em" class="font-weight-bold">TOTAL GRADE MARK</h6>
        <p style="font-size:1.6em" class="font-weight-bold">100%</p>
        <hr class="mt-2">
        <b-row>
        <b-form @submit.prevent="goToHome()">
        <ol class="mt-2">
            <li>Question 1
                This week, Professor Santos showed visual illusions to make a point
                about how humans think. The illusion below, the Ponzo Illusion, was left out.
                <p class="font-weight-bold mt-3">Which of the follow statements align with what Professor Santos covered in lecture? (Check all that apply)</p>
                <div>
                    <b-form-group labe="Which of the follow statements align with what Professor Santos covered in lecture? (Check all that apply)" v-slot="{ ariaDescribedby }">
                        <b-form-radio-group
                            class="customRadio"
                            v-model="selected1"
                            disabled
                            :options="options"
                            :aria-describedby="ariaDescribedby"
                            name="plain-stacked"
                            plain
                            stacked
                        ></b-form-radio-group>
                    </b-form-group>
                    <div class="grade-mark p-2 mr-2">
                        <b-col md="6">
                            <b-form-input id="input-small" size="md" placeholder="Input Grade Score"></b-form-input>
                        </b-col>
                    </div>
                </div>
            </li>

            <li class="mt-5">Question 2
                This week, Professor Santos showed visual illusions to make a point
                about how humans think. The illusion below, the Ponzo Illusion, was left out.
                <p class="font-weight-bold mt-3">Which of the follow statements align with what Professor Santos covered in lecture? (Check all that apply)</p>
                <div>
                    <b-form-group labe="Which of the follow statements align with what Professor Santos covered in lecture? (Check all that apply)" v-slot="{ ariaDescribedby }">
                        <b-form-radio-group
                            class="customRadio"
                            v-model="selected2"
                            disabled
                            :options="options"
                            :aria-describedby="ariaDescribedby"
                            name="plain-stacked2"
                            plain
                            stacked
                        ></b-form-radio-group>
                    </b-form-group>
                    <div class="grade-mark p-2 mr-2">
                        <b-col md="6">
                            <b-form-input id="input-small" size="md" placeholder="Input Grade Score"></b-form-input>
                        </b-col>
                    </div>
                </div>
            </li>
        </ol>
        <div class="float-right m-3">
            <b-button v-b-modal.modal-footer-sm>cancel</b-button>
            <b-button type="submit" v-b-modal.modal-footer-lg>submit</b-button>
        </div>
        </b-form>
        </b-row>
    </div>
    `,
    data() {
        return {
            selected: 'first',
            selected1: 'second',
            selected2: 'third',
            options: [
                { text: 'Knowing is not half the battle', value: 'first' },
                { text: 'Our minds always deliver accurate information to us', value: 'second' },
                { text: 'visual illusions to make a point', value: 'third' }
            ],
        }
    },
    methods: {
        goToHome() {
           location.href = 'http://127.0.0.1:5500/admin-view/'
        }
    }
})
