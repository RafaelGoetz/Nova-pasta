import TeacherService from '../services/TeacherService';

const service = new TeacherService();

class TeacherController {
  async index(request, response) {
    return response.json(await service.get());
  }

  async show(request, response) {
    const { id } = request.params;

    return response.json(await service.getById(id));
  }

  async store(request, response) {
    const { nome, idade, cidade, uf, materiaId } = request.body;
    const result = await service.create(nome, idade, cidade, uf, materiaId);

    return response.json(result);
  }

  async update(request, response) {
    const { id } = request.params;
    const { nome, idade, cidade, uf, materiaId } = request.body;
    const result = await service.update(id, nome, idade, cidade, uf, materiaId);

    return response.json(result);
  }

  async delete(request, response) {
    const { id } = request.params;
    await service.delete(id);

    return response.sendStatus(202);
  }
}

export default new TeacherController();
