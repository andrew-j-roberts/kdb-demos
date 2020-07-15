<script>
  import { exchangeFeedStates } from "../../components/stores.js";
  import UsFlag from "./icons/UsFlag.svelte";
  import UkFlag from "./icons/UkFlag.svelte";
  import SingaporeFlag from "./icons/SingaporeFlag.svelte";

  function toggle(exchange) {
    $exchangeFeedStates[exchange] = !$exchangeFeedStates[exchange];
  }
</script>

<div
  class="w-full px-4 py-5 mt-2 overflow-hidden bg-white rounded-lg shadow sm:p-6">
  <h2 class="text-xl text-gray-900 sm:text-2xl">Subscribe to exchange feeds</h2>
  <div class="flex flex-wrap max-w-full mt-2">
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
    <button
      on:click={() => toggle('LSE')}
      role="checkbox"
      aria-checked="false"
      class={`inline-flex items-center p-2 mr-2 border-2 rounded-md shadow-sm cursor-pointer focus:outline-none focus:shadow-outline ${$exchangeFeedStates['LSE'] ? 'bg-blue-100 border-blue-500' : ''}`}>
      <div class="flex-shrink-0 w-10 h-10 mr-2">
        <UkFlag />
      </div>
      <div
        class={$exchangeFeedStates['LSE'] ? 'text-blue-700' : 'text-gray-700'}>
        LSE
      </div>
    </button>
    <button
      on:click={() => toggle('SGX')}
      role="checkbox"
      aria-checked="false"
      class={`md:mt-2 inline-flex items-center p-2 mr-2 border-2 rounded-md shadow-sm cursor-pointer focus:outline-none focus:shadow-outline ${$exchangeFeedStates['SGX'] ? 'bg-blue-100 border-blue-500' : ''}`}>
      <div class="flex-shrink-0 w-10 h-10 mr-2">
        <SingaporeFlag />
      </div>
      <div
        class={$exchangeFeedStates['SGX'] ? 'text-blue-700' : 'text-gray-700'}>
        SGX
      </div>
    </button>
  </div>
</div>
