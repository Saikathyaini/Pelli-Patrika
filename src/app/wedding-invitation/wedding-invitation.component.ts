import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export interface WeddingEvent {
  day: string; month: string; name: string;
  time: string; venue: string; colorClass: string;
}

@Component({
  selector: 'app-wedding-invitation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wedding-invitation.component.html',
  styleUrls: ['./wedding-invitation.component.css']
})
export class WeddingInvitationComponent {

  groom = {
    shortName: 'Chi. Kartick',
    displayName: 'Kartick',
    father: 'Late Sri Vanamali Venkata Bhaskara Rao',
    mother: 'Smt. Sarada',
    grandfather: 'Late Vanamali Buchi Ramayya Vajillu',
    village: 'Satyavaram Agraharam'
  };

  bride = {
    shortName: 'Chi.La.Sow. Kameswara Sai Kathyaini',
    displayName: 'Kathyaini',
    father: 'Sri Mavuduru Bhaskara Rao Sharma',
    mother: 'Smt. Sandhyadevi',
    grandfather: 'Late Sri Anantha Appala Narasayya (Siddhanti)',
    grandmother: 'Late Smt. Subbalakshmi'
  };

  muhurtam = {
    time: '12:18 AM',
    date: 'Sunday, May 3, 2026',
    lagnam: 'Anuradha Nakshatrayuta Makara Lagnam',
    note: 'While the auspicious date is Sunday May 3rd, the Muhurtam at 12:18 AM technically falls at the very beginning of Monday May 4th.'
  };

  events: WeddingEvent[] = [
    {
      day: '3', month: 'MAY',
      name: 'Wedding Ceremony',
      time: 'Sumuhurtam: 12:18 AM (midnight, into May 4th)',
      venue: 'Suryateja Kalyanamandapam, Srikakulam',
      colorClass: 'ev-lotus'
    },
    {
      day: '3', month: 'MAY',
      name: 'Reception & Celebration',
      time: 'Evening onwards',
      venue: 'Suryateja Kalyanamandapam, Srikakulam',
      colorClass: 'ev-gold'
    }
  ];

  venue = {
    name: 'Suryateja Kalyanamandapam',
    address: 'Opposite Simhadwaram, Arasavilli, Srikakulam, Andhra Pradesh',
    mapsLink: 'https://maps.google.com/?q=Suryateja+Kalyanamandapam+Srikakulam'
  };

  mapsEmbedUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.mapsEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://maps.google.com/maps?q=Arasavilli+Srikakulam+Andhra+Pradesh&output=embed'
    );
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
