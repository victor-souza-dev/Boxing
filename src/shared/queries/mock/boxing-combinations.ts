import { useQuery } from "@tanstack/react-query";

import { mockApi } from "src/shared/services/mockApi";

export interface IResponseData {
  name: string;
  data: Array<string>;
}

function get() {
  return mockApi.get("/boxing-combinations.json");
}

export const useGetBoxingCombinations = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["getBoxingCombinations"],
    queryFn: get,
  });

  return {
    data: data?.data?.data as IResponseData[] | undefined,
    isLoading,
  };
};
