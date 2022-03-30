import { arrayHelpers } from "../library/helpers";

function RandomValue() {
  return (
    <div>{arrayHelpers.getRandomElement([1, 2, 3])}</div>
  );
}

export default RandomValue;
