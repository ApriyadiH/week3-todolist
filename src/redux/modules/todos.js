// Action value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const GET_ID = "GET_ID"

// Action Creator
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};
export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload };
};
export const toggleTodo = (payload) => {
  return { type: TOGGLE_TODO, payload };
};
export const getID = (payload) => {
  return { type: GET_ID, payload };
};

// initial State
const initialState = {
  todos: [
    {
      td_id: 1,
      title: "test title",
      context: "test context",
      is_done: false
    },
    {
      td_id: 2,
      title: "test title",
      context: "test context",
      is_done: false
    },
  ],
  pages: [

  ],
};

// Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      let id_tambahan

        // Membuat array baru yang isinya id dari semua todos
        const array_sortir = state.todos.map(todo => {
          return todo.td_id;
        });
        // mencari nilai terbesar dari array tersebut, dan ada logi
        const id_terbesar = array_sortir.length>0 ? Math.max.apply(null, array_sortir) : 0;

        // memberikan nilai id
        id_tambahan = id_terbesar + 1;

      var tambahan = {
        td_id : id_tambahan,
        title: action.payload.title,
        context: action.payload.context,
        is_done: false
      }
      return {
        ...state,
        todos: [...state.todos, tambahan],
      };

    case DELETE_TODO:
      // Menyaring todos yang idnya sama dengan tombol yg ditekan
      const todos_sementara_hapus = state.todos.filter(todo => {
        return todo.td_id !== action.payload.id
      })
      return {
        ...state,
        todos: todos_sementara_hapus,
      };

    case TOGGLE_TODO:
      const todos_sementara_toggle = state.todos.map((todo)=>{
        if (todo.td_id === action.payload.id) {
            const is_done_sementara = !todo.is_done
            return ({...todo, is_done: is_done_sementara});
        } 
        return todo;  
      });
      return {
        ...state,
        todos: todos_sementara_toggle,
      };

    case GET_ID:
      const cari_informasi = state.todos.filter(todo => {
          return todo.td_id === Number(action.payload.id)
        })
      return{
        ...state,
        pages: cari_informasi,
      }
    default:
      return state;
  }
};

export default todos;