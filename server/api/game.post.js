export default defineEventHandler(async (event) => {
  // Save game state
  const body = await readBody(event);
  await useStorage().setItem("gameState", body);
  return { message: "Game state saved successfully" };
});
