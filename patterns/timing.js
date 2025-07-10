export function isSongInPlaylist(playlist, song) {
  for (const songInPlaylist of playlist) {
    if (songInPlaylist === song) return true;
  }
  return false;
}

export function isAllEven(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) return undefined;
  for (let num of numbers) {
    if (num % 2 !== 0) return false;
  }
  return true;
}

export function haveEnoughFood(backpack, people) {
  let foodCount = 0;
  for (let item of backpack) {
    if (item.category === "food") foodCount++;
    if (foodCount >= people) return true;
  }
  return false;
}
