/**
 * Created by: nanopx
 * Date: 2017/02/09
 * typescript-ddd-test - SpecificationInterface
 */

import EntityInterface from "./EntityInterface";

interface SpecificationInterface {
  isSatisfiedBy(entity: EntityInterface) : Boolean
}

export default SpecificationInterface;
