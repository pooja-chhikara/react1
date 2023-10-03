//react element "namste react 🛰️ "
const heading=React.createElement("h1",{id:"one"},[


React.createElement("h2",{id:"a1"},[
    React.createElement("h2",{id:"a11"},"hi namste react 🛰️"),
    React.createElement("h2",{id:"a12"},"bye")
]),
React.createElement("h2",{id:"a2"},[
    React.createElement("h2",{id:"a21"},"hello react"),
    React.createElement("h2",{id:"a22"},"bye boredom")
])
]
)

//console.log(heading)
const root=ReactDOM.createRoot(document.getElementById("root"))
//console.log(root)

root.render(heading)


