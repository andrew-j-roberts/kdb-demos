<script>
  import { onMount, setContext } from "svelte";
  import { writable } from "svelte/store";
  import { solaceContextKey } from "../../components/solace-client";
  import Header from "./Header.svelte";
  import ConnectionForm from "../../components/ConnectionForm.svelte";
  import ExchangesPanel from "./ExchangesPanel.svelte";
  import EqTickersList from "./EqTickersList.svelte";

  // app level solace client
  let solaceClient = writable(null);
  setContext(solaceContextKey, {
    getSolaceClient: () => solaceClient,
  });
</script>

<main>
  <div class="flex flex-col h-screen p-4 max-w-screen md:flex-row">
    <div class="flex-shrink-0">
      <ConnectionForm />
      <ExchangesPanel />
    </div>
    <div
      class="flex-grow my-4 overflow-x-auto bg-white rounded-lg shadow md:mt-0 md:ml-4">
      <EqTickersList />
    </div>
  </div>
</main>
