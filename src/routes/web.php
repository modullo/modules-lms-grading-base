<?php

use Illuminate\Support\Facades\Route;
use Modullo\ModulesLmsGradingBase\Http\Controllers\ModulesLmsGradingBaseController;

Route::group(['namespace' => 'Modullo\ModulesLmsGradingBase\Http\Controllers','middleware' => 'web'],function() {
    Route::middleware('auth')->group(function () {

        Route::group(['prefix' => 'learner'],function(){
            Route::group(['prefix' => 'notes'],function() {
                Route::get('', 'ModulesLmsGradingBaseController@allNotes');
                Route::post('{module_id}', 'ModulesLmsGradingBaseController@storeNote');
            });

            Route::group(['prefix' => 'grades'],function() {
                Route::get('', 'ModulesLmsGradingBaseController@allGrades');
                Route::get('{slug}', 'ModulesLmsGradingBaseController@showGrades');
            });
        });

        Route::group(['prefix' => 'tenant'],function(){
            Route::group(['prefix' => 'all-grades'],function() {
                Route::get('', 'ModulesLmsGradingBaseInstructorController@allGrades');
                Route::get('{slug}', 'ModulesLmsGradingBaseInstructorController@showGrades');
            });

            // Route::group(['prefix' => 'grades'],function() {
            //     Route::get('', 'ModulesLmsGradingBaseController@allGrades');
            //     Route::get('{slug}', 'ModulesLmsGradingBaseController@showGrades');
            // });
        });
    });

});
