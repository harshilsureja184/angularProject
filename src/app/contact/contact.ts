import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [ FormsModule ],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
  export class Contact {
    protected name = signal('Enter your name : ');
    protected email = "";
    
}
