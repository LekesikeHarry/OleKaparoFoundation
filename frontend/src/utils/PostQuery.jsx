import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const usePostsQuery = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      axios.get("http://localhost:4000/api/posts").then((res) => res.data),
  });
};

export default usePostsQuery;
