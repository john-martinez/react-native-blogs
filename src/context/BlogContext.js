import createContextData from './createContextData';

const BlogReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BLOGPOST': return [...state, action.payload];
    case 'DELETE_BLOGPOST': return state.filter(blog => blog.id !== action.payload.id);
    default: return state;
  }
}

const addBlogPost = dispatch => {
  return (title, message) => dispatch({
    type: 'ADD_BLOGPOST',
    payload: {
      id: Math.floor(Math.random() * 99999),
      title,
      message
    }
  })
}

const deleteBlogPost = dispatch => {
  return (id) => dispatch({
    type: 'DELETE_BLOGPOST',
    payload: { id }
  })
}

export const { Context, Provider } = createContextData(
  BlogReducer, 
  { addBlogPost, deleteBlogPost  },
  []
)
