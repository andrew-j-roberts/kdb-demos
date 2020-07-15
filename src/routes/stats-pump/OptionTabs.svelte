<script>
  export let focusedOption;

  function setFocusedOption(option) {
    focusedOption = option;
  }
</script>

<div class="block px-2">
  <div class="border-b border-gray-200">
    <nav class="flex -mb-px">
      <button
        on:click={() => setFocusedOption('TICKERS')}
        class={`${focusedOption == 'TICKERS' ? 'text-blue-600  focus:text-blue-800 focus:border-blue-700 border-blue-500' : 'text-gray-500  hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300'} inline-flex items-center px-1 py-4 text-sm font-medium leading-5 border-b-2 border-transparent group focus:outline-none`}>
        <svg
          class={`${focusedOption == 'TICKERS' ? 'text-blue-600 focus:text-blue-800 focus:border-blue-700 border-blue-500' : 'text-gray-400 group-hover:text-gray-500 group-focus:text-gray-600'} -ml-0.5 mr-2 h-5 w-5`}
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2
            0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011
            1v5m-4 0h4" />
        </svg>
        <span>Tickers</span>
      </button>
      <button
        on:click={() => setFocusedOption('STATS')}
        class={`${focusedOption == 'STATS' ? 'text-blue-600  focus:text-blue-800 focus:border-blue-700 border-blue-500' : 'text-gray-500  hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300'} inline-flex items-center px-1 py-4 text-sm font-medium leading-5 border-b-2 border-transparent group focus:outline-none ml-2`}>
        <svg
          class={`${focusedOption == 'STATS' ? 'text-blue-600 focus:text-blue-800 focus:border-blue-700 border-blue-500' : 'text-gray-400 group-hover:text-gray-500 group-focus:text-gray-600'} -ml-0.5 mr-2 h-5 w-5`}
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0
            00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span>Stats</span>
      </button>
    </nav>
  </div>
</div>
