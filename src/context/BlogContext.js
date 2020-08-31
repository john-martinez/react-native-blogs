import createContextData from './createContextData';

const BlogReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BLOGPOST': return [...state, action.payload];
    case 'DELETE_BLOGPOST': return state.filter(blog => blog.id !== action.payload.id);
    case 'EDIT_BLOGPOST': return state.map( blog => {
      return blog.id === action.payload.id 
        ? action.payload
        : blog
    })
    default: return state;
  }
}

const addBlogPost = dispatch => {
  return (title, message, cb) => {
    dispatch({
      type: 'ADD_BLOGPOST',
      payload: {
        id: Math.floor(Math.random() * 99999),
        title,
        message
      }
    });
    cb();
  }
}

const deleteBlogPost = dispatch => {
  return (id) => dispatch({
    type: 'DELETE_BLOGPOST',
    payload: { id }
  })
}

const editBlogPost = dispatch => {
  return (id, title, message, cb) => {
    dispatch({
      type: "EDIT_BLOGPOST",
      payload: {
        id,
        title,
        message
      }
    });
    cb();
  }
}

export const { Context, Provider } = createContextData(
  BlogReducer, 
  { addBlogPost, deleteBlogPost, editBlogPost  },
  []
)
