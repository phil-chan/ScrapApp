
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('scraps').del()
    .then(function () {
      // Inserts seed entries
      return knex('scraps').insert([
        {
          id: 1,
          scrap_name: 'Hot Chips',
          category: 'Food',
          description: 'Very Hot Chips, but they are half eaten',
          scrap_image: 'https://www.flaticon.com/svg/static/icons/svg/685/685352.svg',
          address: '126 Austin Street, Mount Victoria, Wellington, New Zealand',
          latitude: -41.298736572265625,
          longitude: 174.78701782226562,
          user_id: 1,
          collected: true,
        },
        {
          id: 2,
          scrap_name: 'Banana',
          category: 'Food',
          description: 'Green Banana (the best)',
          scrap_image: 'https://www.flaticon.com/svg/static/icons/svg/685/685352.svg',
          address: 'Bohemein, Featherston Street, Wellington Central, Wellington, Wellington City, Wellington, 6145, New Zealand',
          latitude: -41.2819967,
          longitude: 174.7779542,
          user_id: 1,
          collected: false,
        },
        {
          id: 3,
          scrap_name: 'Couch',
          category: 'Furniture',
          description: '50 year old couch - mint condition',
          scrap_image: 'https://www.flaticon.com/svg/static/icons/svg/2611/2611026.svg',
          address: '78 Pirie Street, Mount Victoria, Wellington, New Zealand',
          latitude: -41.29813766479492,
          longitude: 174.78538513183594,
          user_id: 2,
          collected: false,
        },
        {
          id: 4,
          scrap_name: 'Basketball Hoop',
          category: 'Furniture',
          description: 'Basketball Hoop - only used once',
          scrap_image: 'https://www.flaticon.com/svg/static/icons/svg/2742/2742640.svg',
          address: 'Caci, Oriental Parade, Oriental Bay, Wellington, Wellington City, Wellington, 6011, New Zealand',
          latitude: -41.2914082,
          longitude: 174.7943709,
          user_id: 6,
          collected: true,
        },
        {
          id: 5,
          scrap_name: 'Soccer Ball',
          category: 'Stuff',
          description: 'Soccer Ball, the best soccer ball of all time',
          scrap_image: 'https://www.flaticon.com/svg/static/icons/svg/1165/1165187.svg',
          address: 'Plumbing World, Abel Smith Street, Mount Cook, Wellington, Wellington City, Wellington, 6040, New Zealand',
          latitude: -41.29696455,
          longitude: 174.77528781,
          user_id: 5,
          collected: true,
        },
        {
          id: 6,
          scrap_name: 'Apple',
          category: 'Food',
          description: 'Half eaten apple',
          scrap_image: 'https://www.flaticon.com/svg/static/icons/svg/685/685352.svg',
          address: 'Dakota, 74, Courtenay Place, Wellington, Wellington City, Wellington, 6011, New Zealand',
          latitude: -41.2930544,
          longitude: 174.7804585,
          user_id: 4,
          collected: true,
        },
        {
          id: 7,
          scrap_name: 'Burger',
          category: 'Food',
          description: 'Garlic Burger, disguisting',
          scrap_image: 'https://www.flaticon.com/svg/static/icons/svg/685/685352.svg',
          address: 'Worldwide Backpackers, 291, The Terrace, Aro Valley, Wellington, Wellington City, Wellington, 6040, New Zealand',
          latitude: -41.2911798,
          longitude: 174.771028,
          user_id: 3,
          collected: true,
        },
        {
          id: 8,
          scrap_name: 'Pool Table',
          category: 'Furniture',
          description: 'Nice one',
          scrap_image: 'https://www.flaticon.com/svg/static/icons/svg/2942/2942867.svg',
          address: 'Museum of New Zealand Te Papa Tongarewa, Cable Street, Te Aro, Wellington, 6011, New Zealand',
          latitude: -41.2903293,
          longitude: 174.78192779,
          user_id: 4,
          collected: true,
        },
        {
          id: 9,
          scrap_name: 'Chilli Coffee',
          category: 'Food',
          description: 'Half Coffee, Half Chilli - it is hot',
          scrap_image: 'https://www.flaticon.com/svg/static/icons/svg/685/685352.svg',
          address: 'The Lobby, 100, Willis Street, Te Aro, Wellington, 6040, New Zealand',
          latitude: -41.28762235,
          longitude: 174.7736755,
          user_id: 5,
          collected: true,
        },
        {
          id: 10,
          scrap_name: 'TV',
          category: 'Stuff',
          description: 'Smol TV',
          scrap_image: 'https://www.flaticon.com/svg/static/icons/svg/711/711944.svg',
          address: 'Noel Leeming, 133-139, Tory Street, Te Aro, Wellington, Wellington City, Wellington, 6011, New Zealand',
          latitude: -41.29717515,
          longitude: 174.78023297,
          user_id: 6,
          collected: true,
        },
      ]);
    });
};