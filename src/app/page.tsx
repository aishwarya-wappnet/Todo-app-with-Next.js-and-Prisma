import Link from 'next/link';
import { prisma } from "@/app/db";
import { Todo } from './components/Todo';

function getTodos () {
  return prisma.todo.findMany();
}

async function toogleTodo (id: string, complete: boolean) {
  "use server"
  
  await prisma.todo.update({ where: {id}, data: { complete }})
  
}
export default async function Home() {
  const todos = await getTodos();

  return (
    <>
      <header className="flex justify-between mb-4 items-center">
        <h1 className="text-2xl">Todos</h1>
        <Link className='border border-slate-300 px-2 py-1 rounded hover:bg-slte-700 focus-within:bg-slate-700 outline-none' href="/new">New</Link>
      </header>
      <ul className="pl4">
        {todos.map( todo => (   
          <Todo key={todo.id} {...todo} toggleTodo={toogleTodo}/>
        ))}
      </ul>
    </>
  )
}
