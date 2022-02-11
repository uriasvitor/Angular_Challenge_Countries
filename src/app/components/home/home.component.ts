import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
