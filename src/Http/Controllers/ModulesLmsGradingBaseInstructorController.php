<?php

namespace Modullo\ModulesLmsGradingBase\Http\Controllers;

use App\Http\Controllers\Controller;

class ModulesLmsGradingBaseInstructorController extends Controller
{
    public function allGrades()
    {
        return view('modules-lms-grading-base::instructors.grades.index');
    }

    public function showGrades()
    {
        return view('modules-lms-grading-base::instructors.grades.show');
    }
}
