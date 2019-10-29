import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public data = this.route.snapshot.data.header;

  constructor(private router: Router, private route: ActivatedRoute) { }

  public goTo() {
    this.router.navigate([...this.data.url]);
  }

}
