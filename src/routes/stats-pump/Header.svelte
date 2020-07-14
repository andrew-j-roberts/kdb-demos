<script>
  import StatsPumpLogo from "../../components/logos/StatsPumpLogo.svelte";
</script>

<div class="flex items-center">
  <div class="h-32 mr-3">
    <StatsPumpLogo />
  </div>
  <div class="flex flex-col">
    <h1
      class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
      Stats Pump Demo
    </h1>
    <p>
      Real-time market data analytics powered by
      <a
        class="text-blue-500 hover:text-blue-800"
        href="https://solace.com/try-it-now/">
        Solace PubSub+
      </a>
      and
      <a
        class="text-blue-500 hover:text-blue-800"
        href="https://kx.com/connect-with-us/developers/">
        kdb+
      </a>
    </p>
  </div>

</div>
