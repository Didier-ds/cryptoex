<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class CardletNotification extends Notification
{
    use Queueable;

    private $noticeData;


    public function __construct($noticeData)
    {
        $this->noticeData = $noticeData;
    }

    public function via($notifiable)
    {
        return ['mail'];
    }


    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->line($this->noticeData['body'])
            ->action($this->noticeData['action'], $this->noticeData['url'])
            ->line($this->noticeData['last']);
    }


    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
