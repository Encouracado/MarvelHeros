
export const LOAD_REQUEST = '@repositories/request';
export const LOAD_SUCCESS = '@repositories/success';
export const HERO_FAIL = '@repositories/error'


export interface HeroLoading {
    type: typeof LOAD_REQUEST
  }
  
export interface HeroFail {
    type: typeof HERO_FAIL
  }
  
export interface HeroSuccess {
    type: typeof LOAD_SUCCESS,
    payload: MarvelHero[]
}

export type HeroDispatchTypes = HeroSuccess | HeroFail | HeroLoading

export interface Character {
    id: number,
    name: string,
    description: string,
    thumbnail: {
        path: string,
        extension: string
    }
}

/*export interface ImageHero {
    path: string,
    extension: string
}*/

export interface MarvelHero{
       data: {
          results: [
            character: Character[],
          ]
       }
    
  //image: ImageHero[]
}

/*export interface RepositoriesState {
     heros: MarvelHero[],
     loading: boolean,
     error: boolean,
}*/



