<template>
  <UModal>
    <UCard>
      <div class="space-y-4">
        <span class="text-8xl cursor-pointer">
          {{ building.icon }}
        </span>

        <p>Level {{ building.level }}</p>
        <p>Upgrade Cost: {{ building.upgradeCost }} Coins</p>
        <div v-if="building.inProgress">
          <UProgress :value="progress" color="yellow">
            <template #indicator="{ percent }">
              <div class="text-right text-sm" :style="{ width: `${percent}%` }">
                {{ timeLeft }}</div>
            </template>
          </UProgress>
        </div>
        <UButton
          :label="
              building.level == 1
              ? 'Build'
              : 'Upgrade'
          "
          color="yellow"
          :disabled="building.inProgress"
          @click="upgradeBuilding(building); startProgressUpdate()"
        />
      </div>
    </UCard>
  </UModal>
</template>

<script setup>
const props = defineProps({
  building: Object,
});

const { upgradeBuilding } = useBuildings();

const progress = ref(0);
const timeLeft = ref('');

let interval;

const startProgressUpdate = () => {
  interval = setInterval(() => {
    const elapsedTime = Date.now() - props.building.startTime;
    progress.value = (elapsedTime / (props.building.buildingTime * 1000)) * 100;
    updateTimeLeft(props.building.buildingTime - elapsedTime / 1000);
    if (progress.value >= 100) {
      clearInterval(interval);
    }
  }, 100);
};

const updateTimeLeft = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secondsLeft = Math.floor(seconds % 60);
  timeLeft.value = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secondsLeft.toString().padStart(2, '0')}`;
};
</script>