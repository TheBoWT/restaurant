import { Injectable } from '@angular/core';
import { Item } from '../item.model';
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuItems = [
    {
      categories: {name: 'Classic'},
      items: [
        { id:1 , name: 'Burger', qty: 1, price: 5, imgPath:'https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246__340.jpg', desc: 'burrrrger', ingredients:['one', 'two', 'three']},
        { id:2, name: 'Taco', qty: 1, price: 3.5, imgPath:'https://cdn.pixabay.com/photo/2017/08/08/08/00/taco-2610649_960_720.jpg' , desc: 'yes Taco!', ingredients:['one', 'two', 'three', 'four']},
        { id:3, name: 'Burito', qty: 1, price: 2.5, imgPath:'https://cdn.pixabay.com/photo/2019/04/14/03/23/burrito-4126116_960_720.jpg', desc: 'Burrito the way to go!', ingredients:['one', 'two', 'three', 'four', 'five']},
      ],
     },

   {
    categories: {name: 'Favourites'},
    items: [
      { id: 4, name: 'Sandwitch',  qty: 1, price:9,  imgPath: 'https://live.staticflickr.com/7804/40526231993_b1b723523e_b.jpg', desc:'sand...', ingredients:['one', 'two', 'three']},
      { id: 5, name: 'Chiptole',  qty: 1, price: 2, imgPath: 'https://live.staticflickr.com/4032/4329286464_8340c9626d_b.jpg', desc:'Chipotle!!', ingredients:['one', 'two', 'three', 'four']},
      { id: 6, name: 'Fold-Over',  qty: 1, price:1.5, imgPath: 'http://2.bp.blogspot.com/-3qcv2ArOYLM/T58zr9qlb0I/AAAAAAAAB_k/81iqsbyVHzc/s400/chicken+foldover.jpg', desc:'South Africa!', ingredients:['one', 'two', 'three', 'five']},
    ],
   },

   {
    categories: {name: 'Gargantum'},
    items: [
      { id:7, name: 'Macdonalds',  qty: 1, price: 10, imgPath: 'http://2.bp.blogspot.com/-3qcv2ArOYLM/T58zr9qlb0I/AAAAAAAAB_k/81iqsbyVHzc/s400/chicken+foldover.jpg', desc:'Im lovin it', ingredients:['one', 'two', 'three']},
      { id:8, name: 'KFC',  qty: 1, price: 5, imgPath:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGZMYKafoGdWdFchXHZh7CN19MgJ2MAzmzF7lnyltEZdcFwPhEmg', desc: 'its finger licking good', ingredients:['one', 'two', 'three', 'four']},
      { id:9, name: 'Teco Bell',  qty: 1, price:3, imgPath:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrm1mMS5Br6xH08LckVNmyQe9nJuwtrZXRZTECVS7RgteYcr11yQ', desc: 'I dont know!', ingredients:['one', 'two',  'three', 'five']},
    ],
   },

  ];

  constructor() { }


  getItems(){
  return this.menuItems;
}

 getItem(cat,itemName)  {
  const item =  this.menuItems.find(menu=>{
    return menu.categories.name == cat;
  }).items.find(item=>{
    return item.name == itemName;
  })
  return item;
}


}

