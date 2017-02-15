/**
 * Created by: nanopx
 * Date: 2017/02/07
 * typescript-ddd - Post
 */

import EntityInterface from '../interfaces/EntityInterface';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Post implements EntityInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  text: string;
}
