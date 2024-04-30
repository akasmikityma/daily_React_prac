// import {atom, atomFamily} from 'recoil';
// import { v4 as uuidv4 } from 'uuid';
// export const todosAtom =atom({
//     key:"todoAtom",
//     default:[],
// }) ;

// export const todoAtomFamily=atomFamily({
//     key:'todoAtomsFamily',
//     default: ({ title }) => ({ title, id: uuidv4() }),
// })

import { atom, atomFamily } from 'recoil';
import { v4 as uuidv4 } from 'uuid';

export const todosAtom = atom({
  key: 'todosAtom',
  default: {},
});

export const todoAtomFamily = atomFamily({
  key: 'todoAtomFamily',
  default: ({ title }) => ({ title, id: uuidv4() }),
});