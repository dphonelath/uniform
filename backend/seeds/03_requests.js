
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM requests; ALTER SEQUENCE requests_id_seq RESTART WITH 8;')
    .then(function () {
      // Inserts seed entries
      return knex('requests').insert([
        {
          id: 1, 
          description: 'broken button',
          photoURL: 'photo.com',
          tailorsID: 1,
          usersID: 3,
          dropoffDate: '1/18/19' 
        },
        {
          id: 2, 
          description: 'sleeves are too long',
          photoURL: 'photo.com',
          tailorsID: 4,
          usersID: 3,
          dropoffDate: '1/18/19' 
        },
        {
          id: 3, 
          description: 'repair sole of shoe',
          photoURL: 'photo.com',
          tailorsID: 2,
          usersID: 1,
          dropoffDate: '1/18/19' 
        },
        {
          id: 4, 
          description: 'Repair hem.',
          photoURL: 'photo.com',
          tailorsID: 3,
          usersID: 5,
          dropoffDate: '1/18/19' 
        },
        {
          id: 5, 
          description: 'repair waist',
          photoURL: 'photo.com',
          tailorsID: 2,
          usersID: 1,
          dropoffDate: '1/18/19' 
        },
        {
          id: 6, 
          description: 'repair pant zipper',
          photoURL: 'photo.com',
          tailorsID: 4,
          usersID: 3,
          dropoffDate: '1/18/19' 
        },
        {
          id: 7, 
          description: 'get rid of collar',
          photoURL: 'photo.com',
          tailorsID: 6,
          usersID: 1,
          dropoffDate: '1/18/19' 
        },
      ]);
    });
};
