import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material';

import { ApplicationService } from '../../services/application.service';
import { Application } from '../../beans/application';

@Component({
  selector: 'app-registered-applications',
  templateUrl: './registered-applications.component.html',
  styleUrls: ['./registered-applications.component.scss']
})
export class RegisteredApplicationsComponent implements OnInit {

  listApplication: Application[] = null;
  dataSource = null;
  displayedColumnsRegisteredApps: string[] = ['select', 'appName', 'custName', 'deptName', 'compliance'];
  selection = new SelectionModel<Application>(true, []);

  constructor(
    private applicationService: ApplicationService) { }

  ngOnInit() {
    this.applicationService
      .getAllRegisteredApplications()
      .subscribe(
        (data: Application[]) => {
          this.listApplication = data;
          this.dataSource = new MatTableDataSource<Application>(this.listApplication);
        });

  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected == numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  registerApplications                                                                                                                                                    (){
    console.log("Register application");
  }

}
