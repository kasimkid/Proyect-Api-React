const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [],
      //   demo: [
      //     {
      //       title: "FIRST",
      //       background: "white",
      //       initial: "white",
      //     },
      //     {
      //       title: "SECOND",
      //       background: "white",
      //       initial: "white",
      //     },
      //   ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      obtenerAgenda: async () => {
        console.log("Probando funcion desde flux.js");

        const url =
          "https://playground.4geeks.com/apis/fake/contact/agenda/rafael-araujo";
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data);
        setStore({ contacts: data });
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
