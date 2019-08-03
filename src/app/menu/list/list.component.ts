import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  items;
  cat: string = '';
  toggle = {};
  constructor(private menuService: MenuService, private router: Router) { }

  ngOnInit() {
    this.items = this.menuService.getItems();
  }


  toggler(i:number){
    this.toggle[i] = !this.toggle[i];
    this.toggle[i] != this.toggle[i] ? 'true': 'false';
    this.router.navigate(['/menu'])
  }


  }


