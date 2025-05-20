// const h2s = document.querySelectorAll("h2");
// h2s.forEach((h2) => {
//   h2.style.backgroundColor = "blue";
//   h2.style.Color = "white";
//   h2.style.padding = "10px";
//   h2.style.borderRadius = "15px";
// });

// document.body.innerHTML = "hello";

// const h2 = document.createElement("h2")
// h2.innerText= "kuch v";
// h2.style.color = "green";
// h2.id = Math.round(Math.random()*10+1);
// console.log(document.body.appendChild(h2));

// const newhero = document.createElement("li");
// newhero.innerText = "Tony Starc";
// newhero.style.color = "blue";
// // console.log(document.body.ul.appendChild(li))

// console.log(document.querySelector(".heros").appendChild(newhero));

const addHero = (heroName) => {
  const newLi = document.createElement("li"); // Create a new <li> element
  newLi.innerText = heroName; // Set its text content
  newLi.style.color = "red"; // Style the <li>
  document.querySelector(".heros").appendChild(newLi); // Append to the <ul> with class "heros"
};

addHero("BATMAN");
addHero("atish");

const edithero = document.querySelector('li:first-child');
edithero.innerText = "shaktiman";

const editHero2 = (pos, textData) => {
  const heroToEdit = document.querySelector(`li:nth-child(${pos})`); // Use nth-child to select the position
  if (heroToEdit) {
    heroToEdit.innerText = textData; // Update text content
  } else {
    console.error(`No hero found at position ${pos}`);
  }
};
editHero2(6, "hello");
