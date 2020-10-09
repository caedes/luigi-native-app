import { isEmpty } from "lodash";

export default function hasMinLength(string, minLength) {
  return !isEmpty(string) && string.length >= minLength;
}
