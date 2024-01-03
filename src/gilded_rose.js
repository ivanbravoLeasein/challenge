class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    for (let item of this.items) {
      this.updateItemQuality(item);
    }

    return this.items;
  }

  updateItemQuality(item) {
    if (item.name === 'Sulfuras, Hand of Ragnaros') {
      return;
    }

    let degradationRate = this.isConjured(item) ? 2 : 1;

    if (item.name === 'Aged Brie') {
      this.increaseQuality(item);
      item.sellIn--;
      if (item.sellIn < 0) {
        this.increaseQuality(item);
      }
    } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
      this.increaseQuality(item);
      if (item.sellIn < 11) this.increaseQuality(item);
      if (item.sellIn < 6) this.increaseQuality(item);
      item.sellIn--;
      if (item.sellIn < 0) item.quality = 0;
    } else {
      this.decreaseQuality(item, degradationRate);
      item.sellIn--;
      if (item.sellIn < 0) {
        this.decreaseQuality(item, degradationRate);
      }
    }
  }

  increaseQuality(item) {
    if (item.quality < 50) {
      item.quality++;
    }
  }

  decreaseQuality(item, rate) {
    for (let i = 0; i < rate; i++) {
      if (item.quality > 0) {
        item.quality--;
      }
    }
  }

  isConjured(item) {
    return item.name.startsWith('Conjured');
  }
}
module.exports = {
  Item,
  Shop
};




