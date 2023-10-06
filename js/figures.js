let figuresContainer = document.getElementById("figures-container");

const figures = [
  {
    img: "triangle.png",
    title: "Triangle",
    formula: "Area (A) = 0.5 X b X h",
    firstElement: "b",
    secondElement: "h",
  },
  {
    img: "rectangle.png",
    title: "Rectangle",
    formula: "Area (A) = W X I",
    firstElement: "W",
    secondElement: "I",
  },
  {
    img: "parallelogram.png",
    title: "Parallelogram",
    formula: "Area (A) = b X h",
    firstElement: "b",
    secondElement: "h",
  },
  {
    img: "rhombus.png",
    title: "Rhombus",
    formula: "Area (A) = 0.5 X d1 X d2",
    firstElement: "d1",
    secondElement: "d2",
  },
  {
    img: "pentagon.png",
    title: "Pentagon",
    formula: "Area (A) = 0.5 X p X b",
    firstElement: "p",
    secondElement: "b",
  },
  {
    img: "ellipse.png",
    title: "Ellipse",
    formula: "Area (A) = πab",
    firstElement: "p",
    secondElement: "b",
  },
];

for (let figure of figures) {
  let newFigure = document.createElement("div");
  newFigure.setAttribute(
    "class",
    "flex flex-col items-center rounded-md p-5 border hover:border-blue-500"
  );
  newFigure.innerHTML = `
          <!-- figure -->
          <div class="h-40">
                    <img src="images/${figure.img}" class="h-full" alt="">
          </div>
          <!-- content -->
          <div class="text-center">
                    <h4>${figure.title}</h4>
                    <p class="">${figure.formula}</p>
                    <div class="flex items-center my-2 input-field">
                              <input type="text"
                                        class="w-20 px-1 bg-gray-200/25 border mr-1 input-value"
                                        placeholder="${figure.firstElement}">
                              <p class="mr-2">cm</p>
                              <input type="text"
                                        class="w-20 px-1 bg-gray-200/25 border mr-1 input-value"
                                        placeholder="${figure.secondElement}">
                              <p class="mr-2">cm</p>
                              
                    </div>
                    <div class="hidden"><small class ="text-red-500 wrong-value">Please enter numbers only</small></div>
                    <button class="py-1 px-12 mt-3 rounded-md bg-blue-500 text-white calculate-btn">Calculate</button>
          </div>
  `;
  figuresContainer.appendChild(newFigure);
}
