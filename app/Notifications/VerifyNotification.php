<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class VerifyNotification extends Notification
{
    use Queueable;

    private $vetData;
    public function __construct($vetData)
    {
        $this->vetData = $vetData;
    }

    public function via($notifiable)
    {
        return ['mail'];
    }

    public function toMail($notifiable)
    {
        return (new MailMessage)

            ->line($this->vetData['body'])
            ->action($this->vetData['action'], $this->vetData['url'])
            ->line($this->vetData['last']);
    }


    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
