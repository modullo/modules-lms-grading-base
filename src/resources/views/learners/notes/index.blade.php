@extends('layouts.themes.tabler.tabler')

@section('head_css')
    <link type="text/css" rel="stylesheet" href="https://unpkg.com/bootstrap@4.5.3/dist/css/bootstrap.min.css" />
    <link type="text/css" rel="stylesheet" href="https://unpkg.com/bootstrap-vue@2.21.2/dist/bootstrap-vue.css" />
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('vendor/GradingBaseAssets/learners-notes/assets/css/styles.css') }}">
    <style>
        .breadcrumb-item+.breadcrumb-item::before {
            content: ">>";
        }

    </style>
@endsection
@section('head_js')
    <script src="https://unpkg.com/vue@2.6.12/dist/vue.js"></script>
    <script src="https://unpkg.com/babel-polyfill/dist/polyfill.min.js"></script>
    <script src="https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue-ellipse-progress/dist/vue-ellipse-progress.umd.min.js"></script>
    <script src="https://unpkg.com/bootstrap-vue@2.21.2/dist/bootstrap-vue-icons.js"></script>
    <script src="https://cdn.ckeditor.com/ckeditor5/27.1.0/classic/ckeditor.js"></script>

@endsection


@section('body_content_main')

    @include('modules-lms-base::navigation',['type' => 'learner'])
    <div id="app">
        <breadcrumbs :items="[
                    {url: '/tenant/dashboard', title: 'Home', active: false},
                    {url: '', title: 'All Notes', active: true},
                ]">
        </breadcrumbs>
        <b-container>
            <b-row>
                <b-col>
                    <learners-notes :note-data="notes"></learners-notes>
                </b-col>
            </b-row>
        </b-container>
    </div>

@endsection

@section('body_js')

    <script src="{{ asset('vendor/GradingBaseAssets/learners-notes/components/LearnersNotes.js') }}"></script>
    <script src="{{ asset('vendor/breadcrumbs/BreadCrumbs.js') }}"></script>
    {{-- <script src="{{ asset('vendor/GradingBaseAssets/learners-notes/app.js') }}"></script> --}}
    <link href="https://unpkg.com/@morioh/v-quill-editor/dist/editor.css" rel="stylesheet">
    <script src="https://unpkg.com/@morioh/v-quill-editor/dist/editor.min.js" type="text/javascript"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">
    <script src="https://cdn.jsdelivr.net/npm/vue-loading-overlay@3"></script>
    <link href="https://cdn.jsdelivr.net/npm/vue-loading-overlay@3/dist/vue-loading.css" rel="stylesheet">
    <!-- Init the plugin and component-->
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script>
        Vue.use(VueLoading);
        Vue.component('loading', VueLoading)
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": false,
            "progressBar": true,
            "positionClass": "toast-top-right",
            "preventDuplicates": false,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
            }
    </script>
    <script>
        var app = new Vue({
            el: '#app',
            data: {
                name: 'Musah Musah!',
                notes: {!! json_encode($data) !!}
            },
            methods: {

            }
        })
    </script>

@endsection
