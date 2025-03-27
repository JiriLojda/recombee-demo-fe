import { ApiClient, requests } from "recombee-api-client";
import { recombeeDatabaseId, recombeePublicToken } from "./utils/env";

const client = new ApiClient(
	recombeeDatabaseId,
	recombeePublicToken,
	{ region: "eu-west" }
);

export const searchProducts = (query: string, userId: string | undefined) => searchItems(query, userId, "products");

export const searchArticles = (query: string, userId: string | undefined) => searchItems(query, userId, "articles");

export const searchItems = async (query: string, userId: string | undefined, itemType: "articles" | "products") => {
  const response = await client.send(new requests.SearchItems(userId ?? "USER_ID", query, 5, { scenario: `${itemType}_search` }));

  return response.recomms.map((recomm) => recomm.id.split("_")[0]).filter(notUndefined);
};

const notUndefined = <T>(value: T | undefined): value is T => value !== undefined;