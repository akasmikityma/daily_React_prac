import React from 'react'
import { todosselectoragain } from '../store/todosAtom'
import { useRecoilValue } from 'recoil'

export default function TodosForAnotherPage({id}) {
    const getTodoById = useRecoilValue(todosselectoragain);
    const this_todo = getTodoById(id);

  return (
    <div>
        {`${this_todo.text}`}
    </div>
  )
}
