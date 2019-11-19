import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "IT255-DZ05";

  public smestajs = [
    {
      title: "001",
      price: 25
    },
    {
      title: "002",
      price: 30
    },
    {
      title: "003",
      price: 40
    },
    {
      title: "004",
      price: 50
    }
  ];

  public changeOrder(): void {
    this.smestajs = this.shuffleArray(this.smestajs);
  }

  public shuffleArray = function(array) {
    var m = array.length,
      t,
      i;

    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  };
}
