export const useBuildings = () => {
  const buildings = ref([{
    icon: "🏢",
    style: { top: "70%", left: "40%" },
    sale: false,
    level: 1,
    upgradeCost: 150,
    buildingTime: 15,
    inProgress: false,
    startTime: null,
    prerequisite: null // Requires level 1 of the "🏢" building
  },
  {
    icon: "🏪",
    style: { top: "30%", left: "60%" },
    sale: true,
    level: 1,
    upgradeCost: 200,
    buildingTime: 20,
    inProgress: false,
    startTime: null,
    prerequisite: null // Requires level 1 of the "🏛️" building
  },
  {
    icon: "🏨",
    style: { top: "50%", left: "80%" },
    sale: true,
    level: 1,
    upgradeCost: 300,
    buildingTime: 25,
    inProgress: false,
    startTime: null,
    prerequisite: null // Requires level 1 of the "🏗️" building
  },
  {
    icon: "🏛️",
    style: { top: "60%", left: "20%" },
    sale: true,
    level: 1,
    upgradeCost: 400,
    buildingTime: 30,
    inProgress: false,
    startTime: null,
    prerequisite: null // Requires level 1 of the "🎡" building
  },
  {
    icon: "🏫",
    style: { top: "40%", left: "10%" },
    sale: true,
    level: 1,
    upgradeCost: 500,
    buildingTime: 35,
    inProgress: false,
    startTime: null,
    prerequisite: null // Requires level 2 of the "🏠" building
  },
  {
    icon: "🏭",
    style: { top: "80%", left: "70%" },
    sale: true,
    level: 1,
    upgradeCost: 600,
    buildingTime: 40,
    inProgress: false,
    startTime: null,
    prerequisite: null // Requires level 1 of the "🏫" building
  }])

  const resources = reactive({
    coins: 1000,
    // Add other resources here
  })

  const upgradeBuilding = (building) => {
    if (building.sale) return
    if (resources.coins >= building.upgradeCost) {
      building.inProgress = true
      building.startTime = Date.now()
      const interval = setInterval(() => {
        const progress = ((Date.now() - building.startTime) / (building.buildingTime * 1000)) * 100
        if (progress >= 100) {
          clearInterval(interval)
          building.level += 1
          building.upgradeCost *= 1.5
          building.buildingTime = Math.round(building.buildingTime * 1.5)
          building.inProgress = false
          resources.coins -= building.upgradeCost
        }
      }, 100)
    } else {
      useToast().add({ title: "Not enough resources!", color: "red" })
    }
  }

  return {
    buildings,
    resources,
    upgradeBuilding
  }
}