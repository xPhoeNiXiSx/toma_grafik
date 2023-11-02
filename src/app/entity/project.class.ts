import { Photo } from "./photo.class";

export class Project {
  id: number;
  title: string;
  collection: string;
  price: string;
  link: string;
  photos: [Photo];
  black: boolean;
  sizeWidth: number;
  sizeHeight: number;
  date: Date;
  reference: string;
  thumbnail: Photo;
}
