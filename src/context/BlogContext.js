import createContextData from './createContextData';

const BlogReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BLOGPOST': return [...state, action.payload];
    default: return state;
  }
}

const addBlogPost = dispatch => {
  return () => dispatch({
    type: "ADD_BLOGPOST",
    payload: {
      title: 'new title ni jor',
      message: 'I love you baby'
    }
  })
}

export const { Context, Provider } = createContextData(
  BlogReducer, 
  { addBlogPost },
  []
)
