<!--
Minimal base layout with header and footer only.

Use for cases where full-width styling is required.
-->
<template>
  <div class="w-full">
    <FfHeader />
    <main>
      <slot />
    </main>
    <FfFooter />
  </div>
</template>
