import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { SubscribersController } from './subscribers/subscribers.controller';
import Subscriber from './subscribers/subscribers.entity';
import { SubscribersModule } from './subscribers/subscribers.module';
import { SubscribersService } from './subscribers/subscribers.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Subscriber]),
    DatabaseModule,
    SubscribersModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController, SubscribersController],
  providers: [AppService, SubscribersService],
})
export class AppModule {}
