import { createAction, handleActions } from 'redux-actions';
import { login } from '../service/loginAPI';

const AUTH_LOGIN_PENDING = 'auth/AUTH_LOGIN_PENDING';
const AUTH_LOGIN_SUCCESS = 'auth/AUTH_LOGIN_SUCCESS';
const AUTH_LOGIN_FAILURE = 'auth/AUTH_LOGIN_FAULURE';
const AUTH_LOGOUT = 'auth/AUTH_LOGOUT';

export const accessLogin = (id, pwd) => dispatch => {
  // 요청이 시작되었다고 알림
  dispatch({type: AUTH_LOGIN_PENDING});

  //요청 시작
  return login(id, pwd).then(
    response => {
      dispatch({
        type: AUTH_LOGIN_SUCCESS,
        payload: {
          userInfo: response.data,
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

export const logout = createAction(AUTH_LOGOUT);

const initialState = {
  pending: false,
  error: false,
  userInfo: null,
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
      userInfo: action.payload.userInfo,
    };
  },
  [AUTH_LOGIN_FAILURE]: (state, action) => {
    return {
      ...state,
      pending: false,
      error: true
    }
  },
  [AUTH_LOGOUT]: (state, action) => {
    return {
      ...state,
      userInfo: null
    }
  }
}, initialState);