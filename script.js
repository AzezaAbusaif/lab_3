// ========================================================
// JavaScript DOM Manipulation Lab - 40 Mini Exercises
// ========================================================

// 🟩 PART 1: Selecting and Styling Elements (1–10)

    document.getElementById("title").style.color = "red";


// 2️⃣ Change background color of all <p> elements to lightgray.

  const paragraphs = document.getElementsByTagName("p");
    for (let i = 0; i < paragraphs.length; i++) {
      paragraphs[i].style.backgroundColor = "lightgray";
    }
// 3️⃣ Change heading text (#title) to "Welcome to the DOM Lab!".
    document.getElementById("title").textContent = "Welcome to the DOM Lab!";


// 4️⃣ Add a solid black border to all <div> elements.
 const divs = document.getElementsByTagName("div");
    for (let i = 0; i < divs.length; i++) {
      divs[i].style.border = "2px solid black";
    }

// 5️⃣ Increase font size of the first <h1> to 36px.
const firstHeading = document.getElementsByTagName("h1")[0];
    firstHeading.style.fontSize = "36px";

// 6️⃣ Change text color of elements with class="highlight" to blue.

 const highlights = document.getElementsByClassName("highlight");
    for (let i = 0; i < highlights.length; i++) {
      highlights[i].style.color = "blue";
    }
// 7️⃣ Add CSS class "active" to the first <div>.

const firstDiv = document.getElementsByTagName("div")[0];
    firstDiv.classList.add("active");
// 8️⃣ Change the <body> background color to lightblue.
    document.body.style.backgroundColor = "lightblue";


// 9️⃣ Set the font family of all <p> elements to Arial.

 for (let i = 0; i < paragraphs.length; i++) {
      paragraphs[i].style.fontFamily = "Arial, sans-serif";
    }
// 🔟 Change the image source of #sampleImage.
    document.getElementById("sampleImage").src = "new-image.jpg";


// 🟦 PART 2: Creating and Appending Elements (11–20)
 // 1️⃣1️⃣ Create a new <p> and append it to the <body>.
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "This is a new paragraph added to the body.";
    document.body.appendChild(newParagraph);

    // 1️⃣2️⃣ Create a new <li> and add it to the existing <ul>.
    const newListItem = document.createElement("li");
    newListItem.textContent = "ReactJS";
    document.querySelector("ul").appendChild(newListItem);

    // 1️⃣3️⃣ Create a <button> labeled "Click Me!" and append it to a <div>.
    const button = document.createElement("button");
    button.textContent = "Click Me!";
    divs[0].appendChild(button);

    // 1️⃣4️⃣ Create <h2> dynamically and insert it before the first <p>.
    const newHeading = document.createElement("h2");
    newHeading.textContent = "This is a dynamically added subheading.";
    const firstP = document.querySelector("p");
    document.body.insertBefore(newHeading, firstP);

    // 1️⃣5️⃣ Create an image and set width and height.
    const newImg = document.createElement("img");
    newImg.src = "https://via.placeholder.com/150";
    newImg.width = 150;
    newImg.height = 150;
    document.body.appendChild(newImg);

    // 1️⃣6️⃣ Add 3 new <li> items using a loop.
    const ul = document.querySelector("ul");
    for (let i = 1; i <= 3; i++) {
      const li = document.createElement("li");
      li.textContent = "New Item " + i;
      ul.appendChild(li);
    }

    // 1️⃣7️⃣ Create a <div> with class "card" and text inside.
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = "This is a card element created dynamically.";
    document.body.appendChild(card);

    // 1️⃣8️⃣ Append a paragraph containing your name.
    const nameP = document.createElement("p");
    nameP.textContent = "Created by: Azeza Jamal Abusaif";
    document.body.appendChild(nameP);

    // 1️⃣9️⃣ Add a <span>[Edited]</span> inside every <p>.
    for (let i = 0; i < paragraphs.length; i++) {
      const span = document.createElement("span");
      span.textContent = " [Edited]";
      paragraphs[i].appendChild(span);
    }

    // 2️⃣0️⃣ Remove the last child of <ul>.
    ul.removeChild(ul.lastElementChild);


