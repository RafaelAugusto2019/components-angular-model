import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-menu',
  templateUrl: './progress-menu.component.html',
  styleUrls: ['./progress-menu.component.scss']
})
export class ProgressMenuComponent implements OnInit {
 
  @Input() itensMenu :string;

  itens : string[];

  constructor() { }

  ngOnInit(): void {
    this.itens = this.itensMenu.split(",");
    document.getElementById("boxProgressMenu").style.gridTemplateColumns = `repeat(${this.itens.length}, auto)`;

  }

}
