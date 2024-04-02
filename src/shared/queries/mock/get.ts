import { useQuery } from "@tanstack/react-query";

import { IMockData } from "src/shared/constants/Interfaces/Mock";
import { mockApi } from "src/shared/services/mockApi";

function get() {
  return mockApi.get("/Mock.json");
}

export const useMockGet = () => {
  const { data, isLoading } = useQuery({ queryKey: ["getMock"], queryFn: get });

  return {
    data: data?.data?.data as IMockData[] | undefined,
    isLoading,
  };
};
