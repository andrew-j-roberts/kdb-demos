<script>
  import { exchangeFeedStates } from "../../components/stores.js";
  import UsFlag from "./icons/UsFlag.svelte";

  function toggle(exchange) {
    $exchangeFeedStates[exchange] = !$exchangeFeedStates[exchange];
  }
</script>

<div class="px-4 py-5 mt-2 overflow-hidden bg-white rounded-lg shadow sm:p-6">
  <h2 class="text-xl text-gray-900 sm:text-2xl">Subscribe to exchange feeds</h2>
  <div class="flex mt-2">
    <button
      on:click={() => toggle('NASDAQ')}
      role="checkbox"
      aria-checked="false"
      class={`inline-flex items-center p-2 mr-2 border-2 rounded-md shadow-sm cursor-pointer focus:outline-none focus:shadow-outline ${$exchangeFeedStates['NASDAQ'] ? 'bg-blue-100 border-blue-500' : ''}`}>
      <div class="flex-shrink-0 w-10 h-10 mr-2">
        <UsFlag />
      </div>
      <div
        class={$exchangeFeedStates['NASDAQ'] ? 'text-blue-700' : 'text-gray-700'}>
        NASDAQ
      </div>
    </button>
    <button
      on:click={() => toggle('NYSE')}
      role="checkbox"
      aria-checked="false"
      class={`inline-flex items-center p-2 mr-2 border-2 rounded-md shadow-sm cursor-pointer focus:outline-none focus:shadow-outline ${$exchangeFeedStates['NYSE'] ? 'bg-blue-100 border-blue-500' : ''}`}>
      <div class="flex-shrink-0 w-10 h-10 mr-2">
        <UsFlag />
      </div>
      <div
        class={$exchangeFeedStates['NYSE'] ? 'text-blue-700' : 'text-gray-700'}>
        NYSE
      </div>
    </button>
  </div>
</div>
