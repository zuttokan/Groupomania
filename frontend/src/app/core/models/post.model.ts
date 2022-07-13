export class Post {
  id!: number;
  title!: string;
  description!: string;
  picture!: string;
  createdDate!: Date;
  like!: number;
  location?: string;
}
