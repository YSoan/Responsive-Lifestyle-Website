function upDate(previewPic) {
  console.log("Mouseover triggered"); // check if event fires
  console.log("Alt text: " + previewPic.alt);
  console.log("Image source: " + previewPic.src);

  // Change the text of the div with id 'image'
  document.getElementById("image").innerHTML = previewPic.alt;

  // Change the background image of the div with id 'image'
  document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
  console.log("Mouseout triggered"); // check if event fires

  // Reset to original state
  document.getElementById("image").innerHTML = "Hover over an image below to display here.";
  document.getElementById("image").style.backgroundImage = "url('')";
}
