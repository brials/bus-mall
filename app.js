var objArray =[];
var imagePlace = document.getElementById('images');
var chartPlace = document.getElementById('chart');
var buttonPlace = document.getElementById('button');
var buttonPlace2 = document.getElementById('button2');
var globalCount = 0;

function Image(url, id){
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
  place.appendChild(tempEl);
}

// Function to search through array
function lookInArray(id){
  for(var i = 0; i < objArray.length; i++){
    if(objArray[i].id === id){
      return i;
    }
  }
}

// Function for selecting 3 non duplicate images.
function threeImageRandomizer(){
  var array = [];
  var count = 0;
  while(count < 3){
    var temp = randomImage();
    if(!objArray[temp].used){
      objArray[temp].used = true;
      array.push(temp);
      count +=1;
      objArray[temp].viewed += 1;
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
// Function for handling image clicks
function handleImageClick(event){
  event.preventDefault();
  var name = event.target.id;
  if(name === 'images'){
    return alert('Please click an image');
  }
  var index = lookInArray(name);
  objArray[index].count += 1;
  renderImages();
  globalCount += 1;
  if(globalCount === 25){
    imagePlace.innerHTML = '';
    render('button', 'Survey Done, Please Click Here', buttonPlace);
    render('button', 'Retake Survey?', buttonPlace2);
  }
}
// Function for rendering list on button click;
function handleButtonClick(event){
  event.preventDefault();
  chartPlace.innerHTML = '';
  for(var i =0; i < objArray.length; i++){
    var temp = objArray[i].id + ' has been chosen ' + objArray[i].count + ' times, and viewed ' + objArray[i].viewed + ' times.';
    render('li', temp, chartPlace);
  }
}
//Function for retaking survey.
function handleButtonClick2(event){
  event.preventDefault();
  chartPlace.innerHTML = '';
  buttonPlace.innerHTML = '';
  buttonPlace2.innerHTML = '';
  renderImages();
  globalCount = 0;
}


// Start of Function Calls

if(objArray.length === 0){
  initialArray();
}
renderImages();
imagePlace.addEventListener('click', handleImageClick);
buttonPlace.addEventListener('click', handleButtonClick);
buttonPlace2.addEventListener('click', handleButtonClick2);
