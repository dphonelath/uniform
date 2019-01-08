exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM users; ALTER SEQUENCE users_id_seq RESTART WITH 8;')
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1, 
          firstName: 'Daniel',
          lastName: 'Phonelath',
          email: 'daniel.phonelath@gmail.com',
          phone: '123-456-7890',
          armLength: 42,
          chest: 37,
          waist: 38,
          hip: null
        },
        {
          id: 2, 
          firstName: 'Jaycie',
          lastName: 'Phonelath',
          email: 'jphonelath@gmail.com',
          phone: '123-456-7890',
          armLength: 42,
          chest: 37,
          waist: 38,
          hip: 42
        },
        {
          id: 3, 
          firstName: 'Nathan',
          lastName: 'Zick-Smith',
          email: 'nzs@gmail.com',
          phone: '123-456-7890',
          armLength: 42,
          chest: 37,
          waist: 38,
          hip: null
        },
        {
          id: 4, 
          firstName: 'Cam',
          lastName: 'Heitmieir',
          email: 'cam123@gmail.com',
          phone: '123-456-7890',
          armLength: 42,
          chest: 37,
          waist: 38.9,
          hip: null
        },
        {
          id: 5, 
          firstName: 'Xan',
          lastName: 'Mitkus',
          email: 'xanax@gmail.com',
          phone: '123-456-7890',
          armLength: 42,
          chest: 37,
          waist: 38.9,
          hip: null
        },        
        {
          id: 6, 
          firstName: 'Gretchen',
          lastName: 'Christoff',
          email: 'gchristoff@gmail.com',
          phone: '123-456-7890',
          armLength: 42,
          chest: 37,
          waist: 38.9,
          hip: 42
        },
        {
          id: 7, 
          firstName: 'Noami',
          lastName: 'Campbell',
          email: 'nCampbell@gmail.com',
          phone: '123-456-7890',
          armLength: 42,
          chest: 37,
          waist: 38.9,
          hip: null
        },
      ]);
    });
};
