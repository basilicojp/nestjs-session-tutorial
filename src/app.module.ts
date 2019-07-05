import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ProjectModule } from './project/project.module';
import {UserEntity} from './user/user.entity';
import {ProjectEntity} from './project/project.entity';
import { ProjectController } from './project/project.controller';
import { ProjectService } from './project/project.service';


@Module({
  imports: [
      TypeOrmModule.forRoot({
          type: 'sqlite',
          database: `${process.cwd()}/tutorial.sqlite`,
          entities: [UserEntity, ProjectEntity],
          synchronize: true,
          // logging: 'all'
      }),
      UserModule,
      ProjectModule,
],
  controllers: [AppController, ProjectController],
  providers: [ AppService, ProjectService ]
})
export class AppModule {}
