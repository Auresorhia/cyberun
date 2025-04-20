import TextReadOnlyRenderer from './text/TextReadOnlyRenderer';
import { textReadOnlyTester } from './text/textTester';

export const customRenderers = [
  { tester: textReadOnlyTester, renderer: TextReadOnlyRenderer }
];
