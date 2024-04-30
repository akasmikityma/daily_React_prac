import {atom,atomFamily, selector} from 'recoil';

export const todosAtomagain=atom({
    key:"againatomtodos",
    default:[]
})

export const todosselectoragain=selector({
    key:'selectorforTodos',
    get: ({ get }) => (id) => {
        const todos = get(todosAtomagain);
        return todos.find((x) => x.id === id);
    }
})