import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { StarterComponent } from "./starter/starter.component";
import { StarterHeaderComponent } from "./starter/starter-header/starter-header.component";
import { StarterLeftSideComponent } from "./starter/starter-left-side/starter-left-side.component";
import { StarterContentComponent } from "./starter/starter-content/starter-content.component";

@NgModule({
  declarations: [
    AppComponent,
    StarterComponent,
    StarterHeaderComponent,
    StarterLeftSideComponent,
    StarterContentComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
