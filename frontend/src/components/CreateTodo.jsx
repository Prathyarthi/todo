import { useState } from "react"

export function CreateTodo() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    return <div>
        <input style={{ margin: 10, padding: 10 }} type="text" placeholder="title" onChange={function (e) {
            value = e.target.value
            setTitle(e.target.value)
        }} /><br /><br />
        <input style={{ margin: 10, padding: 10 }} type="text" placeholder="description" onChange={function (e) {
            value = e.target.value
            setDescription(e.target.value)
        }} /><br /><br />

        <button
                onClick={
                fetch('http://localhost:3000/todo', {
                    method: 'POST',
                    body: JSON.stringify({
                        title: title,
                        description: description,
                    }),
                    // headers: {
                    //     "content-type": "application/json"
                    // }
                })
                    .then(async function (res) {
                        const json = await res.json()
                        console.log(json.todos)
                        alert("Todo Added!")
                    })
            }
            style={{ margin: 10, padding: 10 }} >Add a Todo!</button>
    </div>
}