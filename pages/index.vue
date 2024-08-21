<template>
  <div class="relative w-full h-screen bg-purple-900 overflow-hidden font-sans">
    <StatusBar :resources />

    <!-- Isometric City View -->
    <div
      class="absolute inset-0 mt-16 bg-gradient-to-tl from-purple-600 to-violet-700"
    >
      <div
        v-for="building in buildings"
        class="absolute"
        :style="building.style"
      >
        <div class="w-24 h-24 relative">
          <!-- <UChip text="Sale" size="2xl" color="red" :show="!!building.sale">
          </UChip> -->
            <UButton
              color="white"
              variant="soft"
              :label="building.icon"
              size="xl"
              :class="{ 'blur-md': building.sale, 'text-6xl': true }"
              @click="!building.sale ? modal.open(Building, {building}): false"
            />
        </div>
      </div>
    </div>

    <BottomNavigation />
  </div>
</template>

<script setup>
import { Building } from "#components";

const { buildings, resources, upgradeBuilding } = useBuildings()
const modal = useModal();
const toast = useToast();


</script>
