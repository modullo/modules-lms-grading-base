Vue.component('learners-notes', {
    template: 
    `
    <div>
        <h1 class="mt-5 font-weight-bold">You can Access All Your Notes Here</h1>
        <b-row>
            <b-col lg="6">
            <select id="mySelect" @change="filterNotes()" v-model="selectedNotes">
                <option>Kindly Select One Of Your Notes</option>
                <option :value="option.value" v-for="(option, index) in options" :key="index">{{option.text}}</option>
            </select>
            </b-col>
        </b-row>
        <hr>
        <div v-if="filterNotes().length > 0">
            <b-card class="mb-3" v-for="(note, index) in filterNotes()" :key="index">
                <b-row>
                    <b-col md="6">
                        <div>
                            <b-icon icon="play-circle" class="play-button"></b-icon> 
                            <a href="#" class="pl-1">Module 1 Chapter</a>
                        </div>
                    </b-col>
                    <b-col md="6">
                        <div>
                            Hello, and welcome to the science of happiness.
                        </div>
                        <h6 class="font-weight-bold mt-3"> Your Note</h6>
                        <div v-show="!visibility">       
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur a,
                            ipsam repudiandae itaque doloribus perferendis rerum nostrum officia? Ratione, sunt minus 
                        </div>
                        <b-col v-show="visibility" style="padding: 0 !important">
                            <div :id="'editor'+index">
                            <p>Hello World!</p>
                            <p>Some initial <strong>bold</strong> text</p>
                            <p><br></p>
                        </div>
                        </b-col>
                        <div class="mt-2" v-show="!visibility">
                            <b-button size="sm" @click="openEditor()"><b-icon icon="trash"></b-icon> Edit</b-button>
                            <b-button size="sm" class="ml-3"><b-icon icon="pencil-square"></b-icon> Delete</b-button>
                        </div>
                        <div class="mt-2" v-show="visibility">
                            <b-button size="sm"><b-icon icon="cloud-upload"></b-icon> Save</b-button>
                            <b-button size="sm" @click="closeEditor()" class="ml-3"><b-icon icon="x-circle"></b-icon> Cancel</b-button>
                        </div>
                    </b-col>
                </b-row>
            </b-card>
        </div>
        <div v-else>
            <p> Helloooo No noted </p>
        </div>
    </div>
    `,
    data() {
        return {
            options: [
                { value: 'Module 1', text: 'Module 1' },
                { value: 'Module 2', text: 'Module 2' },
                { value: 'Module 3', text: 'Module 3' },
                { value: 'Module 4', text: 'Module 4' },
                { value: 'Module 5', text: 'Module 5'}
            ],
            notes: [
                {
                    id: 1,
                    module: 'Module 1',
                    chapter: 'Chapter 1',
                    note: 'Lorem LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem',
                },
                {
                    id: 2,
                    module: 'Module 1',
                    chapter: 'Chapter 3',
                    note: 'Lorem Musah LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem',
                },
                {
                    id: 3,
                    module: 'Module 2',
                    chapter: 'Chapter 1',
                    note: 'Lorem LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem',
                },
                {
                    id: 4,
                    module: 'Module 2',
                    chapter: 'Chapter 1',
                    note: 'Lorem LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem',
                },
                {
                    id: 5,
                    module: 'Module 3',
                    chapter: 'Chapter 6',
                    note: 'Lorem LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem',
                },
                {
                    id: 6,
                    module: 'Module 4',
                    chapter: 'Chapter 1',
                    note: 'Lorem LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem',
                },
            ],
            selectedNotes: 'Kindly Select One Of Your Notes',
            visibility: false,
        }
    },
    methods: {
        openEditor() {
            this.visibility = true
        },
        closeEditor() {
            this.visibility = false
        },
        filterNotes() {
            if(this.selectedNotes !== 'Kindly Select One Of Your Notes'){
                let result =  this.notes.filter((item)=>{
                    return item.module === this.selectedNotes
                })
                console.log(result)
                if (result.length > 0) {
                    return result
                }else {
                    return [];
                }
            } else {
                return this.notes;
            }
        },
    },
})