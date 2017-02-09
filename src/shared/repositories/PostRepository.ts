/**
 * Created by: nanopx
 * Date: 2017/02/07
 * typescript-ddd - PostRepository
 */

import {Repository, EntityRepository, EntityManager} from "typeorm";
import { OrmEntityManager } from 'typeorm-typedi-extensions';
import RepositoryInterface from "../../interfaces/RepositoryInterface";
import { Post } from "../../shared/entities/Post";

@EntityRepository(Post)
export class PostRepository extends Repository<Post> implements RepositoryInterface {

  @OrmEntityManager()
  private entityManager: EntityManager;

  saveUsingRepository(post: Post) {
    return this.persist(post);
  }

  add(post: Post|Post[]) {
    return this.entityManager.persist(post);
  }

  remove(post: Post|Post[]) {
    return this.entityManager.remove(post);
  }

  findAll() {
    return this.find();
  }
}
