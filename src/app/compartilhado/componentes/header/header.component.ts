import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public data = this.route.snapshot.data.header;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  public goTo() {
    this.router.navigate([...this.data.url]);
  }

}
