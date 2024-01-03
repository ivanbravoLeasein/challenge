var { expect } = require('chai');
var { Shop, Item } = require('../src/gilded_rose.js');

describe("Gilded Rose", function() {

  it("should reduce the quality and sellIn for a normal item", function() {
    const gildedRose = new Shop([ new Item("foo", 10, 20) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(9);
    expect(items[0].quality).to.equal(19);
  });

  it("should increase the quality of Aged Brie as it gets older", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 2, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(1);
  });

  it("should not increase the quality of an item over 50", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 2, 50) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(50);
  });

  it("should not decrease the quality and sellIn of Sulfuras", function() {
    const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 0, 80) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(0);
    expect(items[0].quality).to.equal(80);
  });

  it("should increase the quality of Backstage passes by 2 when there are 10 days or less", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(22);
  });

  it("should increase the quality of Backstage passes by 3 when there are 5 days or less", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(23);
  });

  it("should drop the quality of Backstage passes to 0 after the concert", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  });

  it("should degrade the quality of Conjured items twice as fast", function() {
    const gildedRose = new Shop([ new Item("Conjured Mana Cake", 3, 6) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(4);
  });

});
