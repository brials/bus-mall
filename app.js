var objArray =[];
var imagePlace = document.getElementById('images');
var chartPlace = document.getElementById('chart');

function Image(id, url, count, viewed){
  this.id = id;
  this.url = url;
  objArray.push(this);
}
Image.prototype.count = 0;
Image.prototype.viewed = 0;

// Start of defining functions

//populateArray Function To be run only first time;
function initialArray(){
  new Image('./pictures/bag.jpg', 'bag');
  new Image('./pictures/banana.jpg', 'banana');
  new Image('./pictures/bathroom.jpg', 'bathroom');
  new Image('./pictures/boots.jpg', 'boots');
  new Image('./pictures/breakfast.jpg', 'breakfast');
  new Image('./pictures/bubblegum.jpg', 'bubblegum');
  new Image('./pictures/chair.jpg', 'chair');
  new Image('./pictures/cthulhu.jpg', 'cthulhu');
  new Image('./pictures/dog-duck.jpg', 'dog-duck');
  new Image('./pictures/dragon.jpg', 'dragon');
  new Image('./pictures/pen.jpg', 'pen');
  new Image('./pictures/pet-sweep.jpg', 'pet-sweep');
  new Image('./pictures/scissors.jpg', 'scissors');
  new Image('./pictures/shark.jpg', 'shark');
  new Image('./pictures/sweep.jpg', 'sweep');
  new Image('./pictures/tauntaun.jpg', 'tauntaun');
  new Image('./pictures/unicorn.jpg', 'unicorn');
  new Image('./pictures/usb-0.jpg', 'usb-0');
  new Image('./pictures/water-can.jpg', 'water-can');
  new Image('./pictures/wine-glass.jpg', 'wine-glass');
}

// Render Function

// Function for handling images

// Function for selecting 3 non duplicate images.

// Function for rendering images.

// Function for rendering table


// Start of Function Calls

if(objArray.legth === 0){
  initialArray();
}
