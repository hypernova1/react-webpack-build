import { handleActions } from 'redux-actions';
import { login } from '../service/loginAPI';

const AUTH_LOGIN_PENDING = 'auth/AUTH_LOGIN_PENDING';
const AUTH_LOGIN_SUCCESS = 'auth/AUTH_LOGIN_SUCCESS';
const AUTH_LOGIN_FAILURE = 'auth/AUTH_LOGIN_FAULURE';

export const accessLogin = (id, pwd) => dispatch => {
  // 요청이 시작되었다고 알림
  dispatch({type: AUTH_LOGIN_PENDING});

  //요청 시작
  return login(id, pwd).then(
    response => {
      dispatch({
        type: AUTH_LOGIN_SUCCESS,
        payload: {
          isLogin: response.data
        }
      });
    }
  ).catch(error => {
    dispatch({
      type: AUTH_LOGIN_FAILURE,
      payload: {
        error
      }
    })
  })
}

const initialState = {
  pending: false,
  error: false,
  isLogin: false,
};

export default handleActions({
  [AUTH_LOGIN_PENDING]: (state, action) => {
    return {
      ...state,
      pending: true,
      error: false
    };
  },
  [AUTH_LOGIN_SUCCESS]: (state, action) => {
    return {
      ...state,
      pending: false,
      isLogin: action.payload.isLogin
    };
  },
  [AUTH_LOGIN_FAILURE]: (state, action) => {
    return {
      ...state,
      pending: false,
      error: true
    }
  }
}, initialState);