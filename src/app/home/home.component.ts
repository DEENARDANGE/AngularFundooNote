import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  abc = false;
  def = false;
  constructor(private router: Router) { }

  ngOnInit() {

  }

  hideButton() {

    this.abc = !(this.abc);

    this.def = (this.abc);
  }

  navigateNotes()
  {
    this.router.navigate(['home/viewnotes']);
  }

  navigateArchive()
  {
    this.router.navigate(['home/archivenote']);
  }
  navigateTrash()
  {
    this.router.navigate(['home/trashednote']);
  }
}
