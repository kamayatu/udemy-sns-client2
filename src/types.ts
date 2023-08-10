export interface Profile {
  id: number;
  bio: String;
  profileImageUrl: String;
  userId: number;
  user: UserType;
}

export interface UserType {
  id: number;
  username: String;
  email: String;
  password: String;
  posts: PostType[];
  profile: Profile;
}

export interface PostType {
  id: number;
  content: string;
  createAt: string;
  authorId: number;
  author: UserType;
}
