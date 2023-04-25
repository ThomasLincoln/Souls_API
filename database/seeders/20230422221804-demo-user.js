

module.exports = {

  up: async (queryInterface) => queryInterface.bulkInsert(
    'teste',
    [{
      name: 'John Doe',
      email: 'teste12@gmail.com',
      password: 'teste12@gmail.com',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'John Doe',
      email: 'teste12ww@gmail.com',
      password: 'teste12@gmail.com',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'John Doe',
      email: 'teste1ss2@gmail.com',
      password: 'teste12@gmail.com',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'John Doe',
      email: 'teste12ssa@gmail.com',
      password: 'teste12@gmail.com',
      created_at: new Date(),
      updated_at: new Date(),
    },
    ],
    {},
  ),
  down: () => {},
};
