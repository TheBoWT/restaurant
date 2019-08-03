import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
user;
items: any;
nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numberOfItems: number;
total: number;

constructor(private router: Router, public authService: AuthService) {

   }




  ngOnInit() {
    this.authService.user.subscribe(user=>{
      this.user = user;
    })

    this.populateCart();
}

onUpdateQty(event, i: number){
  const val = event.target.value;
  if(val.match(/^\d+$/)){
     this.items[i].qty = +val;
     localStorage.setItem('cart', JSON.stringify(this.items));

    this.populateCart();
  }



}

populateCart(){
  if(JSON.parse(localStorage.getItem('cart'))){
    this.items = JSON.parse(localStorage.getItem('cart'));

    this.numberOfItems = 0;
    this.total = 0;
    for (let i = 0; i < this.items.length; i++) {
      this.numberOfItems +=  this.items[i].qty;
      this.total += this.items[i].price * this.items[i].qty;
    }
  }


}
onRemoveItem(i){
  this.items.splice(i, 1);
  localStorage.setItem('cart', JSON.stringify(this.items));
  this.populateCart();

  }


}



