import { Collection } from "../interface/collection.interface";
import { Photo } from "../interface/photo.interface";

export class Project {
  id: number;
  thumbnail: Photo;
  photos: [Photo];
  title: string;
  sizeWidth: number;
  sizeHeight: number;
  collection: Collection;
  date: Date;
  reference: string;
}
