import { clippingParents } from "@popperjs/core";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      locations: [],
      favoritos: [],
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
        setStore({ locations: data.results });
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
          setStore({ cargando: false })
          setStore({ location: data })
        } catch (error) {
          console.log(error);
        }
      },

      agregarFavoritos: (name) => {
        const store = getStore()
        if (store.favoritos.includes(name)) return
        setStore({ favoritos: [...store.favoritos, name] });

      },

      eliminarFavoritos: (index) => {
        console.log(index, 'hello')
        const store = getStore();
        const Delete = store.favoritos.filter((i) => i !== index)

        setStore({ favoritos: Delete })



      }

      // ListFavoritos: () => {
      //   const Favorites = []
      //   console.log(Favorites, 'test')
      //   setStore(Favorites)
      // },

    },
  };
};

export default getState;
