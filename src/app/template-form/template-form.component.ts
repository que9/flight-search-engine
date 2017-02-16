import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  template: `
    <div>
      <h1>Template Driven</h1>
      <form (ngSubmit)="onSubmit()">
        <div>
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control" id="username" name="username" ngModel>
          </div>

          <div class="form-group">
            <label for="email">E-mail</label>
            <input type="text" class="form-control" name="email" ngModel id="email">
          </div>
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" name="passwor" ngModel>
        </div>
        <div class="radio">
          <label></label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  `,
  styles: []
})

export class TemplateFormComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    console.info("On Init...");
  }

  onSubmit(){
    console.info("onSubmit :)");
  }
}
