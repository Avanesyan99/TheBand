let img = document.getElementById('img');

let arr = [
'https://www.w3schools.com/w3images/la.jpg',
'https://www.w3schools.com/w3images/ny.jpg',
'https://www.w3schools.com/w3images/chicago.jpg'
];

img.setAttribute('src', arr[0])

let i = 0;

setInterval(() => {
 img.setAttribute('src', arr[i])
 i++;

 if(i == arr.length) {
  i = 0
 }

},3000)