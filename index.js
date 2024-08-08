const loc = ["left", "center", "right"];



const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];

const name = "FreeLancer Forum";
const main = () => {
    const root = document.querySelector("#root");
    const h1 = document.createElement("h1");
    h1.innerHTML = name;
    h1.style.textAllign = loc[1];

    root.appendChild(h1);
};
main();