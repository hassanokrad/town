export default defineEventHandler(async (event) => {
  // Load game state
  const gameState = await useStorage().getItem("gameState");
  return gameState || { error: "No saved game state found" };
});
