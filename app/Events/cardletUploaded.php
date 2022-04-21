<?php

namespace App\Events;

use App\Models\Cardlet;
use App\Models\User;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class cardletUploaded
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $cardlet;
    public $user;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(Cardlet $cardlet, User $user)
    {
        //
        $this->cardlet = $cardlet;
        $this->user = $user;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('channel-name');
    }
}
