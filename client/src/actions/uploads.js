import axios from 'axios';
import { setAlert } from './alert';
import { GET_UPLOADS, UPLOADS_ERROR } from './types';

//Get Uploads
export const getUploads = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/upload');

    dispatch({
      type: GET_UPLOADS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: UPLOADS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
