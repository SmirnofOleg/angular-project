import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { FormComponent } from "./form/form.component";
import { SignInComponent } from "./sign-in/sign-in.component";

import { Routes, RouterModule } from "@angular/router";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "form", component: FormComponent },
  { path: "signIn", component: SignInComponent }
];

@NgModule({
  declarations: [AppComponent, HomeComponent, FormComponent, SignInComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
