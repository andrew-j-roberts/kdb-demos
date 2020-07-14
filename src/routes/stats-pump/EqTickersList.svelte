<script>
  import { getContext } from "svelte";
  import { solaceContextKey } from "../../components/solace-client";
  import { exchangeFeedStates } from "../../components/stores.js";

  let tickers = {};

  const { getSolaceClient } = getContext(solaceContextKey);
  let solaceClient = getSolaceClient();

  const tickEventHandler = (message) => handleTick(parseTickEvent(message));

  function handleTick(tickEvent) {
    tickers = { ...tickers, [tickEvent.symbol]: tickEvent };
  }

  function parseTickEvent(message) {
    let container = message.getSdtContainer();
    let text = null;
    if (container != null) {
      return container.getValue();
    } else {
      return JSON.parse(message.getBinaryAttachment());
    }
  }

  // runs when either  solaceClient or exchangeFeedStates updates
  $: if ($solaceClient) {
    for (const exchange of Object.keys($exchangeFeedStates)) {
      if ($exchangeFeedStates[exchange]) {
        $solaceClient.subscribe(
          `EQ/marketData/v1/US/${exchange}/>`,
          tickEventHandler
        );
      } else {
        $solaceClient.unsubscribe(`EQ/marketData/v1/US/${exchange}/>`);
      }
    }
  }
</script>

<div class="overflow-x-auto">
  <div
    class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow">
    <table class="min-w-full">
      <thead>
        <tr>
          <th
            class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 border-b border-gray-200 bg-gray-50">
            date
          </th>
          <th
            class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 border-b border-gray-200 bg-gray-50">
            time
          </th>
          <th
            class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 border-b border-gray-200 bg-gray-50">
            symbol
          </th>
          <th
            class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 border-b border-gray-200 bg-gray-50">
            exchange
          </th>
          <th
            class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 border-b border-gray-200 bg-gray-50">
            currency
          </th>
          <th
            class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 border-b border-gray-200 bg-gray-50">
            tradePrice
          </th>
          <th
            class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 border-b border-gray-200 bg-gray-50">
            tradeSize
          </th>
          <th
            class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 border-b border-gray-200 bg-gray-50">
            bidPrice
          </th>
          <th
            class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 border-b border-gray-200 bg-gray-50">
            bidSize
          </th>
          <th
            class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 border-b border-gray-200 bg-gray-50">
            askPrice
          </th>
          <th
            class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 border-b border-gray-200 bg-gray-50">
            askSize
          </th>
        </tr>
      </thead>
      <tbody class="bg-white">
        {#each Object.keys(tickers) as ticker}
          <tr>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              {tickers[ticker].date}
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              {tickers[ticker].time}
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              {tickers[ticker].symbol}
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              {tickers[ticker].exchange}
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              {tickers[ticker].currency}
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              {tickers[ticker].tradePrice}
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              {tickers[ticker].tradeSize}
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              {tickers[ticker].bidPrice}
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              {tickers[ticker].bidSize}
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              {tickers[ticker].askPrice}
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              {tickers[ticker].askSize}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
