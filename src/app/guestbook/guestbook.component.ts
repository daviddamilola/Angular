import { Component } from '@angular/core';
import { Message } from '../message';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-guestbook',
  standalone: false,
  templateUrl: './guestbook.component.html',
  styleUrl: './guestbook.component.css'
})
export class GuestbookComponent {
  messages: Message[] = [];
  currentAuthor = 'Tom';
  currentMessage = '';

  constructor(private readonly messagesService: MessagesService) {

  }

  updateMessages(){
    this.messagesService.getMessages().subscribe(messages => {
      this.messages = messages
    })
  }

  sendMessage() {
    if(this.currentAuthor != '' && this.currentMessage != ''){
      this.messages.push({
        author: this.currentAuthor,
        message: this.currentMessage,
      })
      this.currentMessage = ''
    }
  }

  ngOnInit():void {
    this.updateMessages()
  }
}
