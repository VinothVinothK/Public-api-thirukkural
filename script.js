let enterNum = document.getElementById("number");
let click = document.getElementById("click");
let para = document.getElementById("para");
console.log("Hello");

// click.addEventListener("click", () => {
//   fetch(`https://api-thirukkural.vercel.app/api?num=${enterNum.value}`)
//     .then((res) => res.json())
//     .then((data) => console.log(data.line1, data.line2, data.tam_exp))
//     .catch((err) => console.log(err));
// });

function display() {
  console.log(
    fetch(`https://api-thirukkural.vercel.app/api?num=${enterNum.value}`)
      .then((res) => res.json())
      .then((data) => console.log(data.line1, data.line2, data.tam_exp))
      .catch((err) => console.log(err))
  );
}

para.innerText = display();
