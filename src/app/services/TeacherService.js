import { QueryTypes } from 'sequelize';
import BaseService from './BaseService';

export default class TeacherService extends BaseService {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  async get() {
    const result = await this.execute(
      'select * from professor',
      QueryTypes.SELECT
    );

    return result;
  }

  async getById(id) {
    const result = await this.execute(
      `select * from professor where id = ${id}`,
      QueryTypes.SELECT
    );

    return result;
  }

  async create(nome, idade, cidade, uf, materiaId) {
    const result = await this.execute(
      `insert into professor (nome, idade, cidade, uf, materia_id) 
                        values ('${nome}', ${idade}, '${cidade}', '${uf}', ${materiaId}) returning *`,
      QueryTypes.INSERT
    );

    return result;
  }

  async update(id, nome, idade, cidade, uf, materiaId) {
    const result = await this.execute(
      `update professor set nome = '${nome}', 
                        idade = ${idade}, 
                        cidade = '${cidade}',
                        uf = '${uf}',
                        materia_id = ${materiaId}
                        where id = ${id} returning *`,
      QueryTypes.UPDATE
    );

    return result;
  }

  async delete(id) {
    await this.execute(
      `delete from professor_turma where professor_id = ${id}`,
      QueryTypes.DELETE
    );
    await this.execute(
      `delete from professor where id = ${id}`,
      QueryTypes.DELETE
    );
  }
}
