import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TweetsController } from './tweets/tweets.controller';
import { TweetsModule } from './tweets/tweets.module';
import { TweetsService } from './tweets/tweets.service';

@Module({
  imports: [TweetsModule],
  controllers: [AppController, TweetsController],
  providers: [AppService, TweetsService],
})
export class AppModule {}
