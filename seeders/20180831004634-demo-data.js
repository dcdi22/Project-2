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

    return queryInterface.bulkInsert('Posts', [
      {
        title: "Ballin on a budget",
        body: "I found this shirt at Goodwill. I saved so much money. I'm the best shopper ever",
        photoUrl: "Img/style1.jpg",
        UserId: "1",
      },
      {
        title: "Fall Fresh",
        body: "My skate shop Wheel Bairo just got in these new hoodies and beanies. Stop by on Main Street!",
        photoUrl: "Img/style2.jpg",
        UserId: "2",
      },
      {
        title: "Designer Life",
        body: "I love the style clash of business and casual. The jacket used to be my little brothers!",
        photoUrl: "Img/style3.jpg",
        UserId: "3",
      },
      {
        title: "Simplicity is a virtue",
        body: "Some people say wearing your shirt around your waste is lame, but anyone who thinks that is just a hater. Convenience over err'ything.",
        photoUrl: "Img/style4.jpg",
        UserId: "4",
      },
      {
        title: "Flowers not included",
        body: 'Nicki Minaj "Chun Li" haircut + brand new boots = a happy me',
        photoUrl: "Img/style5.jpg",
        UserId: "3",
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Posts', null, {});
    await queryInterface.bulkDelete('Users', null, {});
  }
};
