var objArray =[];
var imagePlace = document.getElementById('images');
var chartPlace = document.getElementById('chart');

function Image(url, id, count, viewed){
  this.id = id;
  this.url = url;
  objArray.push(this);
}
Image.prototype.count = 0;
Image.prototype.viewed = 0;
Image.prototype.used = false;

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
function render(el, content, place, newId, image){
  var tempEl = document.createElement(el);
  tempEl.textContent = content;
  tempEl.setAttribute('id', newId);
  tempEl.setAttribute('src', image);
  console.log(place);
  place.appendChild(tempEl);
}
// Function for handling images

// Function for selecting 3 non duplicate images.
function threeImageRandomizer(){
  var array = [];
  var count = 0;
  while(count < 3){
    var temp = randomImage();
    if(!objArray[temp].used){
      objArray[temp].used = true;
      console.log(objArray[temp].used);
      array.push(temp);
      count +=1;
    }
  }
  for(var i = 0; i < objArray.length; i++){
    if(array.indexOf(i) < 0){
      objArray[i].used = false;
    }
  }
  return array;
}

//function for random number.
function randomImage(){
  var output = Math.floor(Math.random() * 20);
  return output;
}
// Function for rendering images.
function renderImages(){
  imagePlace.innerHTML = '';
  var arr = threeImageRandomizer();
  for(var i = 0; i < arr.length; i++){
    render('img', '', imagePlace, objArray[arr[i]].id, objArray[arr[i]].url)
  }
}
// Function for rendering table


// Start of Function Calls

if(objArray.length === 0){
  initialArray();
}
