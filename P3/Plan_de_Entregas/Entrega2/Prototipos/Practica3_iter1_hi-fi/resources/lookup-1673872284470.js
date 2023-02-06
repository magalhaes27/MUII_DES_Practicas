(function(window, undefined) {
  var dictionary = {
    "df51227f-ae1a-4b96-aa41-59005030e7e6": "Compras",
    "8b0a352f-103d-4025-a9af-f912d88ec28a": "Perfil",
    "3345cd32-15cb-4938-8fdd-dd27d9c948cc": "ComprasTabla",
    "aa8ac5c6-1d13-4cd2-8a77-8a83163dafab": "Presupuesto Anadir",
    "6f679289-6511-4a9b-b334-f5d570cda33c": "Compra",
    "1fc31afd-fd89-4cb4-a82a-060565453cae": "Presupuesto Editar",
    "6aed0c9c-f881-4abd-8ed6-9fa5864ae360": "Presupuestos",
    "ec9e1e83-246a-46f9-9227-9d5f1d9375bf": "Compra Editar",
    "54148f96-5914-4852-a3be-94f6da50df77": "Presupuesto",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Log In",
    "e67f7d9a-0921-4988-9b2f-f554a612005e": "Compra Anadir",
    "2e9d5a77-f4d8-4bff-930d-b0b306929863": "ComprasGrafo",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);