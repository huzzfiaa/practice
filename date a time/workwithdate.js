function checkCoupon() {
  // Coupon issue date (start date)
  let startDate = new Date("2025-09-08");

  // Expiry date = start date + 7 days
  let expiryDate = new Date(startDate.getTime() + 7 * 24 * 60 * 60 * 1000);

  // Current date
  let now = Date.now();

  // Compare
  if (now > expiryDate.getTime()) {
    console.log("❌ Coupon expired!");
  } else {
    console.log("✅ Coupon is still valid!");
  }

  // Debug info
  console.log("Start:", startDate.toLocaleString());
  console.log("Expiry:", expiryDate.toLocaleString());
  console.log("Now:", new Date(now).toLocaleString());
}

checkCoupon();
