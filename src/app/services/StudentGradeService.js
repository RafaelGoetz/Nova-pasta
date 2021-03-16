import { QueryTypes } from 'sequelize';
import BaseService from './BaseService';

export default class StudentGradeService extends BaseService {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  async get(studentId) {
    const result = await this.execute(
      `select * from aluno_nota where aluno_id = ${studentId}`,
      QueryTypes.SELECT
    );

    return result;
  }

  async getById(studentId, gradeId) {
    const result = await this.execute(
      `select * from aluno_nota where aluno_id = ${studentId} and id = ${gradeId}`,
      QueryTypes.SELECT
    );

    return result;
  }

  async create(studentId, nota, descricao, materiaId) {
    const result = await this.execute(
      `insert into aluno_nota (nota, descricao, aluno_id, materia_id) 
       values (${nota}, '${descricao}', ${studentId}, ${materiaId}) returning *`,
      QueryTypes.INSERT
    );

    return result;
  }

  async update(studentId, gradeId, nota, descricao, materiaId) {
    const result = await this.execute(
      `update aluno_nota set nota = ${nota},
        descricao = '${descricao}', materia_id = ${materiaId}
        where aluno_id = ${studentId} and id = ${gradeId} returning *`,
      QueryTypes.UPDATE
    );

    return result;
  }

  async delete(studentId, gradeId) {
    await this.execute(
      `delete from aluno_nota where aluno_id = ${studentId} and id = ${gradeId}`,
      QueryTypes.DELETE
    );
  }
}
