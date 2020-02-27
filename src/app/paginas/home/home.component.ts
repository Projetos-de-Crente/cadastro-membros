import { Component, OnInit } from "@angular/core";
import { TEMA, PARAMS } from "src/assets/particles.const";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  public tema = TEMA;
  public params = PARAMS;

  constructor() {}

  ngOnInit() {}
}
