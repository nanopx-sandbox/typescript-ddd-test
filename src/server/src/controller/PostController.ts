/**
 * Created by: nanopx
 * Date: 2017/02/07
 * typescript-ddd - PostController.ts
 */

import { JsonController as JSONController, Get as HttpGet, Post as HttpPost, Patch as HttpPatch } from 'routing-controllers';
import { getConnectionManager, Repository } from 'typeorm';
import { EntityFromParam, EntityFromBody, EntityFromBodyParam } from 'typeorm-routing-controllers-extensions';
import { Post } from '../../../shared/entity/Post';

@JSONController()
export class PostController {

  private postRepository: Repository<Post>;

  constructor() {
    this.postRepository = getConnectionManager().get().getRepository(Post);
  }

  @HttpGet('/posts')
  getAllPosts() {
    return this.postRepository.find();
  }

  @HttpGet('/posts/:id')
  get(@EntityFromParam('id') post: Post) {
    return post;
  }

  @HttpPost("/posts")
  save(@EntityFromBody() post: Post) {
    return this.postRepository.persist(post);
  }

  @HttpPatch("/posts")
  patch(@EntityFromBodyParam("post1") post1: Post, @EntityFromBodyParam("post2") post2: Post) {
    return this.postRepository.persist([post1, post2]);
  }
}
