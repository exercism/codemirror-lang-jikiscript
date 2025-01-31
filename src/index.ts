import { parser } from "./syntax.grammar";
import { LRLanguage, LanguageSupport } from "@codemirror/language";
import { indentNodeProp, foldNodeProp, foldInside } from "@codemirror/language";
import { styleTags, tags as t } from "@lezer/highlight";

const addIndent = (context: any) =>
  context.lineIndent(context.node.from) + context.unit; // Indent for function body
const removeIndent = (context: any) => context.lineIndent(context.node.from);

export const jikiscriptLanguage = LRLanguage.define({
  name: "jikiscript",
  parser: parser.configure({
    strict: false, // Toggle for sanity!
    props: [
      styleTags({
        String: t.string,
        Boolean: t.bool,
        LineComment: t.lineComment,
        Integer: t.number,
        Floating: t.float,
        "repeat repeat_until_game_over repeat_forever": t.controlKeyword,
        "if else do end log": t.controlKeyword,
        "function set change": t.definitionKeyword,
        "with to": t.keyword,
        "and or": t.logicOperator,
        "return": t.keyword,
        ArithOp: t.arithmeticOperator,
        CompareOp: t.compareOperator,
        "> < >= <= ==": t.operator,
        Identifier: t.variableName,
        ArgumentList: t.variableName,
        "( )": t.paren,
        "[ ]": t.squareBracket
      }),

      indentNodeProp.add({
        FunctionDefinition: addIndent,
        IfStatement: addIndent,
        ElseStatement: addIndent,
        RepeatStatement: addIndent,
        RepeatUntilGameOverStatement: addIndent,
        statement: addIndent, // Indent for nested statements
        EndStatement: removeIndent, // Reset for end statements
      }),

      foldNodeProp.add({
        FunctionDefinition: foldInside, // Allow folding of function blocks
        IfStatement: foldInside, // Allow folding of function blocks
      }),
    ],
  }),
  // languageData: {
  //   closeBrackets: { brackets: ["(", "[", "do", '"'] },
  //   commentTokens: { line: "//" },
  // },
});

export function jikiscript() {
  return new LanguageSupport(jikiscriptLanguage);
}

export const jikiscriptStrict = LRLanguage.define({
  name: "jikiscriptStrict",
  parser: parser.configure({
    strict: true,
  }),
});
