<template>
  <div
    class="absolute top-0 left-0 right-0 flex justify-between items-center p-4 bg-purple-800 bg-opacity-50"
  >
    <div class="flex space-x-4">
      <UButton
        :label="`🪙 ${resources?.coins || 0}`"
        color="white"
        variant="soft"
        size="xl"
        :padded="false"
      />
      <UButton
        label="🧊 0"
        color="white"
        variant="soft"
        size="xl"
        :padded="false"
      />
      <UButton
        :label="`⌛ ${resources?.coinsEarnedPerHour}`"
        color="white"
        variant="soft"
        size="xl"
        :padded="false"
      />
    </div>

    <div class="flex space-x-2">
      <WalletConnection />
    </div>
  </div>
</template>
<script setup>
defineProps({
  resources: Object,
});
</script>
