import { User } from './user.model';
import { Post } from './post.model';

export class Comment {
  constructor(
    public _id: string,
    public text: string,
    public post: Post,
    public user: User,
  ) {}
}

export interface CommentData {
  text: string;
  post: string,
}
