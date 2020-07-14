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
  <div class="flex flex-col p-4 max-w-screen">
    <Header />
    <div class="flex flex-col mt-4 md:flex-row md:mt-0">
      <div class="flex-shrink-0">
        <ConnectionForm />
      </div>
      <div
        class="flex-grow my-4 overflow-x-auto bg-white rounded-lg shadow md:mt-0 md:ml-4">
        <ExchangesPanel />
        <EqTickersList />
      </div>
    </div>
  </div>
</main>
