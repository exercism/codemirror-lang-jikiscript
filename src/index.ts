import { parser } from "./syntax.grammar";
import { LRLanguage, LanguageSupport } from "@codemirror/language";
import { indentNodeProp, foldNodeProp, foldInside  } from "@codemirror/language";
import { styleTags, tags as t } from "@lezer/highlight";

export const jikiscriptLanguage = LRLanguage.define({
  name: "jikiscript",
  parser: parser.configure({
    props: [
      styleTags({
        String: t.string,
        Boolean: t.bool,
        LineComment: t.lineComment,
        Integer: t.number,
        Floating: t.float,
        "function set change": t.definitionKeyword,
        "with do to return end": t.keyword,
        Identifier: t.variableName,
        ArgumentList: t.variableName,
        "( )": t.paren

        /*
        "( )": t.paren,
        "[ ]": t.squareBracket,
        "{ }": t.brace,
        Escape: t.escape,
        Identifier: t.function(t.definition(t.variableName)),
        Signature: t.meta,
        Glyph: t.atom,*/
      }),

      indentNodeProp.add({
        FunctionDefinition: context => {
          console.log("JHERE");
          console.log(context.unit)
          return context.lineIndent(context.node.from) + context.unit // Indent for function body
        },
        statement: context =>
          context.lineIndent(context.node.from) + context.unit, // Indent for nested statements
        EndStatement: context => context.lineIndent(context.node.from), // Reset for end statements
      }),

      foldNodeProp.add({
        FunctionDefinition: foldInside, // Allow folding of function blocks
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
