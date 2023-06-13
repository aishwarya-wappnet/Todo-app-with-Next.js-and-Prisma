"use client"

type TodoItemProps = {
    id: string,
    title: string,
    complete: boolean
    toggleTodo: (id: string, complete: boolean) => void
}

export function Todo({ id, title, complete, toggleTodo }: TodoItemProps) {
    return <li className="glex gap-1 items-center">
        <input
            id={id}
            type="checkbox"
            className="cursor-pointer peer"
            defaultChecked={complete}
            onChange={e => toggleTodo(id, e.target.checked)}
        />&nbsp;
        <label htmlFor={id} className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500">{title}</label>
    </li>
}