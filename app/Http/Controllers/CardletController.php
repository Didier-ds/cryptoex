<?php

namespace App\Http\Controllers;

use App\Helpers\Helpers;
use App\Helpers\ResponseBuilder;
use App\Http\Requests\CardletRequest;
use App\Http\Resources\CardletMainResource;
use App\Http\Resources\Cardletresource;
use App\Models\Card;
use App\Models\Cardlet;
use App\Models\CardletImage;
use App\Models\Konstants;
use App\Models\RoleManager;
use App\Models\User;
use App\Notifications\CardletNotification;
use Illuminate\Contracts\Session\Session;
use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Session;
// use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;
use Inertia\Inertia;

class CardletController extends Controller
{
    public function store(Request $request, $cardUuid)
    {
        $user = auth()->user();
        // dd($user->id);
        $card = Card::where('uuid', $cardUuid)->first();
        $allowedExtension = ['jpg', 'png'];
        if($request -> hasFile('images')) {
            $files = $request->file('images');
            // dd($files);
            $cardlet = Cardlet::create([
                'uuid' => Str::uuid(), 
                'name' => $card->name,
                'comment' => $request->comment,
                'type' => $card->type,
                'rate' => $card->rate,
                'user_id' => auth()->id(),
                'amount' => $request->amount
            ]);
            foreach($files as $file){
                $filename = hexdec(uniqid());
                $extension = $file->getClientOriginalExtension();
                $check = in_array($extension, $allowedExtension);
                if($check){
                    
                    foreach ($request->images as $image) {
                        # code...
                        $filename = Helpers::runImageUpload($image, 'cardlets');
                        CardletImage::create([
                            'cardlet_id' => $cardlet->id,
                            'filename' => $filename
                        ]);
                    }
                    $admins = User::role(Konstants::ROLE_ADMIN)->get();
                     foreach ($admins as $admin) {
                         $admin->notify(new CardletNotification(Helpers::buildMailData(
                             Konstants::MAIL_CARDLET_C_BODY($user),
                             Konstants::MAIL_CARDLET_C_ACT,
                             Konstants::URL_LOGIN,
                             Konstants::MAIL_LAST
                         )));
                     }
                    // dd('me');
                    return redirect()->back()->with('success', 'Status Changed Successfully');
                } else {
                    // dd('error');
                    // Session
                    return redirect()->back()->with('error', 'Please Something Went Wrong');
                    //  Session::flash('success', 'failed');
                }
            }
        } else {
            dd('its me');
        }
    }

    // public function store(Request $request, $cardUuid)
    // {
        
    //     // Check Auth
    //     $card = Card::where('uuid', $cardUuid)->first();
    //     if (!$card) {
    //         return  response(ResponseBuilder::genErrorRes(Konstants::MSG_404), Konstants::STATUS_NOT_FOUND);
    //     }
    //     //save to store
    //     $user = auth()->user();
    //     $cardlet = Cardlet::create(array_merge($request->only('code', 'comment', 'amount'), [
    //         'uuid' => Str::uuid(), 'name' => $card->name, 'type' => $card->type,
    //         'image' => Helpers::runImageUpload($request->file('image'), 'cardlets'), 'user_id' => $user->id
    //     ], Helpers::getTimeStamps()));

    //     // Notify Admins
    //     $admins = User::role(Konstants::ROLE_ADMIN)->get();
    //     foreach ($admins as $admin) {
    //         $admin->notify(new CardletNotification(Helpers::buildMailData(
    //             Konstants::MAIL_CARDLET_C_BODY($user),
    //             Konstants::MAIL_CARDLET_C_ACT,
    //             Konstants::URL_LOGIN,
    //             Konstants::MAIL_LAST
    //         )));
    //     }
    //     // Return Response
    //     // return response()->json(ResponseBuilder::buildRes(new Cardletresource($cardlet)), Konstants::STATUS_OK);
    // }


    public function cardletStatusChaneg(Request $request, $uuid)
    {   
        // Check For admin status
        if (!RoleManager::checkUserRole(Konstants::ROLE_ADMIN)) {
            return  response(ResponseBuilder::genErrorRes(Konstants::MSG_401), Konstants::STATUS_401);
        }
        //Check cradlet valididty
        $cardlet = Cardlet::where('uuid', $uuid)->first();
        if (!$cardlet) {
            return  response(ResponseBuilder::genErrorRes(Konstants::MSG_404), Konstants::STATUS_NOT_FOUND);
        }

        // Update cardlet status
        $owner = $cardlet->user;
        $cardlet->update(['status' => $request->status]);
        // notify Cardlet Owner
        $owner->notify(new CardletNotification(Helpers::buildMailData(
            Konstants::MAIL_CARDLET_U_BODY($cardlet),
            Konstants::MAIL_CARDLET_U_ACT,
            Konstants::URL_LOGIN,
            Konstants::MAIL_LAST
        )));

        // Return Response
        return response()->json(ResponseBuilder::buildRes(new Cardletresource($cardlet)), Konstants::STATUS_OK);
    }


    //
    public function updateCardlet(Request $request, $uuid)
    {
        $user = auth()->user();
        $code = $request->validate(['code' => 'required|string']);
        $cardlet = Cardlet::where('uuid', $uuid)->first();

        if (!$cardlet) {
            return response()->json(['message' => 'Cardlet not found'], 404);
        }

        if ($user->id != $cardlet->user_id) {
            return response()->json(['message' => 'Lacking Authorization'], 401);
        }

        $cardlet->update($code);
        return response()->json([
            'status' => 'successful',
            'type' => 'cardlet',
            'data' => new Cardletresource($cardlet)
        ], 200);
    }

    public function userCardlets()
    {
        $userId = auth()->id();
        $userCardlets = Cardlet::where('user_id', $userId)->with('images')->get()->map(function($cardlet){
            $cardlet->image = $cardlet->images();
            return $cardlet;
        });
        //  foreach ($userCardlets as $cardlet => $value) {
        //      $cardletImages = 
        //      # code...
        //  }
        // dd($userCardlets);
        // return response()->json(
            return Inertia::render('Transactions', ['cardlets' => $userCardlets]);
        //     [Cardletresource::collection($userCardlets)
        //         'status' => 'successfull',
        //         'type' => 'cardlet collection',
        //         'data' => Cardletresource::collection($userCardlets)
        //     ],
        //     200
        // );
    }


    public function index(Request $request)
    {
        if (!$this->checkAuthorization($request)) {
            return response()->json(['message' => 'Lacking authorization'], 401);
        }

        $allCardlets = Cardlet::all();
        return response()->json([
            'status' => 'successful',
            'type' => 'cardlet collection',
            'count' => count($allCardlets),
            'data' => CardletMainResource::collection($allCardlets)
        ], 200);
    }

    public function cardletsBySatus(Request $request)
    {
        if (!$this->checkAuthorization($request)) {
            return response()->json(['message' => 'Lacking authorization'], 401);
        }

        $allCardlets = Cardlet::where('status', $request->status)->get();
        return response()->json([
            'status' => 'successful',
            'type' => 'cardlet collection',
            'count' => count($allCardlets),
            'data' => CardletMainResource::collection($allCardlets)
        ], 200);
    }
}
