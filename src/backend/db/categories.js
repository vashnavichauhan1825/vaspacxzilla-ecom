import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "books",
    value: "books",
  },
  {
    _id: uuid(),
    categoryName: "astronomy",
    value: "astronomy",
  },
  {
    _id: uuid(),
    categoryName: "digital",
    value: "digital",
  },
  {
    _id: uuid(),
    categoryName: "home decor",
    value: "home decor",
  },
  {
    _id: uuid(),
    categoryName: "clothes",
    value: "clothes",
  },
];
