<?php

namespace Modullo\ModulesLmsGradingBase\Http\Controllers;

use App\Http\Controllers\Controller;
use GuzzleHttp\Exception\GuzzleException;
use Hostville\Modullo\Sdk;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Cache;
use Illuminate\Http\Request;

class ModulesLmsGradingBaseController extends Controller
{
    protected Sdk $sdk;
    public function __construct(Sdk $sdk)
    {
        $this->sdk = $sdk;
    }

    //    Modules
    protected function getModules(){
        $query = $this->sdk->createModuleService();
        $query = $query->addQueryArgument('limit',100);
        $path = [''];
        return $query->send('get', $path);
    }
    
    // Notes
    protected function getNotes(){
        $query = $this->sdk->createLearnerNoteService();
        $query = $query->addQueryArgument('limit',100);
        $path = ['all'];
        return $query->send('get', $path);
    }

    public function allNotes(Sdk $sdk)
    {

        if ($this->getNotes()->isSuccessful()){
            $response = $this->getNotes()->getData();
            $data = $response['notes'];
            return view('modules-lms-grading-base::learners.notes.index',compact('data'));
        }
        $data = ['error' => 'unable to fetch the requested resource'];
        return view('modules-lms-grading-base::learners.notes.index',compact('data'));
    }

    public function storeNote(string $module_id, Request $request, Sdk $sdk) 
    {
        $resource = $sdk->createLearnerNoteService();
        $path = ['save', $module_id];
        $resource = $resource
        ->addBodyParam('note',$request->note);
        $response = $resource->send('post',$path);
        if (!$response->isSuccessful()) {
            $response = $response->getData();
            if ($response['errors'][0]['code'] === '005') return response()->json(['error' => $response['errors'][0]['source'] ?? ''],$response['errors'][0]['status']);
            return response()->json(['error' => $response['errors'][0]['title'] ?? ''],$response['errors'][0]['status']);

        }
        return response()->json(['message' => 'Note Successfully Saved!'], 200);
    }

    // Grades
    public function allGrades()
    {
        return view('modules-lms-grading-base::learners.grades.index');
    }

    public function showGrades()
    {
        return view('modules-lms-grading-base::learners.grades.show');
    }
}
