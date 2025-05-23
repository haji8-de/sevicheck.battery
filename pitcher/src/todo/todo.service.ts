import { Injectable } from '@nestjs/common';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}
  async create(createTodoInput: CreateTodoInput) {
    return this.prisma.todo.create({
      data: createTodoInput,
    });
  }

  findAll() {
    return this.prisma.todo.findMany()
  }

  findOne(id: number) {
    return this.prisma.todo.findUnique({where:{id}});
  }

  update(id: number, updateTodoInput: UpdateTodoInput) {
    return this.prisma.todo.update({
      where: {id},
      data: {title:updateTodoInput.title}
    })
  }

  remove(id: number) {
    return this.prisma.todo.delete({where:{id}})
  }
}
