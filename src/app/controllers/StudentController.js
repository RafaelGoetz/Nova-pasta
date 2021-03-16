/* eslint-disable no-restricted-globals */
/* eslint-disable radix */
/* eslint-disable no-unused-vars */

import { Op } from 'sequelize';
import Student from '../models/Student';
import StudentGrade from '../models/StudentGrade';

class StudentController {
  async index(request, response) {
    // const result = await Student.findAll();
    /* const result = await Student.findAll({
      attributes: ['name', 'age'],
      order: [
        ['name', 'DESC'],
        ['age', 'ASC'],
      ],
    }); */
    /* const result = await Student.findAll({
      attributes: ['name', 'age'],
      where: {
        [Op.and]: [{ status: true }, { pwd: false }],
      },
      order: [
        ['name', 'DESC'],
        ['age', 'ASC'],
      ],
    }); */

    /* const result = await Student.findAll({
      attributes: ['name'],
      where: {
        [Op.and]: [{ status: true }, { pwd: false }],
      },
      order: [['name', 'DESC']],
      group: 'name',
    }); */

    /* const result = await Student.findAll({
      include: [
        {
          model: StudentGrade,
          as: 'students_grades',
          attributes: ['description', 'grade'],
        },
      ],
    }); */

    const result = await Student.findAndCountAll({
      attributes: ['name', 'age'],
      limit: 2,
      offset: 2,
    });

    return response.json(result);
  }

  async show(request, response) {
    const { id } = request.params;
    const user = await Student.findByPk(id);

    const parsed = parseInt(id);

    if (isNaN(parsed)) {
      return response.sendStatus(400);
    }
    return response.json(user);
  }

  async store(request, response) {
    const { name, age, schoolClassId, birthdate } = request.body;

    // const user = await Student.create(request.body);

    /* const user = Student.build({
      name,
      age,
      school_class_id: schoolClassId,
      birthdate,
    });

    user.name = 'Vinicius';

    await user.save(); */
    if (!name || !age || !birthdate) {
      return response.sendStatus(400);
    }

    const user = await Student.create({
      name,
      age,
      school_class_id: schoolClassId,
      birthdate,
    });

    return response.json(user);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, age, schoolClassId, birthdate } = request.body;

    const user = await Student.findByPk(id);

    user.name = name;
    user.age = age;
    user.school_class_id = schoolClassId;
    user.birthdate = birthdate;

    user.save();

    /* const user = await Student.update(
      request.body,
      {
        where: {
          id,
        },
        returning: true,
      }
    ); */

    /* const user = await Student.update(
      { name, age, school_class_id: schoolClassId, birthdate },
      {
        where: {
          id,
        },
        returning: true,
      }
    ); */

    return response.json(user);
  }

  async delete(request, response) {
    const { id } = request.params;
    /* const user = await Student.findByPk(id);
    await user.destroy(); */

    await Student.destroy({
      where: {
        id,
      },
    });

    return response.sendStatus(202);
  }
}

export default new StudentController();
