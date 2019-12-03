import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-form",
  template: `
    <h3>form</h3>
  `, // это лишнее, раз есть templateUrl
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
