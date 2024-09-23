import { object, string, TypeOf, number } from "zod";

export const beerSchema = object({
  body: object({
    name: string({
      required_error: "Beer name is required",
    }),
    type: string({
      required_error: "Beer type is required",
    }),
    rating: number().int().min(1).max(5).optional(),
  }),
});

export const beerRatingSchema = object({
  body: object({
    rate: number().int().min(1).max(5),
  }),
});

export type BeerSchema = TypeOf<typeof beerSchema>["body"];
export type BeerRatingSchema = TypeOf<typeof beerRatingSchema>["body"];
