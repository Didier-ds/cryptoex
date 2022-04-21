<?php

namespace App\Http\Controllers;

use App\Events\cardletUploaded;
use App\Helpers\Helpers;
use App\Helpers\ResponseBuilder;
use App\Http\Requests\CardletImageRequest;
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
use Notification;
// use Illuminate\Support\Facades\Session;
// use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;
use Inertia\Inertia;

class CardletController extends Controller
{
    public function store(CardletRequest $request, $cardUuid)
    {
        $card = Card::where('uuid', $cardUuid)->first();
        $user = auth()->user();
         $newCardlet = Cardlet::create([
             'uuid' => Str::uuid(), 
             'name' => $card->name,
             'comment' => $request->comment,
             'type' => $card->type,
             'rate' => $card->rate,
             'user_id' => auth()->id(),
             'amount' => $request->amount
         ]);
        if($request -> hasFile('images')) {
             $files = $request->file('images');
                foreach($files as $file){
                    $this->uploadCardletImages($file, $newCardlet->id);
                }
                // $admins = User::role(Konstants::ROLE_ADMIN)->get();
                // Notification::send($admins, new CardletNotification(Helpers::buildMailData(
                //          'Giftcard Status',
                //          Konstants::MAIL_CARDLET_C_BODY($user),
                //          Konstants::MAIL_CARDLET_C_ACT,
                //          Konstants::URL_LOGIN,
                //          Konstants::MAIL_LAST
                // )));
                event(new cardletUploaded($newCardlet, $user));
                // foreach ($admins as $admin) {
                    // $admin->notify(new CardletNotification(Helpers::buildMailData(
                    //     'Giftcard Status',
                    //     Konstants::MAIL_CARDLET_C_BODY($user),
                    //     Konstants::MAIL_CARDLET_C_ACT,
                    //     Konstants::URL_LOGIN,
                    //     Konstants::MAIL_LAST
                    // )));
                // }
                return redirect()->back()->with('success', 'Status Changed Successfully');
                } else {
                     return redirect()->back()->with('error', 'Please Something Went Wrong');
     }
    }

    
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
        $userCardlets = Cardlet::where('user_id', $userId)->orderBy('created_at','desc')->with('images')->get()->map(function($cardlet){
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

    public function uploadCardletImages($img, int $cardletId) {
        $filename = Helpers::runImageUpload($img, 'cardlets');
        CardletImage::create([
            'cardlet_id' => $cardletId,
            'filename' => $filename
        ]);
        
    }
}
