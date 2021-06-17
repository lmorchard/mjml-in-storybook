import { MJMLParsingOptions } from "mjml-core";
import mjml2html from "mjml";

export function mjml(strings: string[], ...values: string[]) {
  const text = strings
    .reduce(
      (result, string, idx) =>
        result + string + (values[idx] ? values[idx] : ""),
      ""
    )
    .trim();
  return (options: MJMLParsingOptions = {}) => mjml2html(text, options);
}

export default mjml;
