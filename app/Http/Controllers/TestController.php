<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;

class TestController extends BaseController
{
    public function action()
    {
        return view('test', [
            'id' => 123,
        ]);
    }
}
