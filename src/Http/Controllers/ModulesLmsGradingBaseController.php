<?php

namespace Modullo\ModulesLmsGradingBase\Http\Controllers;

use App\Http\Controllers\Controller;

class ModulesLmsGradingBaseController extends Controller
{
    public function allNotes()
    {
        return view('modules-lms-grading-base::learners.notes.index');
    }

    public function allGrades()
    {
        return view('modules-lms-grading-base::learners.grades.index');
    }

    public function showGrades()
    {
        return view('modules-lms-grading-base::learners.grades.show');
    }
}
