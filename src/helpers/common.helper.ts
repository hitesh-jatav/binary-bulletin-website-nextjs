export const sluggify = (name: string) => {
  return name
    .replace(/\s+/g, " ")
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();
};

export function capitalizeFirstLetter(str: string): string {
  if (!str) return str; // Handle empty strings
  return str.charAt(0).toUpperCase() + str.slice(1);
}
