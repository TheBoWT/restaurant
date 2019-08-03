import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MenuService } from '../menu.service';
import { Item } from 'src/app/item.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  item:any;

  constructor(private route: ActivatedRoute, private menuService: MenuService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params)=>{
    this.item = this.menuService.getItem(params['cat'], params['item']);
   });
 }

  onAddtoCart(item: Item){


    if(item){
      if(localStorage.getItem('cart') == null){
        var cart:any = [];
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));
      } else{
        let cart:any  = JSON.parse(localStorage.getItem('cart'));

        let index = -1;
        for (let i = 0; i < cart.length; i++) {
          let storedItem = cart[i];
          if(storedItem.id == item.id){
            index = i;
          }
        }
        if(index == -1){
          cart.push(item);
          localStorage.setItem('cart', JSON.stringify(cart));
        }else{
          let storedItem = cart[index];
          storedItem.qty +=1;
          cart[index] = storedItem;
          localStorage.setItem('cart', JSON.stringify(cart));
        }
      }
    }

  }

}
