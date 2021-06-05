Vue.component('admin-lessons-grades', {
    template: 
    `
    <div>
    <h1 class="mt-5 font-weight-bold">You can Access All Your Grades Here</h1>        
    <b-row class="mb-3">
        <b-col md="3">
        <b-form-input v-model="filter" type="search" id="filterInput" placeholder="Type to Search"></b-form-input>
        </b-col>
    </b-row>
    <hr>
    <b-row>
        <b-col>
            <b-table
                striped
                :busy="isBusy"
                hover
                outlined
                :filter="filter"
                :per-page="perPage"
                :items="grades"
                :fields="fields"
                :current-page="currentPage"
            >
            <template #table-busy>
                <div class="text-center primary-color my-2">
                <b-spinner class="align-middle"></b-spinner>
                <strong>Loading...</strong>
                </div>
            </template>

            <template #cell(course_title)="data">
                <b-icon icon="book" class="m-2 icon-style"></b-icon> 
                <a href="/tenant/all-grades/hello">{{data.item.course_title}}</a>
            </template>

            </b-table>
            <b-pagination
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                aria-controls="my-table"
            ></b-pagination>
        </b-col>
    </b-row>
    </div>
    `,
    data() {
        return {
            isBusy:false,
            fields: [{key:'course_title', label: 'Course Title'}, {key:'lesson_type', label:'Lesson Type'},
             {key:'status', label:'Status'}, {key:'grade_score', label:'Grade Score'}, 
             {key:'submitted_date', label:'Submitted Date'}],
            filter: "",
            perPage: 10,
            currentPage: 1,
            grades: [
                {
                'course_title': 'Fullstack API development with Nuxt and Linux - 2020',
                'lesson_type': 'Module 1',
                'status':"Graded",
                'grade_score':"---",
                'submitted_date':"12th jan, 2021",
                },
                {
                'course_title': 'Vue js',
                'lesson_type': 'Module 2',
                'status':'Graded',
                'grade_score':"---",
                'submitted_date':"12th jan, 2021",
                },
                {
                'course_title': 'Test Note',
                'lesson_type': 'Module 1',
                'status':"Graded",
                'grade_score':"10%",
                'submitted_date':"12th jan, 2021",
                },
                {
                'course_title': 'Note @',
                'lesson_type': 'Module 1',
                'status':"Not Graded",
                'grade_score':"---",
                'submitted_date':"12th jan, 2021",
                },
                {
                'course_title': 'React js',
                'lesson_type': 'Module 1',
                'status':"Not Graded",
                'grade_score':"---",
                'submitted_date':"12th jan, 2021",
                },
                {
                'course_title': 'React js',
                'lesson_type': 'Module 1',
                'status':"Graded",
                'grade_score':"50%",
                'submitted_date':"12th jan, 2021",
                },
                {
                'course_title': 'React js',
                'lesson_type': 'Module 1',
                'status':"Graded",
                'grade_score':"---",
                'submitted_date':"12th jan, 2021",
                },
                {
                'course_title': 'React js',
                'lesson_type': 'Module 1',
                'status':"Graded",
                'grade_score':"80%",
                'submitted_date':"12th jan, 2021",
                },
                {
                'course_title': 'React js',
                'lesson_type': 'Module 1',
                'status':"Graded",
                'grade_score':"---",
                'submitted_date':"12th jan, 2021",
                },
                {
                'course_title': 'Another js',
                'lesson_type': 'Module 1',
                'status':"Not Graded",
                'grade_score':"---",
                'submitted_date':"12th jan, 2021",
                },
                {
                'course_title': 'React js',
                'lesson_type': 'Module 1',
                'status':"Graded",
                'grade_score':"---",
                'submitted_date':"12th jan, 2021",
                },
                {
                'course_title': 'React js',
                'lesson_type': 'Module 1',
                'status':"Graded",
                'grade_score':"---",
                'submitted_date':"12th jan, 2021",
                },
                {
                'course_title': 'React js',
                'lesson_type': 'Module 1',
                'status':"Graded",
                'grade_score':"---",
                'submitted_date':"12th jan, 2021",
                },
                {
                'course_title': 'React js',
                'lesson_type': 'Module 1',
                'status':"Not Graded",
                'grade_score':"---",
                'submitted_date':"12th jan, 2021",
                },
                {
                'course_title': 'React js',
                'lesson_type': 'Module 1',
                'status':"Not Graded",
                'grade_score':"---",
                'submitted_date':"12th jan, 2021",
                },
            ],
        }
    },
    computed: {
        rows() {
          return this.grades.length;
        },
    },
    created() {
        this.isBusy = !this.isBusy
        setTimeout(() => {
            this.isBusy = false
        }, 1000);
    }
})