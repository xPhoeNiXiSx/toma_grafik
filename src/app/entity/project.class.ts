import { Collection } from "../interface/collection.interface";
import { Photo } from "../interface/photo.interface";

export class Project {
  id: number;
  title: string;
  photos: [Photo];
  black: boolean;
  sizeWidth: number;
  sizeHeight: number;
  collection: string;
  date: Date;
  reference: string;
  thumbnail: Photo;
}
