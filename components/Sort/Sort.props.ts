import { Rating } from '../Rating/Rating';
import {
  DetailedHTMLProps,
  HTMLAttributes,
  HTMLParagraphElement,
  ReactNode,
} from "react";

export interface SortProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    sort: SortEnum;
    setSort: (sort: SortEnum) => void;
  }
export enum SortEnum {
  Rating,
  Price
}
