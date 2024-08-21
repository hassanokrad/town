<template>
  <UModal>
    <UCard>
      <div class="space-y-2">
        <span class="text-4xl">{{ building.icon }}</span>
        <p>Level {{ building.level }}</p>
        <p>Upgrade Cost: {{ building.upgradeCost }} Coins</p>
        <UProgress v-if="building.inProgress" :value="progress" indicator />
        <UButton
          :label="
            building.inProgress
              ? 'In Progress'
              : building.level == 1
              ? 'Build'
              : 'Upgrade'
          "
          :disabled="building.inProgress"
          @click="upgradeBuilding(building)"
        />
      </div>
    </UCard>
  </UModal>
</template>

<script setup>
const props = defineProps({
  building: Object,
});

const { buildings, upgradeBuilding } = useBuildings();

const progress = computed(() => {
  if (!props.building.inProgress) return 0;
  const elapsedTime = Date.now() - props.building.startTime;
  return (elapsedTime / (props.building.buildingTime * 1000)) * 100;
});
</script>
