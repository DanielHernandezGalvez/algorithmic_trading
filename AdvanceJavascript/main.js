// Spread operator


const task = {
    id:1,
    title: "Title 1",
    description: "Main description"
}

const user = {
    id: 5
}

console.log({
    ...task,
    ...user,
})