module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      {
        tableName: 'school_classes',
        schema: 'school',
      },
      [
        {
          code: 'N001',
          started_at: '2021-01-01',
          finished_at: '2021-1-12',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          code: 'N002',
          started_at: '2022-01-01',
          finished_at: '2022-1-12',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]
    );
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete(
      {
        tableName: 'school_classes',
        schema: 'school',
      },
      null,
      {}
    );
  },
};
