import { serverDomain } from "./server-data";

const serverAPIs = {
  blogs: `${serverDomain}/api/blogs`,
  categories: `${serverDomain}/api/category`,
  getCoursesInfo: `${serverDomain}/api/course/all-list`,
};

export default serverAPIs;
