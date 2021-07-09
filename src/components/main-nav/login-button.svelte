<a
  href="https://gitpod.io/login/"
  on:click={() =>
    window.analytics.track("dashboard_clicked", {
      context: "header_button",
    })}
  class="flex items-center justify-center h-8 w-20 rounded-xl bg-black font-bold text-off-white text-sm focus:text-off-white focus:bg-black-hover hover:text-off-white hover:bg-black-hover"
>
  Login
</a>
