import {MarvelHero, HeroDispatchTypes, LOAD_REQUEST, LOAD_SUCCESS, HERO_FAIL} from './types'
import {Reducer} from 'redux'

interface Hero{
  error?: boolean,
  loading: boolean,
  hero?: MarvelHero[];
}

const INITIAL_STATE: Hero = {   
    error: false,
    loading: false
}

const reducer = (state: Hero = INITIAL_STATE, action: HeroDispatchTypes): Hero =>{
    switch(action.type){
        case LOAD_REQUEST:
            return {...state, loading: true}
        case LOAD_SUCCESS:
            return {...state, loading: false, hero: action.payload }
        case HERO_FAIL:
            return {...state, loading: false, error: true, hero: []  }
        default:
             return state;
    }
}

export default reducer;