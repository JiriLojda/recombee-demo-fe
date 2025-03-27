import { NextRequest } from "next/server";
import { cookies, draftMode } from "next/headers";
import { envIdCookieName, previewApiKeyCookieName } from "../../../lib/constants/cookies";
import { getProductsForListing, getProductsForSearch } from "../../../lib/kontentClient";
import { recombeeUserIdCookieName } from "../../../lib/constants/recombee";

export const GET = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;

  const category = searchParams.getAll("category");
  const page = searchParams.get("page");
  const searchQuery = searchParams.get("searchQuery");

  const pageNumber = parseInt(page as string)

  if (page && isNaN(pageNumber)) {
    return new Response("The value you provided for page is not a number", {status: 400});
  }

  const usePreview = (await draftMode()).isEnabled;

  const cookiesList = await cookies();

  const currentEnvId = cookiesList.get(envIdCookieName);
  const currentPreviewApiKey = cookiesList.get(previewApiKeyCookieName);

  if (!currentEnvId) {
    return new Response("Missing envId cookie", {status: 400})
  }

  if (usePreview && !currentPreviewApiKey) {
    return new Response("Missing previewApiKey cookie", {status: 400})
  }
  
  const clientConfig = { 
    envId: currentEnvId.value, 
    previewApiKey: currentPreviewApiKey?.value 
  };

  const products = searchQuery 
  ? await getProductsForSearch(clientConfig, usePreview, searchQuery, cookiesList.get(recombeeUserIdCookieName)?.value)
  : await getProductsForListing(clientConfig, usePreview, isNaN(pageNumber) ? undefined : pageNumber, category.length ? category : undefined);

  return Response.json({ products: products.items, totalCount: products.pagination.totalCount });
};
