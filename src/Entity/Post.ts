/**
 * Created by: nanopx
 * Date: 2017/02/07
 * typescript-ddd - Post
 */

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Post {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  text: string;

}
