const ul = document.getElementById('ul');

var keys = Object.keys(localStorage);

var data = [];
ul.innerHTML = '';
// Iterate through keys
keys.forEach(function(key) {
    var value = localStorage.getItem(key);
    data.push({ key: key, value: value });
});

data.forEach(function (element) {
    const li = document.createElement('li');
    li.textContent = `${element.key}: ${element.value}`;
    ul.appendChild(li);
    console.log(data);
});