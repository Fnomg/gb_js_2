"use strict"

const goods = [
  { id: 0, title: 'Shirt', price: 150 },
  { id: 1, title: 'Socks', price: 50 },
  { id: 2, title: 'Jacket', price: 350 },
  { id: 3, title: 'Shoes', price: 250 },
  { id: 4, title: 'Shoes white' , price: 750},
];


class ProductsList {
  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this.goodsObjects = [];

    this.fetchGoods();
    this.render();
  }

  fetchGoods() {
    this.goods = [
      { id: 0, title: 'Shirt', price: 150 },
      { id: 1, title: 'Socks', price: 50 },
      { id: 2, title: 'Jacket', price: 350 },
      { id: 3, title: 'Shoes', price: 250 },
      { id: 4, title: 'Shoes white' , price: 750},
    ];
  }

  render() {
    let block = document.querySelector(this.container);

    for (const good of this.goods) {
      const object = new ProductItem(good);
      this.goodsObjects.push(object)

      block.insertAdjacentHTML('afterbegin', object.getHTMLString())
    }

    block.insertAdjacentHTML('afterend', `Итого ${this.goodsObjects.reduce((acc, cur)=>acc + cur.price,0)}`)


  }

};

class ProductItem {
  constructor(item, img = "https://via.placeholder.com/140x80") {
    this.id = item.id;
    this.title = item.title;
    this.price = item.price;
    this.img = img;
  }

  getHTMLString() {
    return `<div class="good">
            <img src="${this.img}">
            <div class="descr">
              <h3>${this.title}</h3>
              <p>${this.price}</p>
            </div>
          </div>`;
  }
};

const catalog = new ProductsList('.goods-list');

class ShopingCart {
  constructor() {
  }
}

class ShoppingCartElement {
  constructor() {
  }
}





// const renderGoodsItem = (item, img = "https://via.placeholder.com/140x80") => {
//   return `<div class="good">
//             <img src="${img}" >
//             <h3>${item.title}</h3>
//             <p>${item.price}</p>
//           </div>`;
// };
//
// const renderGoodsList = (list) => {
//   let goodsList = list.map(item => renderGoodsItem(item)).join('');
//   document.querySelector('.goods-list').insertAdjacentHTML('beforeend', goodsList)
// }
//
//
// renderGoodsList(goods)



