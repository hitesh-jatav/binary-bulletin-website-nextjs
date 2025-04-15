import serverAPIs from "@/data/server-api";
import { pageLimit } from "@/data/server-data";

export async function getBlogs(page: number, filter?: string) {
  try {
    const skip = (page - 1) * pageLimit;
    const limit = pageLimit;
    const apiURL = `${serverAPIs.blogs}?skip=${skip}&limit=${limit}&${filter}`;

    const response = await fetch(apiURL);
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
    const response = await fetch(apiURL);

    if (!response.ok) {
      console.error(
        `Failed to fetch blog info: ${response.status} ${response.statusText}`
      );
      return null;
    }

    const contentType = response.headers.get("content-type");

    if (contentType && contentType.includes("application/json")) {
      const jsonData = await response.json();
      return jsonData || null;
    } else {
      const text = await response.text();
      console.warn("Expected JSON but got something else:", text);
    }
  } catch (error) {
    console.error("getBlogInfo error:", error);
  }

  return null;
}

export async function getCategories(limit?: number) {
  try {
    const apiURL = `${serverAPIs.categories}?limit=${limit ?? ""}`;
    const response = await fetch(apiURL);

    if (!response.ok) {
      console.error(
        `Error fetching categories: ${response.status} ${response.statusText}`
      );
      return [];
    }

    const contentType = response.headers.get("content-type");

    if (contentType && contentType.includes("application/json")) {
      const jsonData = await response.json();
      return jsonData;
    } else {
      console.warn("Expected JSON but received:", contentType);
    }
  } catch (error) {
    console.error("getCategories error:", error);
  }

  return [];
}

export async function getCategoryInfo(id?: string) {
  try {
    const apiURL = `${serverAPIs.categories}/${id}`;
    const response = await fetch(apiURL);
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
    const response = await fetch(apiURL);
    if (response.ok) {
      const jsonData = await response.json();
      return jsonData;
    }
  } catch (error) {
    console.error(error);
  }
  return [];
}

export async function getCoursesInfo(id?: string) {
  try {
    const apiURL = `${serverAPIs.getCoursesInfo}`;
    const response = await fetch(apiURL);
    if (response.ok) {
      const jsonData = await response.json();
      return jsonData;
    }
  } catch (error) {
    console.error(error);
  }
  return [];
}
