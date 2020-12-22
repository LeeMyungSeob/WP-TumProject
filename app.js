const blogContainer = document.querySelector('.blog-container');
const titleControl = document.getElementById('title');
const contentControl = document.getElementById('content');
const button = document.getElementById('button');


button.addEventListener('click', () => {

    const tc = document.getElementById('title').value;
    const ct = document.getElementById('content').value;

    const li = document.createElement('li');
    li.innerHTML = "<h4 class='item-title'>" + tc + "</h4><p>" + ct + "</p>"
    blogContainer.appendChild(li);

    titleControl.value = '';
    contentControl.value = '';
});

