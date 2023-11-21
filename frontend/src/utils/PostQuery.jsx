import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const usePostsQuery = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      axios
        .get("https://ole-kaparo-foundation-backend.vercel.app/api/posts")
        .then((res) => res.data),
  });
};

export default usePostsQuery;
