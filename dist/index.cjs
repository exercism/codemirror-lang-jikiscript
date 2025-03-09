'use strict';

var lr = require('@lezer/lr');
var language = require('@codemirror/language');
var highlight = require('@lezer/highlight');

// This file was generated by lezer-generator. You probably shouldn't edit it.
const spec_identifier = {__proto__:null,log:8, new:24, is:58, equals:60, and:66, or:68, not:90, function:94, do:96, end:98, with:100, set:104, to:106, change:110, repeat:118, times:120, indexed:124, by:126, repeat_until_game_over:130, repeat_forever:134, for:138, each:140, in:142, if:146, else:148, return:152, continue:156, next:160, break:164};
const parser = lr.LRParser.deserialize({
  version: 14,
  states: ";SQYQPOOOOQO'#Cl'#ClO!^QPO'#CkOOQO'#ER'#EROOQO'#E^'#E^OOQO'#ES'#ESQYQPOOQ!cQPO'#E]O!hQPO'#C_O#`QPO'#D[O#hQPO'#DaO#hQPO'#DdO!hQPO'#DhO#mQPO'#DnO#mQPO'#DpO#uQPO'#DrO!hQPO'#DvO!hQPO'#DyOOQO'#D{'#D{OOQO'#D}'#D}OOQO'#EP'#EPOOQO'#E]'#E]O#zQPO,59VOOQO-E8Q-E8QOOQO,5:w,5:wO!hQPO'#CfO%PQQO'#ClO'mQQO'#CcO'tQQO'#CcO'{QPO'#CpOOQO'#Cp'#CpO(VQPO'#CtOOQO'#Eh'#EhO%|QQO'#CcO(bQQO'#CaO*OQPO'#E`OOQO'#E`'#E`O!hQPO'#DYOOQO'#Ca'#CaO*sQPO'#CgOOQO,58y,58yO*xQPO,59vOOQO'#Co'#CoO+QQPO,59{O+VQPO,5:OO+bQPO,5:RO+gQPO,5:SO+lQPO'#EtO+qQPO'#DkOOQO,5:Y,5:YO+vQPO,5:YOOQO,5:[,5:[O+vQPO,5:[O#hQPO,5:^O+{QPO,5:bOOQO,5:e,5:eO,QQPO'#EaOOQO1G.q1G.qO,YQPO1G.qO,_QPO,59QO#`QPO,59YO!hQPO'#CsOOQO'#EW'#EWO-[QQO,58}O.XQPO,59XO.`QPO,59_OOQO,59[,59[O.hQPO,59[OOQO,59`,59`O.rQPO,59`O.}QPO,59`OOQO'#C{'#C{O/kQPO,58|OOQO'#DP'#DPOOQO'#DQ'#DQOOQO'#DR'#DROOQO'#DS'#DSOOQO'#DT'#DTOOQO'#DU'#DUOOQO'#DW'#DWOOQO'#DX'#DXO!hQPO,59hOOQO,59t,59tO/xQPO,59ROOQO1G/b1G/bO#hQPO1G/bO!hQPO1G/gO!hQPO1G/jO/}QPO1G/lO!hQPO1G/mO#mQPO1G/nO0SQPO,5;`O#hQPO,5:VOOQO1G/t1G/tOOQO1G/v1G/vO0ZQPO1G/xO0cQPO'#EtOOQO1G/|1G/|O!hQPO'#ETO0hQPO,5:{OOQO7+$]7+$]OOQO1G.l1G.lOOQO1G.t1G.tO.cQPO,59_OOQO-E8U-E8UOOQO1G.s1G.sO0pQPO1G.sOOQO1G.y1G.yO0uQPO'#EUO0|QPO1G.vOOQO1G.v1G.vO1XQPO1G.vO1^QPO1G.vOOQO1G.z1G.zO1cQPO1G.zO1hQPO1G.zO!hQPO1G.zO$RQPO'#ClO2eQPO'#CcO2lQPO'#CcO1mQPO'#CcOOQO1G.h1G.hOOQO1G/S1G/SO2sQPO1G.mO2zQPO'#EuO+vQPO7+$|OOQO7+%R7+%ROOQO7+%U7+%UO!hQPO7+%WOOQO7+%X7+%XOOQO7+%Y7+%YO+vQPO7+%YO3SQPO1G0zOOQO1G0z1G0zOOQO1G/q1G/qO!hQPO7+%dO#hQPO7+%dO3ZQPO,5;`OOQO,5:o,5:oOOQO-E8R-E8ROOQO7+$_7+$_OOQO,5:p,5:pO!hQPO,5:pOOQO-E8S-E8SOOQO7+$b7+$bO3eQPO7+$bO3jQPO7+$bOOQO7+$f7+$fO!hQPO7+$fO3uQPO7+$fO,dQPO,58}OOQO7+$X7+$XO4QQPO7+$XO#hQPO'#EXO4VQPO,5;aOOQO<<Hh<<HhOOQO<<Hr<<HrOOQO<<Ht<<HtOOQO7+&f7+&fO#mQPO<<IOO4_QPO<<IOO4dQPO1G0zO4nQPO1G0|OOQO1G0[1G0[OOQO<<G|<<G|O4vQPO<<G|O4{QPO<<HQO5WQPO'#EVO4{QPO<<HQOOQO<<HQ<<HQO5RQPO<<HQOOQO<<Gs<<GsOOQO,5:s,5:sOOQO-E8V-E8VOOQOAN>jAN>jO+vQPOAN>jO!hQPOAN>jO4nQPO7+&hOOQO7+&h7+&hOOQOAN=hAN=hO5`QPOAN=lOOQOAN=lAN=lO5fQPOAN=lO5kQPO,5:qO5pQPO,5:qOOQO-E8T-E8TOOQOG24UG24UO#mQPOG24UOOQO<<JS<<JSOOQOG23WG23WO5uQPOG23WO!hQPO1G0]O5zQPO1G0]OOQOLD)pLD)pO+vQPOLD)pOOQOLD(rLD(rOOQO7+%w7+%wO!hQPO7+%wOOQO!$'M[!$'M[OOQO<<Ic<<Ic",
  stateData: "6Z~O#OOSPOS~OSWO!PXO!UYO!XZO!][O!c]O!e^O!g_O!k`O!naO!pbO!rcO!tdO#RPO#UPO#WeO~OXfO~O#WhO~OXiO[wOfmOiqOjqOkpOlpO}uO#RjO#UPO#YoO#guO~O#RPO#UPO~O#RzO~O!Q!PO!`!QO~O!h!VO~OW!ZO~P!hOX`XfcXqcXrcX!|cX#VcX#WcX!^cX!QcXWcX^cXecX#XcX!`cX~OmcXncXycX#]cX#^cX#_cX#`cX#acX#bcX#ccX#dcX#ecX#fcX~P$ROf!_OmVXnVXqVXrVXyVX!|VX#WVX#]VX#^VX#_VX#`VX#aVX#bVX#cVX#dVX#eVX#fVX!^VX!QVXWVX^VXeVX#XVX!`VX~O#V!^O~P%|OX!bO~P%|Oe!dO#W!eO~P!hOi!hO#W!gO#X!fO~Om!jOn!jOq!sOr!sOy!sO#]!iO#^!iO#_!kO#`!lO#a!mO#b!nO#c!oO#d!pO#e!qO#f!rO!|TX#WTX!^TX!QTXWTX^TXeTX#XTX!`TX~Oq!sOr!sO!|#SX#W#SX!^#SX!Q#SXW#SX^#SXe#SX#X#SX!`#SX~O]!uO~O!Q!PO!S!wO~O!V!xO~Of!_O!V!yO#V!^O~O!V!{O~O!^!|O~O#W!}O~O!a#OO~O!Q!PO~O!Q#SO~O^#UOW#TX~OW#WO~OW#XO~Of!_OqVarVa!|Va#WVa!^Va!QVaWVa^VaeVa#XVa!`Va~OmVanVayVa#]Va#^Va#_Va#`Va#aVa#bVa#cVa#dVa#eVa#fVa~P,dOW#]O~P!hO^#`Oe#_O~Oe#bO#W#cO~P!hOi#gO#W#fO#X#eO~O#Z#hO~OXiO[wOfmOkpOlpO#UPO#YoO~Oi#lOj#lO#R#iO~P/SOX#oO~O!V#tO~O!R#yO~PYO^#|O!i#{O~O#W#}O~O^#UOW#Ta~OW$QO~O#W$SO~P!hO^#`Oe$UO#W$VO~Oe$UO~O^#`O~O#X$XO~O#Z$YO~Of!_OqVXrVX!|VX#WVX!^VX!QVXWVX^VXeVX#XVX!`VX~O#V!^O~P1mOX!bO~P1mOW$]O~P!hO^$_O!Q#iX~O!R$dO~PYO!R#yO!l$hO~PYOe$jO~O^#`Oe$jO#W$kO~O^$mO#W$pO#X$oO~OW$qO~O^$_O!Q#ia~O!i$vO~O!R$dO!l$wO~PYO!Q!PO!k`O~Oe$yO~O^$mO#W$|O#X${O~Oi$}O#W%OO~O^$mO#W%UO#X%TO~O#Z%VO~Oi%WO~O#X%ZO~O#Z%]O~OPlkyj#U#Rij~",
  goto: "0u#kPPP#lP#t%b&OPP&o&oPPP'`(X&o)S)v&oPP*|&oPPPPPP+x+{PP,i,i,i,i,i,iP,i,i,lP#lPPPP#lPP#lP#l#l#lPP-YPP#lP#lP#lPPP-iPP#lP#lP#lP#lP#l-w.V.].g.q/PPPP/V/_P,l/gPPPPPP&oPPPPPPPPPPP/p0o0r]SOU!}#x#}$gQxWQ!O[Q!W`Q!XaU!Yf!b#oQ!]iQ!cmQ!tuQ#Z!_Q#d!eQ#n!sQ#r!xQ#s!yQ#u!{Q$O#UQ$R#`Q$Z#hQ$b#tQ$e#{Q$i$SQ$l$YQ%R$vQ%[%VR%_%]!VsW[`afimu!_!b!e!s!x!y!{#U#`#h#o#t#{$S$Y$v%V%]!UrW[`afimu!_!b!e!s!x!y!{#U#`#h#o#t#{$S$Y$v%V%]R#m!j!UqW[`afimu!_!b!e!s!x!y!{#U#`#h#o#t#{$S$Y$v%V%]R#l!j[ROU!}#x#}$g!UqW[`afimu!_!b!e!s!x!y!{#U#`#h#o#t#{$S$Y$v%V%]R#l!j!dQOUW[`afimu!_!b!e!j!s!x!y!{!}#U#`#h#o#t#x#{#}$S$Y$g$v%V%]QyXR#Y!^!UlW[`afimu!_!b!e!s!x!y!{#U#`#h#o#t#{$S$Y$v%V%]Q}ZR#k!j!UkW[`afimu!_!b!e!s!x!y!{#U#`#h#o#t#{$S$Y$v%V%]Q{YQ|ZQ#R!VQ#j!jQ#p!wQ#z#OQ$f#|R$r$_!WnW[`afimu!_!b!e!j!s!x!y!{#U#`#h#o#t#{$S$Y$v%V%]`!`klq!a#j#k#l$[R!z|R!jr!VtW[`afimu!_!b!e!s!x!y!{#U#`#h#o#t#{$S$Y$v%V%]R!sr!VvW[`afimu!_!b!e!s!x!y!{#U#`#h#o#t#{$S$Y$v%V%]Q!S]Q!U^Q#w!|Q$u$eR%Y%R[SOU!}#x#}$gQ$x$hR%S$wQUOUgU#x$gQ#x!}R$g#}Q#V!YR$P#VQ#a!cS$T#a$WR$W#dQ$n$ZQ$z$lT%P$n$zU!aklqS#[!a$[V$[#j#k#lQ$`#pR$s$`]TOU!}#x#}$g]VOU!}#x#}$gQ![fQ#^!bR$^#oQ!R]Q!T^Q!vyQ#P!SQ#Q!UQ#T!WQ#v!|Q$a#qQ$c#wQ$t$eQ$x$hQ%Q$uQ%S$wQ%X%RR%^%YR#q!wR#T!W",
  nodeNames: "⚠ LineComment Program LogStatement log Expression EqualityExpression PrimaryExpression ) ( GroupingExpression InstantiateExpression new ClassName , CallExpression FunctionName MethodExpression PropertyExpression Identifier ListExpression ] [ IndexExpression DictionaryExpression String Boolean Integer Floating is equals CompareOp RelationalExpression and or CompareOp CompareOp CompareOp CompareOp ArithOp ArithOp ArithOp ArithOp ArithOp UnaryExpression not FunctionDefinition function do end with SetVariableStatement set to ChangeVariableStatement change ChangeListElementStatement ChangePropertyStatement RepeatStatement repeat times IndexedByComponent indexed by RepeatUntilGameOverStatement repeat_until_game_over RepeatForeverStatement repeat_forever ForeachStatement for each in IfStatement if else ReturnStatement return ContinueStatement continue NextStatement next BreakStatement break CallStatement",
  maxTerm: 118,
  nodeProps: [
    ["openedBy", 8,"(",21,"["],
    ["closedBy", 9,")",22,"]"]
  ],
  skippedNodes: [0,1],
  repeatNodeCount: 6,
  tokenData: ".V~RnYZ#Ppq#Uqr#Zrs#huv%Uxy%Zyz%`z{%e{|%j|}%o}!O%t!O!P&g!P!Q&l!Q![%|![!]']!^!_'b!_!`'o!`!a'z!c!}(X!}#O(j#P#Q(o#T#Y(t#Y#Z)V#Z#a(t#a#b+g#b#h(t#h#i,{#i#o(t#o#p-{#q#r.Q~#UO#W~~#ZO#O~R#`P#gP!_!`#cQ#hO#^Q~#kVOr#hrs$Qs#O#h#O#P$V#P;'S#h;'S;=`%O<%lO#h~$VOi~~$YRO;'S#h;'S;=`$c;=`O#h~$fWOr#hrs$Qs#O#h#O#P$V#P;'S#h;'S;=`%O;=`<%l#h<%lO#h~%RP;=`<%l#h~%ZO#f~~%`OX~~%eOW~~%jO#c~~%oO#d~~%tO^~R%yP#eQ!Q![%|P&RQkP!O!P&X!Q![%|P&[P!Q![&_P&dPlP!Q![&_~&lO#V~~&qPy~!P!Q&t~&ySP~OY&tZ;'S&t;'S;=`'V<%lO&t~'YP;=`<%l&t~'bO#Z~~'gP#`~!_!`'j~'oO#b~~'rP!_!`'u~'zO#]~~(PP#_~!_!`(S~(XO#a~~(^S]~!Q![(X!c!}(X#R#S(X#T#o(X~(oOf~~(tOe~~(yS#R~!Q![(t!c!}(t#R#S(t#T#o(t~)[T#R~!Q![(t!c!}(t#R#S(t#T#U)k#U#o(t~)pU#R~!Q![(t!c!}(t#R#S(t#T#`(t#`#a*S#a#o(t~*XU#R~!Q![(t!c!}(t#R#S(t#T#g(t#g#h*k#h#o(t~*pU#R~!Q![(t!c!}(t#R#S(t#T#X(t#X#Y+S#Y#o(t~+ZSj~#R~!Q![(t!c!}(t#R#S(t#T#o(t~+lU#R~!Q![(t!c!}(t#R#S(t#T#m(t#m#n,O#n#o(t~,TT#R~st,d!Q![(t!c!}(t#R#S(t#T#o(t~,gP#T#o,j~,oS#U~!Q![,j!c!},j#R#S,j#T#o,j~-QU#R~!Q![(t!c!}(t#R#S(t#T#f(t#f#g-d#g#o(t~-iU#R~!Q![(t!c!}(t#R#S(t#T#i(t#i#j*k#j#o(t~.QO#Y~~.VO#X~",
  tokenizers: [0, 1],
  topRules: {"Program":[0,2]},
  specialized: [{term: 95, get: (value) => spec_identifier[value] || -1}],
  tokenPrec: 967
});

