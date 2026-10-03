import {
  DeleteDateColumn,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import Media from './Media';
import { User } from './User';

@Entity()
export class MediaSubscribers {
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @ManyToOne(() => Media, (media) => media.subscribers, {
    onDelete: 'CASCADE',
  })
  media: Media;

  @ManyToOne(() => User, (user) => user.subscriptions, {
    onDelete: 'CASCADE',
    eager: true,
  })
  user: User;

  @DeleteDateColumn()
  deletedAt?: Date;
}
