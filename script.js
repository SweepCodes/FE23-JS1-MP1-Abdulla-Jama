const row = ["Rad1", "Rad2", "Rad3", "Rad4", "Rad5"];
const size = ["1rem", "2rem", "2.5rem", "3.5rem", "4.5rem"];
const arr1 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const arr2 = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];
const arr3 = [
  "ett",
  "två",
  "tre",
  "fyra",
  "fem",
  "sex",
  "sju",
  "åtta",
  "nio",
  "tio",
];

for (let i = 0; i < 5; i++) {
  const rowLi = document.createElement("p");
  document.body.appendChild(rowLi);
  rowLi.innerText = row[i];
  rowLi.style.textAlign = "center";
  rowLi.style.color = `hsl(240,100%,70%)`;
  rowLi.style.fontWeight = "600";
  rowLi.style.fontSize = size[i];
  const hue = 110 + i * 25;
  rowLi.style.backgroundColor = `hsl(${hue}, 80%, 80%)`;
}
const section = document.createElement("div");
document.body.appendChild(section);
section.style.boxSizing = "border-box";
section.style.display = "flex";
section.style.justifyContent = "space-around";
section.style.alignItems = "center";
section.style.height = "300px";
section.style.border = "2px solid black";

for (let i = 0; i < 3; i++) {
  const divs = document.createElement("div");
  section.appendChild(divs);
  divs.style.boxSizing = "border-box";
  divs.style.display = "flex";
  divs.style.width = "10%";
  divs.style.padding = "10px";
  divs.style.flexDirection = "column";
  divs.style.backgroundColor = `hsl(245, 100%, 86%)`;

  if (i == 0) {
    for (let j = 0; j < 10; j++) {
      const div1P = document.createElement("p");
      divs.appendChild(div1P);
      div1P.style.boxSizing = "border-box";
      div1P.style.margin = "0";
      div1P.innerText = arr1[j];
      div1P.style.paddingLeft = "10px";
      div1P.style.paddingRight = "10px";
      div1P.style.width = "100%";
      if (j % 2 == 1) {
        div1P.style.backgroundColor = "white";
      } else if (j % 2 == 0) {
        div1P.style.backgroundColor = "black";
        div1P.style.color = "white";
      }
      if (j == 4) {
        div1P.style.backgroundColor = `hsl(245, 100%, 86%)`;
      }
    }
  }
  if (i == 1) {
    for (let k = 0; k < 10; k++) {
      const div1P = document.createElement("p");
      divs.appendChild(div1P);
      div1P.style.boxSizing = "border-box";
      div1P.style.margin = "0";
      div1P.innerText = arr2[k];
      div1P.style.paddingLeft = "10px";
      div1P.style.paddingRight = "10px";
      div1P.style.width = "100%";
      if (k % 2 == 0) {
        div1P.style.backgroundColor = "white";
      } else if (k % 1 == 0) {
        div1P.style.backgroundColor = "black";
        div1P.style.color = "white";
      }
      if (k == 1) {
        div1P.style.backgroundColor = `hsl(245, 100%, 86%)`;
      }
    }
  }
  if (i == 2) {
    for (let l = 0; l < 10; l++) {
      const div1P = document.createElement("p");
      divs.appendChild(div1P);
      div1P.style.boxSizing = "border-box";
      div1P.style.margin = "0";
      div1P.innerText = arr3[l];
      div1P.style.paddingLeft = "10px";
      div1P.style.paddingRight = "10px";
      div1P.style.width = "100%";
      div1P.style.textAlign = "right";
      if (l % 2 == 1) {
        div1P.style.backgroundColor = "white";
      } else if (l % 2 == 0) {
        div1P.style.backgroundColor = "black";
        div1P.style.color = "white";
      }
      if (l == 5) {
        div1P.style.backgroundColor = `hsl(245, 100%, 86%)`;
      }
    }
  }
}
