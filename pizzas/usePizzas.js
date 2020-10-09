import { useQuery } from "react-query";
import { isEmpty } from "lodash";

import fetchLuigi from "../fetchLuigi";
import hasMinLength from "../hasMinLength";

const { minLength } = 3;

export default function usePizzas(search) {
  let route = ["/sushis"];
  if (!isEmpty(search) && hasMinLength(search, minLength))
    route.push(`?q=${search}`);

  return useQuery(["sushis", hasMinLength(search, minLength) && search], () =>
    fetchLuigi(route.join(""))
  );
}
