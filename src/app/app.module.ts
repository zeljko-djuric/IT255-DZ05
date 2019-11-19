import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HotelComponent } from "./components/hotel/hotel.component";
import { FilterPipePipe } from "./helpers/filter-pipe.pipe";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, HotelComponent, FilterPipePipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
