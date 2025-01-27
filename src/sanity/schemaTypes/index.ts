import { type SchemaTypeDefinition } from "sanity";
import foods from "./foods";
import chefs from "./chefs";
import order from "./order";
import reservation from "./reservation";
import review from "./review";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [foods, chefs, order, reservation, review],
};
