// Local storage
export function saveLocalStorage(items) {
  localStorage.setItem("items", JSON.stringify(items));
}

export function getLocalStorage() {
  const stored = localStorage.getItem("items");
  return stored ? JSON.parse(stored) : [];
}
