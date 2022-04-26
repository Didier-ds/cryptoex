<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\BtcTransferProof;
use App\Models\Cardlet;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminDashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pendingProofs = BtcTransferProof::Where('status', 'pending')->orderBy('created_at','desc')->get();
        $pendingCardlets = Cardlet::Where('status', 'pending')->orderBy('created_at','desc')->get();
        // dd(count($pendingCardlets));
        $recentCardlets = Cardlet::orderBy('created_at','desc')->paginate(5);
        $recentProofs = BtcTransferProof::orderBy('created_at','desc')->paginate(5);

        return Inertia::render('Admin/Dashboard', ['pending-proofs' => count($pendingProofs), 'pending-cardlets' => count($pendingCardlets),'recent-cardlets' => $recentCardlets, 'recent-proofs' => $recentProofs]);
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
    public function update(Request $request, $id)
    {
        //
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
