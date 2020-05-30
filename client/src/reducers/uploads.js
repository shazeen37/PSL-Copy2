import { GET_UPLOADS, UPLOADS_ERROR } from '../actions/types';

const initialState = {
  uploads: [],
  upload: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_UPLOADS:
      return {
        ...state,
        uploads: payload,
        loading: false,
      };

    case UPLOADS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
