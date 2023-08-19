import { clippingParents } from "@popperjs/core";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      locations: [],
      character: "",
      location: "",
      cargando: false,
    },
    actions: {


      // ver contactos de agenda en API
      getCharacters: async () => {
        const url =
          "https://rickandmortyapi.com/api/character";
        const resp = await fetch(url);
        const data = await resp.json();
        setStore({ characters: data.results });
      },
      getLocation: async () => {
        const url =
          "https://rickandmortyapi.com/api/location";
        const resp = await fetch(url);
        const data = await resp.json();
        setStore({ location: data.results });
      },

      //Crear Contacto en API
      // crearContacto: async (datosContacto) => {
      //   datosContacto.agenda_slug = "rafael-araujo";
      //   const url = "https://playground.4geeks.com/apis/fake/contact/";
      //   const request = {
      //     method: "POST",
      //     body: JSON.stringify(datosContacto),
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   };

      //   try {
      //     const resp = await fetch(url, request);
      //     const data = await resp.json();
      //     return data;
      //   } catch (error) {
      //     console.log(error);
      //   }
      // },

      //Editar Contacto en API
      // editarContacto: async (id, datosContacto) => {
      //   datosContacto.agenda_slug = "rafael-araujo";
      //   const url = `https://playground.4geeks.com/apis/fake/contact/${id}`;
      //   const request = {
      //     method: "PUT",
      //     body: JSON.stringify(datosContacto),
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   };
      //   try {
      //     const resp = await fetch(url, request);
      //     const data = await resp.json();
      //     console.log(data)
      //   } catch (error) {
      //     console.log(error);
      //   }
      // },

      detailContact: async (id) => {
        setStore({ cargando: true });
        try {
          const url = `https://rickandmortyapi.com/api/character/${id}`;
          const resp = await fetch(url);
          const data = await resp.json();
          console.log(data)
          setStore({ cargando: false });
        } catch (error) {
          console.log(error);
        }
      },

    },
  };
};

export default getState;
