/* eslint-disable prettier/prettier */
import request from 'supertest';
import app from '../../src/app';
import Student from '../../src/app/models/Student';
import StudentController from '../../src/app/controllers/StudentController'

describe('user', () => {
  it('should return all students...', async () => {
    expect.assertions(1);

    const response = await request(app).get('/student', StudentController.index);

    expect(response.status).toBe(200);
  })
  it('should return one students according to id..', async () => {
    expect.assertions(3);
    await Student.create({
      name: 'fulano',
      age: 15,
      status: true,
      pwd: true,
      birthdate: '2021-02-03',
    })
    const response = await request(app).get('/student/1', StudentController.show).send();
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');

    const response2 = await request(app).get('/student/text', StudentController.show).send();

    expect(response2.status).toBe(400);
  })
  it('should create a new students...', async () => {
    expect.assertions(3);

    const response = await request(app).post('/student', StudentController.store).send({
      name: 'sdsad', 
      age: 15, 
      birthdate: '2021-02-03'
    });

    const response2 = await request(app).post('/student', StudentController.store).send({
      name: '', 
      age: '', 
      birthdate: ''
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(response2.status).toBe(400);
  })
  it('should create a new students...', async () => {
    expect.assertions(3);

    const response = await request(app).post('/student', StudentController.store).send({
      name: 'sdsad', 
      age: 15, 
      birthdate: '2021-02-03'
    });

    const response2 = await request(app).post('/student', StudentController.store).send({
      name: '', 
      age: '', 
      birthdate: ''
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(response2.status).toBe(400);
  })
})