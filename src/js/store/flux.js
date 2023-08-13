const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [],
    },
    actions: {
      // Use getActions to call a function within a fuction

      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      // ver contactos de agenda en API
      obtenerAgenda: async () => {
        const url =
          "https://playground.4geeks.com/apis/fake/contact/agenda/rafael-araujo";
        const resp = await fetch(url);
        const data = await resp.json();
        setStore({ contacts: data });
      },

      //Crear Contacto en API
      crearContacto: async (datosContacto) => {
        const url =
          "https://playground.4geeks.com/apis/fake/contact/";
        const request =
        {
          method: "POST",
          body: JSON.stringify(datosContacto),
          headers: {
            "Content-Type": "application/json"
          }
        }
        try {
          const resp = await fetch(url, request);
          const data = await resp.json();
        }
        catch (error) {
          console.log(error)
        }

      }
    },
  };
};

export default getState;