const addIndent = (context) => context.lineIndent(context.node.from) + context.unit; // Indent for function body
const removeIndent = (context) => context.lineIndent(context.node.from);
const jikiscriptLanguage = language.LRLanguage.define({
    name: "jikiscript",
    parser: parser.configure({
        strict: false, // Toggle for sanity!
        props: [
            highlight.styleTags({
                String: highlight.tags.string,
                Boolean: highlight.tags.bool,
                LineComment: highlight.tags.lineComment,
                Integer: highlight.tags.number,
                Floating: highlight.tags.float,
                "repeat times repeat_until_game_over repeat_forever": highlight.tags.controlKeyword,
                "if else do end log": highlight.tags.controlKeyword,
                "for each in": highlight.tags.controlKeyword,
                "new": highlight.tags.controlKeyword,
                "with to indexed by": highlight.tags.controlKeyword,
                "next break continue": highlight.tags.controlKeyword,
                "return": highlight.tags.controlKeyword,
                "function set change": highlight.tags.definitionKeyword,
                "and or is equals not": highlight.tags.logicOperator,
                ArithOp: highlight.tags.arithmeticOperator,
                CompareOp: highlight.tags.compareOperator,
                "> < >= <= ==": highlight.tags.operator,
                bangOperator: highlight.tags.operator,
                UnaryExpression: highlight.tags.operator,
                Identifier: highlight.tags.variableName,
                FunctionName: highlight.tags.function(highlight.tags.variableName),
                ClassName: highlight.tags.className,
                ArgumentList: highlight.tags.variableName,
                "( ) ,": highlight.tags.paren,
                "[ ]": highlight.tags.squareBracket
            }),
            language.indentNodeProp.add({
                FunctionDefinition: addIndent,
                IfStatement: addIndent,
                ElseStatement: addIndent,
                RepeatStatement: addIndent,
                RepeatUntilGameOverStatement: addIndent,
                statement: addIndent, // Indent for nested statements
                EndStatement: removeIndent, // Reset for end statements
            }),
            // foldNodeProp.add({
            // FunctionDefinition: foldInside, // Allow folding of function blocks
            // }),
        ],
    })
    // languageData: {
    //   closeBrackets: { brackets: ["(", "[", "do", '"'] },
    // }
    //   commentTokens: { line: "//" },
    // },
});
function jikiscript() {
    return new language.LanguageSupport(jikiscriptLanguage);
}
const jikiscriptStrict = language.LRLanguage.define({
    name: "jikiscriptStrict",
    parser: parser.configure({
        strict: true,
    }),
});

exports.jikiscript = jikiscript;
exports.jikiscriptLanguage = jikiscriptLanguage;
exports.jikiscriptStrict = jikiscriptStrict;
