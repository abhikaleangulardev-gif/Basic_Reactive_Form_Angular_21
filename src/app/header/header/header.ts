import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {

}
