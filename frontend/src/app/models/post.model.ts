export class Post {
  id!: number;
  title!: string;
  description!: string;
  imageUrl!: string;
  createdDate!: Date;
  like!: number;
  location?: string;
}
