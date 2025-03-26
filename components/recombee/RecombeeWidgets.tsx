"use client";

import Script from "next/script";
import { preinit } from "react-dom";

export const RecombeeArticlesSearchWidget = () => {
  preinit("https://web-integration.recombee.com/v1/recombee.js", { as: "script" });

  return (
    <>
      <Script id="first-articlesSearch">{"window.recombeeIntegration=window.recombeeIntegration||function(){(recombeeIntegration.q=recombeeIntegration.q||[]).push(arguments)};recombeeIntegration.l=+new Date;"}</Script>
      <Script id="second-articlesSearch">{`
      recombeeIntegration({
        type: "SetDefaults",
        databaseId: "kontent-ai-dev",
        publicToken: "A8WBQFrxjfFZVb2Z4qzVcX8nMlSK0Tzst20qEb35ThhY66y4GbXdYydDyS7190y9",
        rapiHostname: "client-rapi.recombee.com:443"
      });
      recombeeIntegration({
        type: "InitializeRecommendationWidget",
        widgetId: "580e86f4-f625-43be-aac2-775ba3191676",
        rootElementId: "widget-root-580e86f4-f625-43be-aac2-775ba3191676"
      });
      `}
      </Script>
      <Script type="text/javascript" defer src="https://web-integration.recombee.com/v1/recombee.js"></Script>
      <div id="widget-root-580e86f4-f625-43be-aac2-775ba3191676"></div>
    </>
  );
};

export const RecombeeProductsSearchWidget = () => {
  preinit("https://web-integration.recombee.com/v1/recombee.js", { as: "script" });

  return (
    <>
      <Script id="first-prodctsSearch">{"window.recombeeIntegration=window.recombeeIntegration||function(){(recombeeIntegration.q=recombeeIntegration.q||[]).push(arguments)};recombeeIntegration.l=+new Date;"}</Script>
      <Script id="second-productsSearch">{`
      recombeeIntegration({
        type: "SetDefaults",
        databaseId: "kontent-ai-dev",
        publicToken: "A8WBQFrxjfFZVb2Z4qzVcX8nMlSK0Tzst20qEb35ThhY66y4GbXdYydDyS7190y9",
        rapiHostname: "client-rapi.recombee.com:443"
      });
      recombeeIntegration({
        type: "InitializeRecommendationWidget",
        widgetId: "4221fed8-a116-44be-a0ba-952ec4616cd1",
        rootElementId: "widget-root-4221fed8-a116-44be-a0ba-952ec4616cd1"
      });
      `}
      </Script>
      <Script type="text/javascript" defer src="https://web-integration.recombee.com/v1/recombee.js"></Script>
      <div id="widget-root-4221fed8-a116-44be-a0ba-952ec4616cd1"></div>
    </>
  );
};

export const RecombeeArticleRecommendationWidget = (props: Readonly<{ itemId: string; languageCodename: string }>) => {
  preinit("https://web-integration.recombee.com/v1/recombee.js", { as: "script" });

  return (
    <>
      <Script id="first-articlesRecommendation">{"window.recombeeIntegration=window.recombeeIntegration||function(){(recombeeIntegration.q=recombeeIntegration.q||[]).push(arguments)};recombeeIntegration.l=+new Date;"}</Script>
      <Script id="second-articlesRecommendation">
        {`
        recombeeIntegration({
          type: "SetDefaults",
          databaseId: "kontent-ai-dev",
          publicToken: "A8WBQFrxjfFZVb2Z4qzVcX8nMlSK0Tzst20qEb35ThhY66y4GbXdYydDyS7190y9",
          rapiHostname: "client-rapi.recombee.com:443",
          itemId: "${props.itemId}_${props.languageCodename}"
        });
        recombeeIntegration({
          type: "AddDetailView"
        });
        recombeeIntegration({
          type: "InitializeRecommendationWidget",
          widgetId: "94549e96-ffdc-4706-be40-903cca4350ed",
          rootElementId: "widget-root-94549e96-ffdc-4706-be40-903cca4350ed"
        });
      `}
      </Script>
      <Script type="text/javascript" defer src="https://web-integration.recombee.com/v1/recombee.js"></Script>
      <div id="widget-root-94549e96-ffdc-4706-be40-903cca4350ed"></div>
    </>
  );
};