const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, React.createElement("div", {
        id: "sub1"
    }, [
        React.createElement("h1", {
            id: "tag"
        }, "hi lets start with react"),
        React.createElement("h2", {
            id: "tag2"
        }, "its an amazing journey ")
    ])),
    React.createElement("div", {
        id: "child2"
    }, React.createElement("div", {
        id: "sub2"
    }, [
        React.createElement("h1", {
            id: "tag"
        }, "hi lets start with react"),
        React.createElement("h2", {
            id: "tag2"
        }, "its an amazing journey ")
    ]))
]);
console.log(parent);
const heading = React.createElement("h1", {
    id: "a1",
    className: "abc",
    xyz: "learn"
}, "namste react");
console.log(heading) //object
;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
