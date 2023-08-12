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

      // ver contactos de agenda en API
      obtenerAgenda: async () => {
        console.log("Probando funcion desde flux.js");

        const url =
          "https://playground.4geeks.com/apis/fake/contact/agenda/rafael-araujo";
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data);
        setStore({ contacts: data });
      },
      
      //Cargar Contacto en API
            cargarAgenda: async () => {
              const url =
                "https://playground.4geeks.com/apis/fake/contact/agenda/rafael-araujo";
              const request =
              {
                method: "POST",
                body: JSON.stringify(),
                headers: {
                  "Content-Type": "application/json"
                }
              }
              try {
                const resp = await fetch(url, request);
                const data = await resp.json();
                console.log(data)
              }
              catch (error) {
                console.log(error)
              }
      
            }
      //
      
      // changeColor: (index, color) => {
      //   //get the store
      //   const store = getStore();

      //   //we have to loop the entire demo array to look for the respective index
      //   //and change its color
      //   const demo = store.demo.map((elm, i) => {
      //     if (i === index) elm.background = color;
      //     return elm;
      //   });

      //   //reset the global store
      //   setStore({ demo: demo });
      // },
    },
  };
};

export default getState;
