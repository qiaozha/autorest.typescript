import { RLCModel } from "./interfaces.js";
// @ts-ignore: to fix the handlebars issue
import hbs from "handlebars";
import { paginateContent } from "./static/paginateContent.js";
import { joinPaths } from "./helpers/pathUtils.js";

export function buildPaginateHelper(model: RLCModel) {
  const pagingInfo = model.helperDetails;
  // return directly if no paging info
  if (!pagingInfo || pagingInfo.hasPaging !== true || !pagingInfo.pageDetails) {
    return;
  }

  hbs.registerHelper(
    "quoteWrap",
    function (value: string | number | boolean | string[]) {
      if (Array.isArray(value)) {
        return value.map((element) => `"${element}"`).join();
      }

      return `"${value}"`;
    }
  );

  const { srcPath } = model;
  const paginateHelperContents = hbs.compile(paginateContent, {
    noEscape: true
  });
  return {
    path: joinPaths(srcPath, "paginateHelper.ts"),
    content: paginateHelperContents(pagingInfo.pageDetails)
  };
}
