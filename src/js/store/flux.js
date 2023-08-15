const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [],
      contact: []
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

      },

      //Editar Contacto en API
      editarContacto: async (id, datosContacto) => {
        const url =
          `https://playground.4geeks.com/apis/fake/contact/${id}`;
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

      },


      detailContact: async (id) => {
        const store = getStore()

        const url =
          `https://playground.4geeks.com/apis/fake/contact/${id}`;
        const resp = await fetch(url);
        const data = await resp.json();
        setStore({ contact: data });
        console.log(contact)


      },




    },
  };
};

export default getState;
