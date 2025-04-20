import { rankWith, isStringControl } from '@jsonforms/core';

export const textReadOnlyTester = rankWith(
  3, // priorité (plus haut = plus prioritaire)
  isStringControl // vérifie que c’est un champ texte
);
