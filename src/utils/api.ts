import serverAPIs from "@/data/server-api";
import { pageLimit } from "@/data/server-data";

export async function getBlogs(page: number, filter?: string) {
  try {
    const skip = (page - 1) * pageLimit;
    const limit = pageLimit;
    const apiURL = `${serverAPIs.blogs}?skip=${skip}&limit=${limit}&${filter}`;

    const response = await fetch(apiURL, { cache: "no-store" });
    if (response.ok) {
      const jsonData = await response.json();
      return jsonData || { blogs: [], totalBlogs: 0 };
    }
  } catch (error) {
    console.error(error);
  }
  return { blogs: [], totalBlogs: 0 };
}

export async function getBlogInfo(id: string) {
  try {
    const apiURL = `${serverAPIs.blogs}/${id}`;
    const response = await fetch(apiURL, { cache: "no-store" });
    if (response.ok) {
      const jsonData = await response.json();
      return jsonData || null;
    }
  } catch (error) {
    console.error(error);
  }
  return null;
}

export async function getCategories(limit?: number) {
  try {
    const apiURL = `${serverAPIs.categories}?limit=${limit}`;
    const response = await fetch(apiURL, { cache: "no-store" });
    if (response.ok) {
      const jsonData = await response.json();
      return jsonData;
    }
  } catch (error) {
    console.error(error);
  }
  return [];
}

export async function getCategoryInfo(id?: string) {
  try {
    const apiURL = `${serverAPIs.categories}/${id}`;
    const response = await fetch(apiURL, { cache: "no-store" });
    if (response.ok) {
      const jsonData = await response.json();
      return jsonData;
    }
  } catch (error) {
    console.error(error);
  }
  return [];
}

export async function recentBlogs() {
  try {
    const apiURL = `${serverAPIs.blogs}/recent-blogs`;
    const response = await fetch(apiURL, { cache: "no-store" });
    if (response.ok) {
      const jsonData = await response.json();
      return jsonData;
    }
  } catch (error) {
    console.error(error);
  }
  return [];
}
