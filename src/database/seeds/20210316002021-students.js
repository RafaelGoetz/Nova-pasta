module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      {
        tableName: 'students',
        // schema: 'school',
      },
      [
        {
          name: 'fulano',
          age: 15,
          status: true,
          school_class_id: 1,
          pwd: true,
          birthdate: '2021-02-03',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'fulano',
          age: 15,
          status: true,
          school_class_id: 1,
          pwd: true,
          birthdate: '2021-02-03',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Martin',
          age: 28,
          status: true,
          school_class_id: 1,
          pwd: true,
          birthdate: '2022-02-03',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Vini',
          age: 12,
          status: true,
          school_class_id: 1,
          pwd: true,
          birthdate: '1920-02-03',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]
    );
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete({ tableName: 'students' });
  },
};
