const heading = React.createElement(
  "div",
  {
    id: "parent",
  },
  [
    React.createElement("h2", {}, [
      React.createElement("h3", {}, "Hello World from React"),
      React.createElement("h3", {}, "Hello World from React"),
    ]),
  ],
  "Hello World from React"
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
