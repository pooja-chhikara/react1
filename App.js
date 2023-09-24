import React from 'react';
import  ReactDOM from 'react-dom/client';

{/* <div id="parent">
    <div id="parent">
        <h1>hi lets start with react</h1>
        <h2>its an amazing journey</h2>
    </div>
</div> */}
const parent=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},
    React.createElement("div",{id:"sub1"},
    [React.createElement("h1",{id:"tag"},"hi lets start with react and rock it "),React.createElement("h2",{id:"tag2"},"its an amazing journey ")]
    )
    ),
    React.createElement("div",{id:"child2"},
React.createElement("div",{id:"sub2"},
[React.createElement("h1",{id:"tag"},"hi lets start with react and enjoy the journey "),React.createElement("h2",{id:"tag2"},"its an amazing journey ")]
)
)
]
)
console.log(parent)
const heading=React.createElement("h1",{id:"a1",className:"abc",xyz:"learn"},"namste react")
console.log(heading)//object
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)
root.render(parent)

 