import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) {}

  sendMessage(message: string) {
    // Simulate HTTP response with a hardcoded string/object
    //const fakeResponse = { message: 'haha it works' }; // Adjust the structure as needed
    //return of(fakeResponse);
    return this.http.post('/api/chat/', { message: message });
    // Original HTTP request commented out for reference
    // return this.http.post('http://localhost:3000/message', { prompt: message });
    //return this.http.post('http://localhost:5000/chat/', { message: message });

  }

  
}