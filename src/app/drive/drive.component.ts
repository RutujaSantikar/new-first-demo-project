import { Component, OnInit } from '@angular/core';
import { DriveService } from './drive.service';
import { MatTableDataSource } from '@angular/material/table';
import { GlobalVarComponent } from '../global-var/global-var.component';
@Component({
  selector: 'app-drive',
  templateUrl: './drive.component.html',
  styleUrls: ['./drive.component.scss']
})



export class DriveComponent implements OnInit {

 cusId = GlobalVarComponent.cusId;
 trpId = GlobalVarComponent.trpId;


 displayedColumns:string[]=['cusId','trpId','trpStartTime',
 'trpEndTime','trpStartLocation','trpEndLocation','trpStatus',
 'drvId', 'trpCreatedAt','drvName', 'drvMobile','cusFullName', 'cusMobile'];
 //  dataSource:any;
 public dataSource = new MatTableDataSource<any>();
 constructor(private driveService : DriveService) { }


 ngOnInit(): void {


      this.driveService.getDriveData(this.cusId,this.trpId)
      .subscribe((response : any) =>{
      console.log(response);
      this.dataSource= new MatTableDataSource(response);
    })
   }

}
