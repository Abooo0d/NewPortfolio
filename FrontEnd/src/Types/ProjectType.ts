export interface Project {
  _createdAt: string;
  _id: string;
  _rev: string;
  _system: System;
  _type: string;
  _updatedAt: string;
  createdAt: string;
  desc: string;
  description: string;
  gallery: Gallery[];
  githubUrl: string;
  liveUrl: string;
  mainImage: MainImage;
  slug: Slug;
  techs: string[];
  title: string;
  type: string;
}

interface Slug {
  _type: string;
  current: string;
}

interface MainImage {
  _type: string;
  asset: Asset;
}

interface Gallery {
  _key: string;
  _type: string;
  asset: Asset;
}

interface Asset {
  _ref: string;
  _type: string;
}

interface System {
  base: Base;
}

interface Base {
  id: string;
  rev: string;
}