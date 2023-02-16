import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  displayedColumns: string[] = ['no', 'name', 'weight', 'symbol' , 'edit'];


    gasData = [

        {no: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
        {no: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
        {no: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
        {no: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
        {no: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
        {no: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
        {no: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
        {no: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
        {no: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
        {no: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
        {no: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
        {no: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},


    ]
    dataSource = new MatTableDataSource<any>(this.gasData);




  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogExampleComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });





}
}
