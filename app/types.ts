export type Author = {
  id: number;
  firstName: string;
  lastName: string;
}

export type Post = {
  Id: number;
  Name: string;
  salary: number;
}

export type Query = {
  posts: Post[];
}

export type Mutation = {
  upvotePost: Post;
}
