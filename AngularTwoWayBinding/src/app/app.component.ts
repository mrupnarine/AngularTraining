import { Component } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTwoWayBinding';
  username = '';

  isUserNameEmpty()
  {
    if (this.username != '' || this.username.length > 0)
    {
        return false;
    }
    else
    return true;
  }

  setStringEmpty()
  {
    this.username = '';
  }
}
