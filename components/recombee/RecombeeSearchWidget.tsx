"use client";

import Script from "next/script";

export const RecombeeSearchWidget = () => (
  <>
    <Script id="first">{"window.recombeeIntegration=window.recombeeIntegration||function(){(recombeeIntegration.q=recombeeIntegration.q||[]).push(arguments)};recombeeIntegration.l=+new Date;"}</Script>
    <Script id="second">{`
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