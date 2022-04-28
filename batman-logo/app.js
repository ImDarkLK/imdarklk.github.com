
const input = document.getElementById("input");
const inputHolder = document.querySelector(".inputHolder");
const editBtn = document.querySelector(".editBtn");
const downloadBtn = document.querySelector(".downloadBtn");
const result = document.querySelector(".result");
const create = document.getElementById("create");
const text = document.querySelector("#capture .title");
const node = document.getElementById("capture");
const download = document.getElementById("download");
const main = document.querySelector("main");

input.value = "DARK KILLER";

result.style.display = "none";

function generateImage(capture) {
    domtoimage
      .toPng(capture)
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        result.appendChild(img);
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  }

create.addEventListener("click", () => {
  const capture = document.createElement("div");
  capture.setAttribute("id", "capture");

  const title = document.createElement("h1");
  title.classList.add("title");

  title.innerText = input.value;

  capture.appendChild(title);

  inputHolder.style.display = "none";
  result.style.display = "flex";

  result.appendChild(capture);

//   generateImage(capture);
});

editBtn.addEventListener("click", () => {
  result.style.display = "none";
  inputHolder.style.display = "flex";
  result.removeChild(result.children[1]);
});

// dom-to-image doesn't support background-clip
// solution from https://github.com/tsayen/dom-to-image/issues/131
const _serializeToString = XMLSerializer.prototype.serializeToString;
XMLSerializer.prototype.serializeToString = function (node) {
  return _serializeToString.call(this, node).replace(
    /background-image:/g,
    "-webkit-background-clip: text; background-image:" // Add the -webkit-background-clip
  );
};


downloadBtn.addEventListener("click", () => {
  domtoimage.toBlob(document.getElementById("capture")).then(function (blob) {
    window.saveAs(blob, input.value + ".png");
  });
});
