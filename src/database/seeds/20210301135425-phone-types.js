module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      {
        tableName: 'phone_types',
        schema: 'school',
      },
      [
        {
          name: 'Cell phone',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Home phone',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Commercial phone',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]
    );
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete(
      {
        tableName: 'phone_types',
        schema: 'school',
      },
      null,
      {}
    );
  },
};
