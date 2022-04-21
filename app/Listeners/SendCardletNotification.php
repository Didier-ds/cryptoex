<?php

namespace App\Listeners;

use App\Events\cardletUploaded;
use App\Helpers\Helpers;
use App\Models\Konstants;
use App\Models\User;
use App\Notifications\CardletNotification;
// use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Notification;

class SendCardletNotification
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  \App\Events\cardletUploaded  $event
     * @return void
     */
    public function handle(cardletUploaded $event)
    {
        //
        $user = auth()->user();
        $admins = User::role(Konstants::ROLE_ADMIN)->get();
        Notification::send($admins, new CardletNotification(Helpers::buildMailData(
            'Giftcard Status',
            Konstants::MAIL_CARDLET_C_BODY($event->user, $event->cardlet),
            Konstants::MAIL_CARDLET_C_ACT,
            Konstants::URL_LOGIN,
            Konstants::MAIL_LAST
        )));
    }
}
