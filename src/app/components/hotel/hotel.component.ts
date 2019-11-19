import { Component, OnInit, Input } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-hotel",
  templateUrl: "./hotel.component.html",
  styleUrls: ["./hotel.component.css"]
})
export class HotelComponent implements OnInit {
  @Input() hotel: any;

  constructor(private _sanitizer: DomSanitizer) {}

  ngOnInit() {}
}
