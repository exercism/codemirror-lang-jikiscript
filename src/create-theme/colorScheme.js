import { tags as t } from '@lezer/highlight'
import createTheme from './create-theme.js'
// uses createTheme by Chris Kempson
export const colorScheme = createTheme({
  variant: 'light',
  settings: {
    background: '#FFFFFF',
    foreground: '#4D4D4C',
    caret: '#AEAFAD',
    gutterBackground: '#FFFFFF',
    gutterForeground: '#4D4D4C80',
    lineHighlight: '#D6ECFA80',
    selection: '#D5D1F2',
    selectionMatch: '#D5D1F2',
  },
  styles: [
    {
      tag: t.string,
      color: '#AA0000',
    },
    {
      tag: t.bool,
      color: '#00AA00',
    },
    {
      tag: t.lineComment,
      color: '#cccccc',
    },
    {
      tag: t.number,
      color: '#AA0000',
      fontStyle: 'italic',
    },
    {
      tag: t.float,
      color: '#00AA00',
      fontStyle: 'italic',
    },
    {
      tag: t.controlKeyword,
      color: '#0000AA',
      fontStyle: 'italic',
      fontWeight: 'bold',
    },
    {
      tag: t.definitionKeyword,
      color: '#AAAA00',
      fontWeight: 'bold',
    },
    {
      tag: t.keyword,
      color: '#AA00AA',
      fontWeight: 'bold',
    },
    {
      tag: t.logicOperator,
      color: '#00AAAA',
        border: '1px solid #ff0000',
    },
      {
        tag: t.arithmeticOperator,
        color: '#AAAA00',
      fontStyle: 'italic',
        border: '1px solid #ff0000',
      },
      {
        tag: t.operator,
        color: '#AA00AA',
      fontStyle: 'italic',
        border: '1px solid #ff0000',
      },
      {
        tag: t.variableName,
        color: '#00AAAA',
      fontStyle: 'italic',
      },
      {
        tag: t.paren,
        color: '#00ff00',
        border: '1px solid #0000ff',
      },
      {
        tag: t.squareBracket,
        color: '#ff0000',
        border: '1px solid #0000ff',
      },
      {
        tag: t.compareOperator,
        color: '#0000AA',
        border: '1px solid #ff0000',
      },
      

  ],
})
