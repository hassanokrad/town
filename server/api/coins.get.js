export default defineEventHandler(async (event) => {
  // Fetch current user coins and earned per hour
  let { coins, coinsEarnedPerHour } = await useStorage().getItem("userCoins") || {
    coins: 1000,
    coinsEarnedPerHour: 10,
  };

  // Update coins every second
  setInterval(async () => {
    const secondsPerHour = 3600;
    const coinsEarned = (coinsEarnedPerHour / secondsPerHour) * 1;
    coins += coinsEarned;
    await useStorage().setItem("userCoins", { coins, coinsEarnedPerHour });
  }, 1000);

  return { coins, coinsEarnedPerHour };
});