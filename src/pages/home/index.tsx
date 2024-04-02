import Home from "./Home";
import { multiLazyLoading } from "../../shared/helpers/multiLazyLoading";

export const Root = multiLazyLoading({
  Home,
});
