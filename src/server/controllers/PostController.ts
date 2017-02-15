/**
 * Created by: nanopx
 * Date: 2017/02/07
 * typescript-ddd - PostController.ts
 */

import {Service} from "typedi";
import {
  JsonController, Get as HttpGet, Post as HttpPost, Patch as HttpPatch, TextResponse,
} from "routing-controllers";
import {OrmRepository} from "typeorm-typedi-extensions";
import {Repository} from "typeorm";
import {EntityFromParam, EntityFromBody, EntityFromBodyParam} from "typeorm-routing-controllers-extensions";
import {Post} from "../../shared/entities/Post";

@Service()
@JsonController('/posts')
export class PostController {

  @OrmRepository(Post)
  private postRepository: Repository<Post>;

  @HttpGet('/')
  getAllPosts() {
    return this.postRepository.find();
  }

  @HttpGet('/:id')
  get(@EntityFromParam('id') post: Post) {
    return post;
  }

  @HttpPost('/')
  save(@EntityFromBody() post: Post) {
    return this.postRepository.persist(post);
  }

  @HttpPatch('/')
  patch(@EntityFromBodyParam('post1') post1: Post, @EntityFromBodyParam('post2') post2: Post) {
    return this.postRepository.persist([post1, post2]);
  }

  @HttpGet('/ping')
  @TextResponse()
  ping() {
    return 'Pong!';
  }
}
