@extends('layouts.themes.tabler.tabler')

@section('head_css')
    <link type="text/css" rel="stylesheet" href="https://unpkg.com/bootstrap@4.5.3/dist/css/bootstrap.min.css" />
    <link type="text/css" rel="stylesheet" href="https://unpkg.com/bootstrap-vue@2.21.2/dist/bootstrap-vue.css" />
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('vendor/GradingBaseAssets/admin-view/assets/css/styles.css') }}">
    <style>
        .breadcrumb-item + .breadcrumb-item::before {
            content: ">>";
        }
    </style>
@endsection
@section('head_js')
<script src="https://unpkg.com/babel-polyfill/dist/polyfill.min.js"></script>
    <script src="https://unpkg.com/vue@2.6.12/dist/vue.js"></script>
    <script src="https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue-ellipse-progress/dist/vue-ellipse-progress.umd.min.js"></script>
    <script src="https://unpkg.com/bootstrap-vue@2.21.2/dist/bootstrap-vue-icons.js"></script>
    <script src="https://cdn.ckeditor.com/ckeditor5/27.1.0/classic/ckeditor.js"></script>

@endsection


@section('body_content_main')

    @include('modules-lms-base::navigation',['type' => 'tenant'])
    <nav>
        <ol class="breadcrumb">
            <li class="ml-4 breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active">Grade Student</li>
        </ol>
    </nav>
    <div id="app">
        <grade-header></grade-header>
        <b-container>
            <b-row>
                <b-col>
                    <admin-mark-grade></admin-mark-grade>
                </b-col>
            </b-row>
        </b-container>
    </div>

@endsection

@section('body_js')
    <script src="{{ asset('vendor/GradingBaseAssets/admin-view/components/AdminMarkGrade.js') }}"></script>
    <script src="{{ asset('vendor/GradingBaseAssets/admin-view/components/GradesHeader.js') }}"></script>
    <script src="{{ asset('vendor/GradingBaseAssets/admin-view/app.js') }}"></script>
@endsection


