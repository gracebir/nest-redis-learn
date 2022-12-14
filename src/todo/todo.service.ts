import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';

@Injectable()
export class TodoService {
constructor(private prisma: PrismaService){}

  create(createTodoInput: CreateTodoInput) {
    const todo = this.prisma.todo.create({
      data: {
        title: createTodoInput.title,
        description: createTodoInput.description
      }
    })

    return todo
  }

  async findAll() {
    const todos = await this.prisma.todo.findMany();
    return todos
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  update(id: number, updateTodoInput: UpdateTodoInput) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
