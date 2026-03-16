import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeddingInvitationComponent } from './wedding-invitation/wedding-invitation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WeddingInvitationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wedding-invitation';
}
