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

      detailPerson: async (id) => {
        setStore({ cargando: true });
        try {
          const url = `https://rickandmortyapi.com/api/character/${id}`;
          const resp = await fetch(url);
          const data = await resp.json();
          setStore({ cargando: false })
          setStore({ character: data })
        } catch (error) {
          console.log(error);
        }
      },

      detailLocation: async (id) => {
        setStore({ cargando: true });
        try {
          const url = `https://rickandmortyapi.com/api/location/${id}`;
          const resp = await fetch(url);
          const data = await resp.json();
          console.log(data)
          setStore({ cargando: false })
          setStore({ location: data })
        } catch (error) {
          console.log(error);
        }
      },

    },
  };
};

export default getState;
