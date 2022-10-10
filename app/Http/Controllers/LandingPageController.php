<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Subscription;

class LandingPageController extends BaseController {
    public function subscribe(Request $request) {
        $request->validate([
            'name'=>'required',
            'email'=>'required'
        ]);

        $subscription = Subscription::create([
            'name' => $request->get('name'),
            'email' => $request->get('email'),
        ]);

        $subscription->save();
    }

    public function test() {
        echo "hello world...";
    }
}
