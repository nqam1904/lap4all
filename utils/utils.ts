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

function isEmptyObject(obj: any) {
  const errors = [];

  // Check for empty object
  if (Object.keys(obj).length === 0) {
    errors.push("Object is empty");
  }

  // Validate properties
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];

      // Check for empty strings
      if (typeof value === "string" && value.trim() === "") {
        errors.push(`Property "${key}" is empty`);
      }

      // Check for empty arrays
      if (Array.isArray(value) && value.length === 0) {
        errors.push(`Property "${key}" is an empty array`);
      }

      // Recursively validate nested objects and arrays
      if (typeof value === "object" && value !== null) {
        const nestedErrors: any = isEmptyObject(value);
        errors.push(...nestedErrors);
      }
    }
  }
  return errors;
}

export { generateRandomString, isEmptyObject };
