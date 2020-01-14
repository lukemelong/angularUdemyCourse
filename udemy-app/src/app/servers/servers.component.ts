import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created"
  serverName = ''
  serverCreated = false
  servers = ['Test Server', 'Test Server 2']

  /* Assignment 3 */
  tunaVisible = false;
  buttonClicks = [1234]
  moreThanFive = false;

  onButtonClick(){
    this.tunaVisible = !this.tunaVisible
    this.buttonClicks.push(Date.now());
    if(this.buttonClicks.length >= 5){ this.moreThanFive = true }
  }

  constructor() { 
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;
  }

  onUpdateServerName(event: any){
    this.serverName = event.target.value
  }
}
