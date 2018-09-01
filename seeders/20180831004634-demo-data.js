"use strict";

module.exports = {
  up: queryInterface => {
    queryInterface.bulkInsert(
      "Categories",
      [
        {
          id: "1",
          name: "Pants"
        },
        {
          id: "2",
          name: "Shirts"
        },
        {
          id: "3",
          name: "Accessories"
        },
        {
          id: "4",
          name: "Hats"
        },
        {
          id: "5",
          name: "Shoes"
        },
        {
          id: "6",
          name: "Bags"
        },
        {
          id: "7",
          name: "Dresses"
        }
      ],
      {}
    );

    queryInterface.bulkInsert(
      "Users",
      [
        {
          id: "1",
          username: "Frank Gerard"
        },
        {
          id: "2",
          username: "Alex Baxley"
        },
        {
          id: "3",
          username: "Janelle Joplin"
        },
        {
          id: "4",
          username: "James Delgado"
        }
      ],
      {}
    );

    queryInterface.bulkInsert(
      "Posts",
      [
        {
          id: "1",
          title: "Ballin on a budget",
          body: "I found this shirt at Goodwill. I saved so much money. I'm the best shopper ever",
          photoUrl: "Img/style1.jpg",
          UserId: "1"
        },
        {
          id: "2",
          title: "Fall Fresh",
          body: "My skate shop Wheel Bairo just got in these new hoodies and beanies. Stop by on Main Street!",
          photoUrl: "Img/style2.jpg",
          UserId: "2"
        },
        {
          id: "3",
          title: "Designer Life",
          body: "I love the style clash of business and casual. The jacket used to be my little brothers!",
          photoUrl: "Img/style3.jpg",
          UserId: "3"
        },
        {
          id: "4",
          title: "Simplicity is a virtue",
          body:
            "Some people say wearing your shirt around your waste is lame, but anyone who thinks that is just a hater. Convenience over err'ything.",
          photoUrl: "Img/style4.jpg",
          UserId: "4"
        },
        {
          id: "5",
          title: "Flowers not included",
          body: "Nicki Minaj 'Chun Li' haircut + brand new boots = a happy me",
          photoUrl: "Img/style5.jpg",
          UserId: "3"
        }
      ],
      {}
    );

    return queryInterface.bulkInsert(
      "Items",
      [
        {
          brand: "J. Crew",
          name: "Sutton straight-fit broken-in chino",
          CategoryId: 1,
          purchaseUrl:
            "https://factory.jcrew.com/p/mens-clothing/pants/straight/sutton-straightfit-brokenin-chino/38648",
          photoUrl: "Img/pants1.jpg",
          price: 24.99,
          PostId: "1"
        },
        {
          brand: "Bella",
          name: "Canvas Unisex Jersey 3/4 Sleeve Baseball Tee",
          CategoryId: 2,
          purchaseUrl: "https://www.amazon.com/Bella-Canvas-Unisex-Jersey-Baseball/dp/B014WBLVVE?th=1",
          photoUrl: "Img/shirts1.jpg",
          price: 14.99,
          PostId: "1"
        },
        {
          brand: "Loaded Boards",
          name: "Tarab Longboard",
          CategoryId: 3,
          purchaseUrl: "https://loadedboards.com/tarab-longboard-skateboard/",
          photoUrl: "Img/accessories1.jpg",
          price: 426,
          PostId: "2"
        },
        {
          brand: "FLUT Co.",
          name: "Wave Beanie",
          CategoryId: 4,
          price: 350,
          purchaseUrl: "https://www.flutstore.com/product-page/wave-beanie-1",
          photoUrl: "Img/hats1.jpg",
          PostId: "2"
        },
        {
          brand: "Adidas",
          name: "Adidas Originals Men's Trefoil Crew Sweatshirt",
          CategoryId: 2,
          purchaseUrl: "https://www.amazon.com/adidas-Originals-Outerwear-Trefoil-Sweatshirt/dp/B01N2MCC0P",
          photoUrl: "Img/shirts2.jpg",
          price: 24.99,
          PostId: "2"
        },
        {
          brand: "Stylle",
          name: "Round Oversized Sunglasses",
          CategoryId: 3,
          purchaseUrl: "https://www.amazon.com/Shiny-White-Frame-Grey-Black/dp/B01H2E5VO6",
          photoUrl: "Img/accessories6.jpg",
          price: 10.99,
          PostId: "5"
        },
        {
          brand: "Aurora",
          name: "Women's Metal Retro Casual Round Dial Quartz Analog Wrist Watch with Leather Band",
          CategoryId: 3,
          purchaseUrl: "https://www.amazon.com/Aurora-Womens-Watch-Leather-Band-Rose/dp/B01DSU4BEY",
          photoUrl: "Img/accessories5.jpg",
          price: 18.99,
          PostId: "5"
        },
        {
          brand: "Zara",
          name: "Buttoned jeans Z1975",
          CategoryId: 1,
          price: 49.9,
          purchaseUrl: "https://www.zara.com/us/en/buttoned-jeans-z1975-p06147160.html",
          photoUrl: "Img/pants2.jpg",
          PostId: "5"
        },
        {
          brand: "Jessica Simpson",
          name: "Teddi Ankle Boot (Model JS-TEDDI)",
          CategoryId: 5,
          price: 74.04,
          purchaseUrl: "https://  www.ebay.com/i/232909889932",
          photoUrl: "Img/shoes1.jpg",
          PostId: "5"
        },
        {
          brand: "Janey Jane",
          name: "Convertible Crossbody Backpack",
          CategoryId: 6,
          price: 31.99,
          purchaseUrl:
            "https://www.ebags.com/hproduct/ampere-creations/janey-jane-convertible-crossbody-backpack/295419",
          photoUrl: "Img/bags1.jpg",
          PostId: "5"
        },
        {
          brand: "Luulla",
          name: "Flowers Print Bodycon Tank Dress Flared Skirt",
          CategoryId: 7,
          price: 89,
          purchaseUrl:
            "https://www.luulla.com/product/248222/bright-colors-flowers-print-bodycon-tank-dress-flared-skirt-grxjy560988",
          photoUrl: "Img/dress1.jpg",
          PostId: "3"
        },
        {
          brand: "Khanomak",
          name: "Long Sleeve Zipper Detail Rib Fitted Jacket",
          CategoryId: 2,
          price: 25,
          purchaseUrl: "https://www.amazon.com/Khanomak-Sleeve-Zipper-Detail-Charcoal/dp/B076JLL15N",
          photoUrl: "Img/shirts3.jpg",
          PostId: "3"
        },
        {
          brand: "Ray-Ban",
          name: "4340V Wayfarer",
          CategoryId: 2,
          price: 168,
          purchaseUrl: "https://www.glassesusa.com/neutrals-medium/ray-ban-4340v-wayfarer/44-p5511.html",
          photoUrl: "Img/accessories7.jpg",
          PostId: "3"
        },
        {
          brand: "PacSun",
          name: "Skinny Ripped Bandana Black Jeans",
          CategoryId: 1,
          price: 59.95,
          purchaseUrl:
            "https://www.pacsun.com/pacsun/skinny-ripped-bandana-black-jeans-0132454210146.html?dwvar_0132454210146_color=001&cgid=mens-denim-trend-destroyed#start=2",
          photoUrl: "Img/pants3.jpg",
          PostId: "4"
        },
        {
          brand: "H&M",
          name: "Cotton Jersey T-shirt - Black",
          CategoryId: 2,
          price: 11.99,
          purchaseUrl: "http://www2.hm.com/en_us/productpage.0705324001.html",
          photoUrl: "Img/shirts4.jpg",
          PostId: "4"
        },
        {
          brand: "Hollister",
          name: "Plaid Flannel Shirt",
          CategoryId: 2,
          price: 39.95,
          purchaseUrl: "https://www.hollisterco.com/shop/us/p/-11296819",
          photoUrl: "Img/shirts5.jpg",
          PostId: "4"
        }
      ],
      {}
    );
  }
  // ,
  // // This is creating errors with ESLint
  // down: async (queryInterface, Sequelize) => {
  //   await queryInterface.bulkDelete("Categories", null, {});
  //   await queryInterface.bulkDelete("Items", null, {});
  //   await queryInterface.bulkDelete("Posts", null, {});
  //   await queryInterface.bulkDelete("Users", null, {});
  // }
};
