module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      {
        tableName: 'holidays',
        schema: 'school',
      },
      [
        {
          description: "Vini's birthday",
          date: '2021-02-12',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          description: 'Christmas',
          date: '2021-12-25',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          description: 'New Year',
          date: '2021-12-31',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          description: 'Carnival',
          date: '2021-02-16',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]
    );
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete(
      {
        tableName: 'holidays',
        schema: 'school',
      },
      null,
      {}
    );
  },
};
