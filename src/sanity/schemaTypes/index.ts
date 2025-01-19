import { type SchemaTypeDefinition } from "sanity";
import foods from "./foods";
import chefs from "./chefs";
import reviews from "./reviews";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [foods, chefs, reviews],
};
