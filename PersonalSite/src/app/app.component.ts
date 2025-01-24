import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'PersonalSite';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['/home']);
  }
}


