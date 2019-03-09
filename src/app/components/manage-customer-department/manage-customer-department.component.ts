import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material';

import { CustomerDepartmentService } from '../../services/customer-department.service';
import { Customer } from '../../beans/customer';

@Component({
  selector: 'app-manage-customer-department',
  templateUrl: './manage-customer-department.component.html',
  styleUrls: ['./manage-customer-department.component.scss']
})
export class ManageCustomerDepartmentComponent implements OnInit {

  listCustomer: Customer[] = null;
  dataSource = null;
  displayedColumnsCustomer: string[] = ['select', 'custName', 'action'];
  selection = new SelectionModel<Customer>(true, []);

  constructor(
    private custDeptService: CustomerDepartmentService
  ) { }

  ngOnInit() {
    this.custDeptService
    .getAllCustomers()
    .subscribe(
      (data: Customer[]) => {
        this.listCustomer = data;
        this.dataSource = new MatTableDataSource<Customer>(this.listCustomer);
    });
  }

  // addCustomer(){
  //   console.log("Inside add method");
  //   let customer: Customer = ['custName': 'New'];
  //   this.datasource.data.push(customer);
  //   this.dataSource.data = this.dataSource.data.slice();
  // }


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

}
