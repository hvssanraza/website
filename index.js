const startDate = new Date("2025-02-01"); // Your anniversary date
const now = new Date();
const diffTime = now - startDate;
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
document.getElementById("daysTogether").innerText = `${diffDays} days`;
