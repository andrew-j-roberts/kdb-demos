<script>
  import { onMount, setContext } from "svelte";
  import { writable } from "svelte/store";
  import { solaceContextKey } from "../../components/solace-client";
  import ConnectionForm from "../../components/ConnectionForm.svelte";
  import ExchangesPanel from "./ExchangesPanel.svelte";
  import OptionTabs from "./OptionTabs.svelte";
  import EqTickersList from "./EqTickersList.svelte";
  import EqStatsList from "./EqStatsList.svelte";

  // app level solace client
  let solaceClient = writable(null);
  setContext(solaceContextKey, {
    getSolaceClient: () => solaceClient,
  });

  let focusedOption = "TICKERS";
</script>

<main>
  <div class="flex flex-col h-screen p-4 max-w-screen md:flex-row">
    <div class="flex-shrink-0 w-full md:max-w-md">
      <ConnectionForm />
      <ExchangesPanel />
    </div>
    <div
      class="flex-grow my-4 overflow-x-auto bg-white rounded-lg shadow md:mt-0 md:ml-4">
      <OptionTabs bind:focusedOption />
      {#if focusedOption == 'TICKERS'}
        <EqTickersList />
      {/if}
      {#if focusedOption == 'STATS'}
        <EqStatsList />
      {/if}

    </div>
  </div>
</main>
