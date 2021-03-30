export type Type = "article" | "website";

export type OpenGraph = {
  description: string;
  title: string;
  type: Type;
  image?: string;
};
