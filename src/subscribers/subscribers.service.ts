import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateSubscriberDto from './dto/createSubscriberDto.dto';
import Subscriber from './subscribers.entity';

@Injectable()
export class SubscribersService {
  constructor(
    @InjectRepository(Subscriber)
    private subscribersRepository: Repository<Subscriber>,
  ) {}
  async addSubscriber(subscriber: CreateSubscriberDto) {
    const newSubscriber = await this.subscribersRepository.create(subscriber);
    await this.subscribersRepository.save(newSubscriber);
    return newSubscriber;
  }
  async getAllSubscribers() {
    const data = await this.subscribersRepository.find();
    return data;
  }
}
