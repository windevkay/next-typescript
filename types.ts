export interface BlogProps {
  allPostsData: {
    id: string;
    date: string;
    title: string;
  }[];
}

export interface PostData {
  postData: {
    id: string;
    date: string;
    title: string;
  };
}
