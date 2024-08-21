<template>
  <div>
    <UButton
      v-if="!walletAddress"
      label="Connect Wallet"
      @click="connectWallet"
      icon="i-heroicons-cursor-arrow-ripple"
      color="yellow"
      trailing
    />
    <UButton
      @click="handleAccountsChanged([])"
      icon="i-heroicons-finger-print"
      color="yellow"
      trailing
      v-else
      >Connected: {{ walletAddress.slice(0, 8) }}...{{
        walletAddress.slice(-8)
      }}</UButton
    >
  </div>
</template>

<script setup>
const walletAddress = ref(null);

const connectWallet = async () => {
  try {
    // Request account access if needed
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log("Connected to wallet");
    // Save the user's address
    walletAddress.value = accounts[0];
    await $fetch("/api/user", {
      method: "POST",
      body: { address: accounts[0] },
    });
    // Optionally, fetch account details or perform other actions after connecting
  } catch (error) {
    if (error.code === 4001) {
      console.log("User rejected connection request");
      // Handle user rejection (User canceled the connection)
    } else {
      console.error(error);
      // Handle other errors
    }
  }
};

const handleAccountsChanged = (accounts) => {
  if (accounts.length === 0) {
    // User disconnected their wallet
    walletAddress.value = null;
    console.log("Wallet disconnected");
  } else {
    // Update the wallet address
    walletAddress.value = accounts[0];
  }
};

onMounted(() => {
  // Listen for account changes
  window.ethereum.on("accountsChanged", handleAccountsChanged);

  // Check if the user is already connected
  checkIfConnected();
});

// Cleanup listener when component is unmounted
onUnmounted(() => {
  window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
});

async function checkIfConnected() {
  try {
    // Check if the user is already connected
    const accounts = await window.ethereum.request({ method: "eth_accounts" });
    if (accounts.length > 0) {
      walletAddress.value = accounts[0];
    }
  } catch (error) {
    console.error(error);
  }
}
</script>
