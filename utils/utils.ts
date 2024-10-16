function generateRandomString(length: number) {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let randomString = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    randomString += charset.charAt(randomIndex);
  }
  return randomString;
}
function formartMoneyVND(value: number) {
  const newValue = String(value);
  if (newValue.length > 3) {
    return value.toLocaleString("en-us", {
      minimumFractionDigits: 3,
    });
  } else {
    return value;
  }
}

export { formartMoneyVND, generateRandomString };
