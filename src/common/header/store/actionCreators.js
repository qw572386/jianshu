import * as actionTypes from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'
export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
});
export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
});
const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data)
})
export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then(res => {
      const resData = res.data;
      dispatch(changeList(resData.data))
    }).catch(err => {
      console.log(err)
    })
  }
}