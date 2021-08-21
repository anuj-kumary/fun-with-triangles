const triangleAngle = document.querySelectorAll(".triangles-angle");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const output = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}

function isTriangle() {
  const sumOfAngles = calculateSumOfAngles(
    Number(triangleAngle[0].value),
    Number(triangleAngle[1].value),
    Number(triangleAngle[2].value)
  );
  console.log(sumOfAngles);
  if (sumOfAngles === 180) {
    output.innerText = "Yayy, the angles form a triangle";
  } else {
    output.innerText = "Ohh!, the angles do not form a triangle";
  }
}

isTriangleBtn.addEventListener("click", isTriangle);
