import { categoriesData } from "@/constants/dummy";

/**
 * ## Example usage:
 * const endTime = new Date().getTime(); // End time in milliseconds \
 * const millisecondsDifference = getMillisecondsDifference(endTime); \
 * console.log(millisecondsDifference);
 */
function getMillisecondsDifference(endTime: number) {
  const startTime: number = Date.now();
  const millisecondsDifference = endTime - startTime;
  return millisecondsDifference;
}

const getNameCategory = (categoryName: string) => {
  const getTitleCate: string =
    categoriesData.find((x) => x.name === categoryName).title || "";
  return getTitleCate;
};

const getEmoji = (categoryName: string) => {
  const getEmoji: Record<string, string> = {
    home: "⚡",
    products: "💻",
    featured: "🖥️",
    accessories: "🖱️",
    gifts: "🎁",
  };
  return getEmoji[categoryName];
};

function fakeApiCall(data: any) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 2000); // Simulate a 2-second delay
  });
}

export { fakeApiCall, getEmoji, getMillisecondsDifference, getNameCategory };
