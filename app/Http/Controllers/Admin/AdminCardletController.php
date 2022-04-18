<?php

namespace App\Http\Controllers\Admin;

use App\Helpers\Helpers;
use App\Http\Controllers\Controller;
use App\Models\Cardlet;
use App\Models\Konstants;
use App\Models\User;
use App\Notifications\CardletNotification;
use Illuminate\Http\Request;
use Inertia\Inertia;


class AdminCardletController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $status = $request->query('status');
        $allCardlets = [];
        if($status){
            $allCardlets = Cardlet::Where('status', $status)->get();
        } else {
            $allCardlets = Cardlet::orderBy('created_at','desc')->with('images')->get();
        }
        return Inertia::render('Admin/Cardlets/Index', ['cardlets' => $allCardlets]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        
        $data = Cardlet::with('images')->where('id', $id)->first();
        $user = User::where('id', $data->user_id)->with('bankDetails')->first();
        $data->user = $user;
        return Inertia::render('Admin/Cardlets/Show', ['data' => $data]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $uuid)
    {
        //
        $cardlet = Cardlet::where('uuid', $uuid)->first();
        if (!$cardlet) {
            return redirect()->back()->with('error', 'card doesnt exist');
        }

        // Update cardlet status
        $owner = $cardlet->user;
        $cardlet->update(['status' => $request->status]);
        // notify Cardlet Owner
        $owner->notify(new CardletNotification(Helpers::buildMailData(
            'Giftcard Status',
            Konstants::MAIL_CARDLET_U_BODY($cardlet),
            Konstants::MAIL_CARDLET_U_ACT,
            Konstants::URL_LOGIN,
            Konstants::MAIL_LAST
        )));
        // Return Response
        return redirect()->back()->with('success', 'Status Changed Successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
