import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HideAndSeek';
  isHidden = false;
  logClickArray = [];

  hideParagraph()
  {
    this.logClicks();
    if (this.isHidden === false)  
    {
      this.isHidden = true;      
    }
    else
    {
      this.isHidden = false;
    }
  }

  logClicks()
  {
    this.logClickArray.push(this.logClickArray.length + 1);
  }

  fifthRowStyle(arrayIndex)
  {
    if (arrayIndex >= 5)
    {
      return "blue";
    }
  }

  fifthRowClass(arrayIndex)
  {
    if (arrayIndex >= 5)
    {
      return ".white";
    }
  }
}
