import React from "react";
import { JsonForms } from "@jsonforms/react";
import { vanillaRenderers, vanillaCells } from '@jsonforms/vanilla-renderers';
import { schema, uischema, data } from './schemas';



const App = () => {
  return (
    <div>
      <h1>My Form</h1>
      <JsonForms
        schema={schema}           // Schéma JSON
        uischema={uischema}       // UI Schéma
        data={data}               // Données initiales
        renderers={vanillaRenderers}  // Rendu de base de JSONForms
        cells={vanillaCells} // 👉 C'est ça qui manquait !
        onChange={({ data, errors }) => {
          console.log("Updated data:", data);
          console.log("Errors:", errors);
        }}
      />
    </div>
  );
};

export default App;
