const heading=React.createElement(
    "div",{id:"parent"},
    React.createElement("div",{id:"child"},
       [ React.createElement("h1",{},"I am h1 tag!"),React.createElement("h2",{},"I am h2 tag!")]
    )
);
// console.log(heading);
const parent =ReactDOM.createRoot(document.getElementById("parent"));
parent.render(heading);