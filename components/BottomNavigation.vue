<template>
  <div
    class="absolute bottom-0 left-0 right-0 flex justify-around items-center p-4 bg-purple-800 bg-opacity-50"
  >
    <UButton
      v-for="item in navItems"
      color="white"
      variant="soft"
      :label="`${item.icon} ${item.label}`"
    />
  </div>
</template>
<script setup>
const navItems = [
  { icon: "💰", label: "Earn" },
  { icon: "✅", label: "Tasks" },
  { icon: "🏙️", label: "Town" },
  { icon: "🔄", label: "Swap" },
  { icon: "👤", label: "Account" },
];
</script>
