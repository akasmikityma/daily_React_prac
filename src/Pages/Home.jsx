import React,{useCallback, useState} from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil';
import { todosAtomagain } from '../store/todosAtom';
import TodosForAnotherPage from './TodosForAnotherPage';

export default function Home() {
    // const [todos, settodos] = useState([]);
    const[todoshere,settodoshere]=useRecoilState(todosAtomagain);
    const [inputGiven, setinputGiven] = useState('');
    const onchangeHandler=useCallback((e)=>{
       setinputGiven(e.target.value);
    },[])
    const addTodo=useCallback(()=>{
        settodoshere((prev)=>{
            return [...prev,{id:prev.length,text:inputGiven}]
        })
        setinputGiven('');
    },[inputGiven])
    console.log(todoshere)
  return (
    <div>
        <div>
        <textarea name="" id="" cols="30" rows="10" value={inputGiven} onChange={onchangeHandler}></textarea>
        <button onClick={addTodo}>add this</button>
        </div>
        <div>
            {todoshere&&todoshere.map((t)=>{
                return (
                    <div key={t.id}>{t.text}</div>
                )
            })}
        </div>
       {/* {todoshere.length>0&& <TodosForAnotherPage id={0}/>} */}
    </div>
  )
}
