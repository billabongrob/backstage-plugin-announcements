export type Category = {
  slug: string;
  title: string;
};

export type Announcement = {
  id: string;
  category?: Category;
  publisher: string;
  title: string;
  excerpt: string;
  body: string;
  created_at: string;
};

export type AnnouncementsList = {
  count: number;
  results: Announcement[];
};

export type AnnouncementsFilters = {
  max?: number;
  offset?: number;
  category?: string;
};

export type Reactions = {
  id: string;
  announcement_id: string;
  reaction: string;
  user: string;
};
