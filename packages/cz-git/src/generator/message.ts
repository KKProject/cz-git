/**
 * @description: generate commit message(generateMessage)
 * @author: @Zhengqbbb (zhengqbbb@gmail.com)
 * @license: MIT
 */

import {
  Answers,
  CommitizenGitOptions,
  getCurrentScopes,
  handleStandardScopes,
  isSingleItem
} from "../shared";
import { wrap } from "../shared";

const getSingleParams = (answers: Answers, options: CommitizenGitOptions) => {
  const singleIndex = 0;
  const mapping = {
    singleScope: "",
    singeIssuePrefix: ""
  };
  const scopeList = handleStandardScopes(
    getCurrentScopes(options.scopes, options.scopeOverrides, answers.type)
  );
  if (isSingleItem(options.allowCustomScopes, options.allowEmptyScopes, scopeList)) {
    mapping.singleScope = scopeList[singleIndex].value;
  }
  // eslint-disable-next-line prettier/prettier
  if (isSingleItem(options.allowCustomIssuePrefixs, options.allowEmptyIssuePrefixs, options.issuePrefixs)) {
    mapping.singeIssuePrefix = options.issuePrefixs?.[singleIndex].value || "";
  }
  return mapping;
};

const addType = (type: string, colorize?: boolean) =>
  colorize ? `\u001B[32m${type}\u001B[0m` : type;

const addScope = (scope?: string, colorize?: boolean) => {
  const separator = ":";
  if (!scope) return separator;
  scope = colorize ? `\u001B[33m${scope}\u001B[0m` : scope;
  return `(${scope.trim()})${separator}`;
};

const addEmoji = (type: string, options: CommitizenGitOptions): string => {
  if (options.useEmoji && type !== "") {
    const itemSource = options.types?.concat(options.typesAppend || []) || [];
    const item = itemSource.find((i) => i.value === type);
    return item?.emoji ? ` ${item.emoji} ` : " ";
  } else {
    return " ";
  }
};

const addSubject = (subject?: string, colorize?: boolean) => {
  if (!subject) return "";
  subject = colorize ? `\u001B[36m${subject}\u001B[0m` : subject;
  return subject.trim();
};

const addFooter = (footer: string, footerPrefix = "", colorize?: boolean) => {
  if (footerPrefix === "") {
    return colorize ? `\n\n\u001B[32m${footer}\u001B[0m` : `\n\n${footer}`;
  }
  return colorize
    ? `\n\n\u001B[32m${footerPrefix} ${footer}\u001B[0m`
    : `\n\n${footerPrefix} ${footer}`;
};

export const generateMessage = (
  answers: Answers,
  options: CommitizenGitOptions,
  colorize = false
) => {
  const wrapOptions = {
    breaklineChar: options.breaklineChar || "|",
    trim: true,
    newLine: "\n",
    indent: "",
    width: options.breaklineNumber
  };
  const { singleScope, singeIssuePrefix } = getSingleParams(answers, options);
  const head =
    addType(answers.type ?? "", colorize) +
    addScope(singleScope || answers.scope, colorize) +
    addEmoji(answers.type ?? "", options) +
    addSubject(answers.subject, colorize);
  const body = wrap(answers.body ?? "", wrapOptions);
  const breaking = wrap(answers.breaking ?? "", wrapOptions);
  const footer = wrap(answers.footer ?? "", wrapOptions);

  let result = head;
  if (body) {
    result += `\n\n${body}`;
  }
  if (breaking) {
    result += `\n\nBREAKING CHANGE :\n${breaking}`;
  }
  if (footer) {
    result += addFooter(footer, answers.footerPrefix || singeIssuePrefix, colorize);
  }
  return result;
};