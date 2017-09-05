import {Component, Inject} from '@angular/core';
import {MdDialogRef, MdGridListModule, MD_DIALOG_DATA, MdDialog} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dialog: MdDialog) {}

  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        animal: 'panda'
      }
    });
  }
}

export class DialogDataExampleDialog {
  constructor(@Inject(MD_DIALOG_DATA) public data: any) {
  }
}

