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
          <UTooltip :text="`${building.name} (${building.level})`">
            <UButton
              color="white"
              variant="soft"
              :label="building.icon"
              size="xl"
              :class="{ 'blur-md': building.upgradable, 'text-6xl': true }"
              @click="
                !building.upgradable
                  ? modal.open(Building, { building })
                  : toast.add({
                      title: `${building.name} Not yet buildable.`,
                      color: 'red',
                      avatar: { text: building.icon },
                    })
              "
            />
          </UTooltip>
        </div>
      </div>
    </div>

    <BottomNavigation />
  </div>
</template>

<script setup>
import { Building } from "#components";

const { buildings } = useBuildings();
const modal = useModal();
const toast = useToast();
const { data: resources } = await useFetch("/api/coins", {
  method: "GET",
  server: false,
});
</script>
