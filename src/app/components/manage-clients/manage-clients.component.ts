import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';

import { Client } from '../../beans/client';

@Component({
  selector: 'app-manage-clients',
  templateUrl: './manage-clients.component.html',
  styleUrls: ['./manage-clients.component.scss']
})
export class ManageClientsComponent implements OnInit {

  clients: Client[] = null;

  constructor(
    private clientService: ClientService
  ) { }

  ngOnInit() {
    this.clientService
      .getAllClients()
      .subscribe(
        (data: Client[]) => {
          this.clients = data;
        });
  }

  clientAction() {

  }

  addClient() {

  }

}
