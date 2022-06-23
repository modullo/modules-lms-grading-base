@extends('layouts.themes.tabler.tabler')

@section('head_js')
<script src="https://unpkg.com/vue@2.6.12/dist/vue.js"></script>
<script src="https://unpkg.com/babel-polyfill/dist/polyfill.min.js"></script>
<script src="https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue-ellipse-progress/dist/vue-ellipse-progress.umd.min.js"></script>
<script src="https://unpkg.com/bootstrap-vue@2.21.2/dist/bootstrap-vue-icons.js"></script>
<script src="https://cdn.ckeditor.com/ckeditor5/27.1.0/classic/ckeditor.js"></script>
@endsection
@section('head_css')
<link type="text/css" rel="stylesheet" href="https://unpkg.com/bootstrap-vue@2.21.2/dist/bootstrap-vue.css" />
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap" rel="stylesheet">
<link href="{{ asset('Themes/tabler/css/dashboard.css') }}" rel="stylesheet" />
@endsection


@section('body_content_main')
@include('modules-lms-base::navigation',['type' => 'learner'])
<h2>hellloooo From Grading Module</h2>
@endsection

@section('body_js')
    <script src="{{ asset('LearningBase/owl.carousel.js') }}"></script>
    <script src="{{ asset('vendor/learning/components/CoursesCarousel.js') }}"></script>
    <script src="{{ asset('vendor/learning/app.js') }}"></script>
    <script src=""></script>
@endsection


