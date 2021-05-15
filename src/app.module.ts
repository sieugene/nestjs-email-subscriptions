import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { SubscribersModule } from './subscribers/subscribers.module';

@Module({
  imports: [DatabaseModule, ConfigModule.forRoot(), SubscribersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
