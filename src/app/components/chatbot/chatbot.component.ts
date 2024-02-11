import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Message } from 'src/app/models/message.model';
import { ChatService } from 'src/app/services/chat.service';




@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.scss'
})
export class ChatbotComponent {
  isOpen = false;
  loading = false;

  feedbackProvided = false;

  messages: Message[] = [];
  chatForm = new FormGroup({
    message: new FormControl('', [Validators.required]),
  });
  @ViewChild('scrollMe') private myScrollContainer: any;

  constructor(private chatService: ChatService) {
    this.messages.push({
      type: 'client',
      message: "Bonjour, je suis Eko bot. Comment puis-je vous aider?",
    });
  }

  openSupportPopup() {
    this.isOpen = !this.isOpen;
  }

  sendMessage() {
    const sentMessage = this.chatForm.value.message!;
    this.loading = true;
    this.messages.push({
      type: 'user',
      message: sentMessage,
    });
    this.chatForm.reset();
    this.scrollToBottom();
    this.chatService.sendMessage(sentMessage).subscribe((response: any) => {
      this.loading = false;
      console.log(response);
      this.messages.push({
        type: 'client',
        message: response.message,
        source_name: response.source_name,
        source_link: response.source_link,
      });
      this.scrollToBottom();
    });
  }

  scrollToBottom() {
    setTimeout(() => {
      try {
        this.myScrollContainer.nativeElement.scrollTop =
          this.myScrollContainer.nativeElement.scrollHeight + 500;
      } catch (err) {}
    }, 150);
  }

  like(message: Message) {
    message.liked = true;
  }

  dislike(message: Message) {
    message.liked = true;
  }
  
}