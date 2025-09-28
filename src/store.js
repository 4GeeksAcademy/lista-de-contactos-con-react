export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    contacts: [] // Nuevo array para contactos
  }
}


export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task': {
      const { id, color } = action.payload;
      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    }
    case 'ADD_CONTACT': {
      // Agrega el nuevo contacto al array de contactos
      return {
        ...store,
        contacts: [...store.contacts, action.payload]
      };
    }
    default:
      throw Error('Unknown action.');
  }
}
