<?php

namespace App\Http\Controllers;

use App\Helpers\Helpers;
use App\Http\Requests\StorePaymentProofRequest;
use App\Models\BtcTransferProof;
use App\Models\BtcVendor;
use App\Models\Konstants;
use App\Models\User;
use App\Notifications\CardletNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class BtcTransferProofController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }


    /**
     * Display a listing of the resource to admin.
     *
     * @return \Illuminate\Http\Response
     */
    public function admin_index(Request $request)
    {
        //
        $status = $request->query('status');
        $allProofs = [];
        if($status){
            $allProofs = BtcTransferProof::Where('status', $status)->orderBy('created_at','desc')->get();
        } else {
            $allProofs = BtcTransferProof::orderBy('created_at','desc')->get();
        }
        return Inertia::render('Admin/BtcTransferProof/Index', ['proofs' => $allProofs]);


    }
    
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        $btcVendor = BtcVendor::all();
        return Inertia::render('CryptoTrade', ['vendors' => $btcVendor]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePaymentProofRequest $request, $vendor_uuid)
    {
        //
        $vendor = BtcVendor::where('uuid', $vendor_uuid)->first();
        $filename = Helpers::runImageUpload($request->image, 'payment_proofs');
        $user = auth()->user();
        BtcTransferProof::create([
            'uuid' => Str::uuid(),
            'vendor_name' => $vendor->name,
            'rate' => $vendor->rate,
            'amount' => $request->amount,
            'filename' => $filename,
            'user_id' => auth()->id(),
        ]);
        $admins = User::role(Konstants::ROLE_ADMIN)->get();
                foreach ($admins as $admin) {
                    $admin->notify(new CardletNotification(Helpers::buildMailData(
                        'Bitcoin Proof Status',
                        Konstants::MAIL_BTC_PROOF_C_BODY($user),
                        Konstants::MAIL_BTC_PROOF_C_ACT,
                        Konstants::URL_LOGIN,
                        Konstants::MAIL_LAST
                    )));
                }
        return redirect()->back()->with('success', 'Proof Uploaded Successfully');

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
    }


    /**
     * Display a listing of the resource to admin.
     *
     * @return \Illuminate\Http\Response
     */
    public function admin_show($uuid)
    {
        //
        $data = BtcTransferProof::where('uuid', $uuid)->first();
        $user = User::where('id', $data->user_id)->with('bankDetails')->first();
        $data->user = $user;
        return Inertia::render('Admin/BtcTransferProof/Show', ['data' => $data]);

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
         //
         $proof = BtcTransferProof::where('uuid', $uuid)->first();
         if (!$proof) {
             return redirect()->back()->with('error', 'proof doesnt exist');
         }
 
         // Update cardlet status
         $owner = $proof->user;
         $proof->update(['status' => $request->status]);
         // notify Cardlet Owner
         $owner->notify(new CardletNotification(Helpers::buildMailData(
             'Bitcoin Transfer Status',
             Konstants::MAIL_BTC_PROOF_C_BODY($owner),
            Konstants::MAIL_BTC_PROOF_C_ACT,
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
