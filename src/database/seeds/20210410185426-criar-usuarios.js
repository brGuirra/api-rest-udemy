const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users',
      [
        {
          nome: 'Bruno',
          email: 'bruno@email.com',
          password_hash: await bcryptjs.hash('12345', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          nome: 'Maria',
          email: 'maria@email.com',
          password_hash: await bcryptjs.hash('12345', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'José',
          email: 'jose@email.com',
          password_hash: await bcryptjs.hash('12345', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },

      ], {});
  },

  down: async () => {},
};
