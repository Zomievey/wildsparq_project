import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.scss"],
})
export class HomepageComponent implements OnInit {
  title: string = "wildsparq-project";
  @Output() navClicked = new EventEmitter();

  constructor() {}

  ngOnInit(): void { }
  
  onClick() {
    this.navClicked.emit();
    
  }
}
