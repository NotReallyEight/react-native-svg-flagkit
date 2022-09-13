export const flagSvgs: {
  code: string;
  region: string;
  component: (props: any) => JSX.Element;
  img: any;
}[];
export function getFlagObjectByCode(code: any): {
  code: string;
  region: string;
  component: (props: any) => JSX.Element;
  img: any;
};
export function getFlagSvgComponentByCode(
  code: string
): (props: any) => (props: any) => JSX.Element;
export function getFlagByDollarCode(dollarCode: string): any;
export { Flag };
import Flag from "./Flag";
