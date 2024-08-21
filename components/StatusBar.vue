<template>
  <div
    class="absolute top-0 left-0 right-0 flex justify-between items-center p-4 bg-purple-800 bg-opacity-50"
  >
    <div class="flex space-x-4">
      <UButton
        :label="`🪙 ${resources?.coins}`"
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
        label="🚗 0"
        color="white"
        variant="soft"
        size="xl"
        :padded="false"
      />
      <UButton
        label="🌙 14"
        color="white"
        variant="soft"
        size="xl"
        :padded="false"
      />
    </div>

    <div class="flex space-x-2">
      <UButton label="Legendary" />
      <UButton label="Connect Wallet" />
    </div>
  </div>
</template>
<script setup>

const { resources } = useBuildings()

</script>
