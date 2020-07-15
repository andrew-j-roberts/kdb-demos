<script>
  import { getContext } from "svelte";
  import { solaceContextKey } from "../../components/solace-client";
  import { exchangeFeedStates, stats } from "../../components/stores.js";

  const { getSolaceClient } = getContext(solaceContextKey);
  let solaceClient = getSolaceClient();

  const statsTickEventHandler = (message) =>
    handleStatsTick(parseStatsTickEvent(message));

  function handleStatsTick(statsTickEvent) {
    $stats = { ...$stats, [statsTickEvent.sym]: statsTickEvent };
  }

  function parseStatsTickEvent(message) {
    console.log(message.getBinaryAttachment().slice(1, -1));
    let container = message.getSdtContainer();
    let text = null;
    if (container != null) {
      return JSON.parse(container.getValue().slice(1, -1));
    } else {
      console.log(message.getBinaryAttachment().slice(1, -1));
      return JSON.parse(message.getBinaryAttachment().slice(1, -1));
    }
  }

  const something = [
    {
      date: "2020-06-08",
      sym: "XOM",
      time: "15:54",
      lowAskSize: 100,
      highAskSize: 630,
      lowBidPrice: 45.00016,
      highBidPrice: 46.67166,
      lowBidSize: 80,
      highBidSize: 620,
      lowTradePrice: 45.34021,
      highTradePrice: 46.9059,
      lowTradeSize: 60,
      highTradeSize: 490,
      lowAskPrice: 45.62594,
      highAskPrice: 47.43359,
      vwap: 332.7994,
    },
  ];

  // runs when either  solaceClient or exchangeFeedStates updates
  $: if ($solaceClient) {
    $solaceClient.subscribe(`EQ/stats/>`, statsTickEventHandler);
  }
</script>

<div class="flex flex-col">
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
              sym
            </th>
            <th
              class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 border-b border-gray-200 bg-gray-50">
              time
            </th>
            <th
              class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 border-b border-gray-200 bg-gray-50">
              lowAskSize
            </th>
            <th
              class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 border-b border-gray-200 bg-gray-50">
              highAskSize
            </th>
            <th
              class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 border-b border-gray-200 bg-gray-50">
              lowBidPrice
            </th>
            <th
              class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 border-b border-gray-200 bg-gray-50">
              highBidPrice
            </th>
            <th
              class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 border-b border-gray-200 bg-gray-50">
              lowBidSize
            </th>
            <th
              class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 border-b border-gray-200 bg-gray-50">
              highBidSize
            </th>
            <th
              class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 border-b border-gray-200 bg-gray-50">
              lowTradePrice
            </th>
            <th
              class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 border-b border-gray-200 bg-gray-50">
              highTradePrice
            </th>
            <th
              class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 border-b border-gray-200 bg-gray-50">
              lowTradeSize
            </th>
            <th
              class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 border-b border-gray-200 bg-gray-50">
              highTradeSize
            </th>
            <th
              class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 border-b border-gray-200 bg-gray-50">
              lowAskPrice
            </th>
            <th
              class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 border-b border-gray-200 bg-gray-50">
              highAskPrice
            </th>
            <th
              class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 border-b border-gray-200 bg-gray-50">
              vwap
            </th>
          </tr>
        </thead>
        <tbody class="bg-white">
          {#each Object.keys($stats) as stat}
            <tr>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {$stats[stat].date}
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {$stats[stat].sym}
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {$stats[stat].time}
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {$stats[stat].lowAskSize}
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {$stats[stat].highAskSize}
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {$stats[stat].lowBidPrice}
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {$stats[stat].highBidPrice}
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {$stats[stat].lowBidSize}
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {$stats[stat].highBidSize}
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {$stats[stat].lowTradePrice}
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {$stats[stat].highTradePrice}
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {$stats[stat].lowTradeSize}
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {$stats[stat].highTradeSize}
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {$stats[stat].lowAskPrice}
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {$stats[stat].highAskPrice}
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {$stats[stat].vwap}
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</div>