// 🟨 PART 3: Event Handling (21–30)
 // 2️⃣1️⃣ Add click event that shows an alert.
    const alertButton = document.createElement("button");
    alertButton.textContent = "Show Alert";
    document.body.appendChild(alertButton);
    alertButton.addEventListener("click", () => {
      alert("Hello! This is an alert message!");
    });

    // 2️⃣2️⃣ Change background color of a <div> when clicked.
    const mainDiv = document.getElementById("mainDiv");
    mainDiv.addEventListener("click", () => {
      mainDiv.style.backgroundColor = "lightgreen";
    });

    // 2️⃣3️⃣ When hovering over <p>, make it bold.
    const paragraph = document.querySelector("p");
    paragraph.addEventListener("mouseenter", () => {
      paragraph.style.fontWeight = "bold";
    });

    // 2️⃣4️⃣ When mouse leaves paragraph, remove bold style.
    paragraph.addEventListener("mouseleave", () => {
      paragraph.style.fontWeight = "normal";
    });

    // 2️⃣5️⃣ Add button to hide the image.
    const hideBtn = document.createElement("button");
    hideBtn.textContent = "Hide Image";
    document.body.appendChild(hideBtn);
    hideBtn.addEventListener("click", () => {
      document.getElementById("sampleImage").style.display = "none";
    });

    // 2️⃣6️⃣ Add button to show the image again.
    const showBtn = document.createElement("button");
    showBtn.textContent = "Show Image";
    document.body.appendChild(showBtn);
    showBtn.addEventListener("click", () => {
      document.getElementById("sampleImage").style.display = "block";
    });

    // 2️⃣7️⃣ Create a counter button that increases with each click.
    let count = 0;
    const counterBtn = document.createElement("button");
    counterBtn.textContent = "Count: 0";
    document.body.appendChild(counterBtn);
    counterBtn.addEventListener("click", () => {
      count++;
      counterBtn.textContent = "Count: " + count;
    });

    // 2️⃣8️⃣ Display entered text from an input when button clicked.
    const input = document.getElementById("userInput");
    const showTextBtn = document.getElementById("showTextBtn");
    showTextBtn.addEventListener("click", () => {
      alert("You entered: " + input.value);
    });

    // 2️⃣9️⃣ Change background color randomly when a button is clicked.
    const colorBtn = document.createElement("button");
    colorBtn.textContent = "Random Background";
    document.body.appendChild(colorBtn);
    colorBtn.addEventListener("click", () => {
      const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      document.body.style.backgroundColor = randomColor;
    });

    // 3️⃣0️⃣ Display which key is pressed.
    const keyDisplay = document.createElement("p");
    keyDisplay.textContent = "Press any key...";
    document.body.appendChild(keyDisplay);
    document.addEventListener("keydown", (event) => {
      keyDisplay.textContent = "You pressed: " + event.key;
    });


// 🟧 PART 4: Modifying and Traversing DOM (31–40)

// 3️⃣1️⃣ Change text of the first <li>.
    const firstLi = document.querySelector("ul li");
    firstLi.textContent = "Mango";

    // 3️⃣2️⃣ Get input value when button clicked.
    const btn = document.getElementById("actionBtn");
    btn.addEventListener("click", () => {
      const inputVal = document.getElementById("userInput").value;
      alert("Input value: " + inputVal);
    });

    // 3️⃣3️⃣ Count number of <p> and alert the count.
    const allP = document.getElementsByTagName("p");
    alert("There are " + allP.length + " <p> elements on the page.");

    // 3️⃣4️⃣ Remove all <p> elements.
    for (let p of allP) {
      p.remove();
    }

    // 3️⃣5️⃣ Replace existing <h2> with new one.
    const oldH2 = document.querySelector("h2");
    if (oldH2) {
      const newH2 = document.createElement("h2");
      newH2.textContent = "This is the NEW heading!";
      oldH2.replaceWith(newH2);
    } else {
      const newH2 = document.createElement("h2");
      newH2.textContent = "This is a newly added heading!";
      document.body.insertBefore(newH2, document.body.firstChild);
    }

    // 3️⃣6️⃣ Add CSS class 'highlighted' to all <li>.
    const listItems = document.querySelectorAll("li");
    listItems.forEach(li => li.classList.add("highlighted"));

    // 3️⃣7️⃣ Toggle a CSS class on <div> when clicked.
    const myDiv = document.getElementById("myDiv");
    myDiv.addEventListener("click", () => {
      myDiv.classList.toggle("toggled");
    });

    // 3️⃣8️⃣ Clone an existing element and append copy.
    const cloned = myDiv.cloneNode(true);
    cloned.textContent = "I'm a cloned div!";
    document.body.appendChild(cloned);

    // 3️⃣9️⃣ Scroll smoothly to bottom when button clicked.
    const scrollBtn = document.createElement("button");
    scrollBtn.textContent = "Scroll to Bottom";
    document.body.appendChild(scrollBtn);
    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    });

    // 4️⃣0️⃣ Build list dynamically using innerHTML from an array.
    const fruits = ["Orange", "Kiwi", "Pineapple", "Grapes"];
    const dynamicList = document.createElement("ul");
    dynamicList.innerHTML = fruits.map(fruit => `<li>${fruit}</li>`).join("");
    document.body.appendChild(dynamicList);