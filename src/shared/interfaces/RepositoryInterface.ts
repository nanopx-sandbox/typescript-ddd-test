/**
 * Created by: nanopx
 * Date: 2017/02/09
 * typescript-ddd-test - RepositoryInterface
 */

import EntityInterface from "./EntityInterface";

interface RepositoryInterface {
  add(entity: EntityInterface)
  remove(entity: EntityInterface)
}

export default RepositoryInterface;
