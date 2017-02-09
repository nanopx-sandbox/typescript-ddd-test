/**
 * Created by: nanopx
 * Date: 2017/02/09
 * typescript-ddd-test - UsecaseInterface
 */

import EntityInterface from "./EntityInterface";

interface UsecaseInterface {
  run(entity: EntityInterface)
}

export default UsecaseInterface;
