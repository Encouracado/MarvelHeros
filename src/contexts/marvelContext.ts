import {createContext} from 'react';

export type Hero = {
    id?: number,
    name?: string,
    description?: string,
    thumbnail?: {
        path: string,
        extension: string
    }
}

type HeroData = {
    heroList: Hero[],
    currentHero: number,
    openDescriptionHero: (hero: Hero) => void,
}

export const HeroContext = createContext({} as HeroData);
