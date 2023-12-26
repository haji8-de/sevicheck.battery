import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TodoModule } from './todo/todo.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      //debug: false,
      //playground: false
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema:true
    }),
    TodoModule,
    PrismaModule,
    UserModule,
    AuthModule
  ],
  providers: [PrismaService],
  controllers: [], // AppController
  //providers: [AppService],
})
export class AppModule {
  
}
