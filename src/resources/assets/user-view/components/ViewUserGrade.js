Vue.component('view-user-grade', {
    template: 
    `
    <div>
        <h2 class="mt-5 font-weight-bold">Module 2 Quiz</h2>
        <h6 style="font-size:.9em" class="font-weight-bold">LATEST SUBMISSION GRADE</h6>
        <p style="font-size:1.6em" class="font-weight-bold">33.98%</p>
        <hr class="mt-2">
        <b-row>
        <b-form>
        <ol class="mt-2">
            <li>Question 1
                This week, Professor Santos showed visual illusions to make a point
                about how humans think. The illusion below, the Ponzo Illusion, was left out.
                <p class="font-weight-bold mt-3">Which of the follow statements align with what Professor Santos covered in lecture? (Check all that apply)</p>
                <div>
                    <b-form-group labe="Which of the follow statements align with what Professor Santos covered in lecture? (Check all that apply)" v-slot="{ ariaDescribedby }">
                        <b-form-radio-group
                            class="customRadio"
                            v-model="selected"
                            disabled
                            :options="options"
                            :aria-describedby="ariaDescribedby"
                            name="plain-stacked1"
                            plain
                            stacked
                        ></b-form-radio-group>
                    </b-form-group>
                    <div class="grade-mark p-2 mr-2">
                        <b-icon class="grade-success" icon="check2"></b-icon>
                        <span class="font-weight-bold pl-2">Correct</span>
                        <p>These studies shown in lecture highlight how we often 
                        mispredict and overestimate our reaction to bad news.</p>
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
                            name="plain-stacked"
                            plain
                            stacked
                        ></b-form-radio-group>
                    </b-form-group>
                    <div class="grade-mark-failed p-2 mr-2">
                        <b-icon class="grade-failed" icon="x-circle"></b-icon>
                        <span class="font-weight-bold pl-2">Incorrect</span>
                        <p>These studies shown in lecture highlight how we often 
                        mispredict and overestimate our reaction to bad news.</p>
                    </div>
                </div>
            </li>
        </ol>
        <div class="float-right m-3">
        </div>
        </b-form>
        </b-row>
    </div>
    `,
    data() {
        return {
            options: [
                { text: 'Knowing is not half the battle', value: 'first' },
                { text: 'Our minds always deliver accurate information to us', value: 'second' },
                { text: 'visual illusions to make a point', value: 'third' }
            ],
            selected: 'first',
            selected1: 'second',
            selected2: 'third',
        }
    },
})
