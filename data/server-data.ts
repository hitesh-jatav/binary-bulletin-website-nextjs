export const serverDomain: string = process.env.NEXT_PUBLIC_SERVER_DOMAIN || "";

export const pageLimit: number = Number(
  process.env.NEXT_PUBLIC_PAGINATION_LIMIT || 15
);

export const blogUrl: string = process.env.NEXT_PUBLIC_BLOG_URL || "";

export const contactEmail: string = process.env.PUBLIC_CONTACT_EMAIL || "";

export const siteName: string = process.env.PUBLIC_SITE_NAME || "";
