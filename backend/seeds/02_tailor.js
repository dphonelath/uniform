
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM tailors; ALTER SEQUENCE tailors_id_seq RESTART WITH 8;')
    .then(function () {
      // Inserts seed entries
      return knex('tailors').insert([
        {
          id: 1, 
          name: 'Vaji\'s Tailor & Alterations' ,
          category: 'Tailor',
          website: 'http://www.tailordenver.com/',
          phone: '303-477-5631',
          location:'910 16th St Mall #207, Denver, CO 80202'
        },
        {
          id: 2, 
          name: 'Duman\'s Custom Tailor',
          category: 'Tailor',
          website: 'http://dumaninc.com/',
          phone: '303-832-1701',
          location:'438 E Colfax Ave, Denver, CO 80203'
        },
        {
          id: 3, 
          name: 'Denver Tailoring',
          category: 'Tailor',
          website: 'https://www.denvertailoring.com/',
          phone: '303-282-5566',
          location:'260 S Downing St, Denver, CO 80209'
        },
        {
          id: 4, 
          name: 'Westerfield Cobblers',
          category: 'Cobbler',
          website: 'http://www.westerfieldcobblers.com/',
          phone: '303-534-2034',
          location:'1512 Larimer St. #43R, 16th and Lawrence next to Starbucks, Denver, CO 80202'
        },
        {
          id: 5, 
          name: 'Erol\'s Tailoring and Alterations',
          category: 'Tailor',
          website: 'https://www.erolstailoring.com/',
          phone: '303-377-2400',
          location:'314 Columbine St, Denver, CO 80206'
        },
        {
          id: 6, 
          name: 'Cobbler\'s Corner',
          category: 'Cobbler',
          website: 'https://www.cobblerscornerdenver.com/',
          phone: '303-623-3838',
          location:'826 17th St, Denver, CO 80202'
        },
        {
          id: 7, 
          name: 'Rhine\'s Shoe & Boot Repair',
          category: 'Cobbler',
          website: 'http://www.rhinescobblerschool.com/',
          phone: '(303) 832-6345',
          location:'221 E 17th Ave, Denver, CO 80203'
        },
      ]);
    });
};
