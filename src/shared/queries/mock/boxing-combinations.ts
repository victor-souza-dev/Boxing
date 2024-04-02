import { boxingCombinations } from "src/shared/constants/boxing-combinations";

export interface IResponseData {
  name: string;
  data: Array<string>;
}

export const useGetBoxingCombinations = () => {
  return {
    data: boxingCombinations as IResponseData[] | undefined,
  };
};
