import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { first_tableService } from './first_table/first_table.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UsersModule, PrismaModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, PrismaService, first_tableService],
})
export class AppModule {}
