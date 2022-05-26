import { Response } from "miragejs";

/**
 * All the routes related to brands are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles gets all categories in the db.
 * send GET Request at /api/categories
 * */

export const getAllBrandsHandler = function () {
  try {
    return new Response(200, {}, { brands: this.db.brands });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles gets all brands in the db.
 * send GET Request at /api/user/brands/:brandId
 * */

export const getBrandHandler = function (schema, request) {
  const brandId = request.params.brandId;
  try {
    const brand = schema.categories.findBy({ _id: brandId });
    return new Response(200, {}, { brand });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
