import { action } from 'typesafe-actions';
import {Dispatch} from 'redux'
import { LOAD_REQUEST, LOAD_SUCCESS, HERO_FAIL , Character, HeroDispatchTypes } from './types';
import api from '../../services/api'

export const LoadSuccess = (data: Character[]) => action(LOAD_SUCCESS, data);

export const LoadRequest = () => action(LOAD_REQUEST);

export const LoadFailure = () => action(HERO_FAIL);

export const GetAllHeros = () => async (dispatch: Dispatch<HeroDispatchTypes>) =>{
   try{
      dispatch({
          type: LOAD_REQUEST
      })
      const res =  await api.get('/characters')
      console.log("res: ", res)
      dispatch({
          type: LOAD_SUCCESS,
          payload: res.data
      })
      
   }catch(e){
      dispatch({
          type: HERO_FAIL
      })
   }
}