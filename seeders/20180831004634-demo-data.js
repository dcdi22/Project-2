'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('Users', [
      {
        id: '1',
        username: 'Frank Gerard'
      },
      {
        id: "2",
        username: 'Alex Baxley'
      },
      {
        id: "3",
        username: 'Janelle Joplin'
      },
      {
        id: "4",
        username: 'James Delgado'
      }
    ], {});

    queryInterface.bulkInsert('Posts', [
      {
        id: "1",
        title: "Ballin on a budget",
        body: "I found this shirt at Goodwill. I saved so much money. I'm the best shopper ever",
        photoUrl: "Img/style1.jpg",
        UserId: "1",
      },
      {
        id: "2",
        title: "Fall Fresh",
        body: "My skate shop Wheel Bairo just got in these new hoodies and beanies. Stop by on Main Street!",
        photoUrl: "Img/style2.jpg",
        UserId: "2",
      },
      {
        id: "3",
        title: "Designer Life",
        body: "I love the style clash of business and casual. The jacket used to be my little brothers!",
        photoUrl: "Img/style3.jpg",
        UserId: "3",
      },
      {
        id: "4",
        title: "Simplicity is a virtue",
        body: "Some people say wearing your shirt around your waste is lame, but anyone who thinks that is just a hater. Convenience over err'ything.",
        photoUrl: "Img/style4.jpg",
        UserId: "4",
      },
      {
        id: "5",
        title: "Flowers not included",
        body: 'Nicki Minaj "Chun Li" haircut + brand new boots = a happy me',
        photoUrl: "Img/style5.jpg",
        UserId: "3",
      },
    ], {});

    return queryInterface.bulkInsert('Items', [
      {
        brand: "Libratone",
        name: 'Headphones',
        category: 'Accessories',
        purchaseUrl: 'https://www.amazon.com/Libratone-Wireless-Cancelling-Headphones-Stormy/dp/B01NAHRH9X',
        photoUrl: 'Img/accessories1.jpg',
        PostId: '1'
      },
      {
        brand: "Bella",
        name: 'Canvas Unisex Jersey 3/4 Sleeve Baseball Tee',
        category: 'Shirts',
        purchaseUrl: 'https://www.amazon.com/Bella-Canvas-Unisex-Jersey-Baseball/dp/B014WBLVVE?th=1',
        photoUrl: 'Img/shirts1.jpg',
        PostId: '1'
      },
      {
        brand: "IWC",
        name: 'Watch',
        category: 'Accessories',
        purchaseUrl: 'https://www.iwc.com/us/en/home.html',
        photoUrl: 'Img/accessories2.jpg',
        PostId: '2'
      },
      {
        brand: "Charlotte Tilbury",
        name: 'Lipstick',
        category: 'Accessories',
        purchaseUrl: 'http://www.charlottetilbury.com/us/',
        photoUrl: 'Img/accessories3.jpg',
        PostId: '3'
      },
      {
        brand: "Calvin Klein",
        name: 'Textured Marled Knit Jacquard Open-Front Jacket',
        category: 'Jackets',
        purchaseUrl: 'https://www.dillards.com/p/calvin-klein-textured-marled-knit-jacquard-open-front-jacket/508260427',
        photoUrl: 'Img/suits1.jpg',
        PostId: '3'
      },
      {
        brand: "Kendra Scott",
        name: 'Elisa Pendant Necklace In Multi Color Drusy',
        category: 'Accessories',
        purchaseUrl: 'https://www.kendrascott.com/jewelry/categories/necklaces/elisa-silver-pendant-necklace-platinum-drusy/842177112380.html',
        photoUrl: 'Img/accessories4.jpg',
        PostId: '5'
      },
      {
        brand: "Helzberg",
        name: 'Diamond Infinity Ring 1/10 ct tw Round-Cut Sterling Silver',
        category: 'Accessories',
        purchaseUrl: 'https://www.helzberg.com/',
        photoUrl: 'Img/accessories5.jpg',
        PostId: '5'
      },
      {
        brand: "Michael Kors",
        name: 'Pink convertible bag',
        category: 'Accessories',
        purchaseUrl: 'https://www.michaelkors.com/',
        photoUrl: 'Img/bags1.jpg',
        PostId: '5'
      }
      
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Items', null, {});
    await queryInterface.bulkDelete('Posts', null, {});
    await queryInterface.bulkDelete('Users', null, {});
  }
};
