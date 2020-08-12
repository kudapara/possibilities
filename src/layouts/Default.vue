<template>
  <div class="leading-normal tracking-normal text-gray-900 overflow-x-hidden" style="font-family: 'Inter', sans-serif;">
    <!-- Higglight the app of the month --> 
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
/* @import url('https://rsms.me/inter/inter.css'); */
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Sansita:wght@400;900&display=swap');
html {font-family: 'Inter', sans-serif; }
@supports (font-variation-settings: normal) {
  html { font-family: 'Inter var', sans-serif; }
}

.nav__link {
  @apply mr-4 font-medium text-indigo-600 underline
}

</style>
