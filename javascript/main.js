// Creating list of skills
function createSkills() {
const skills = ['Java Script', 
                'HTM + CSS', 
                'UX Design', 
                'Visual Design', 
                'User Research', 
                'Usability Testing'];
const skillList = document.getElementById('skills');
for ( let i = 0; i < skills.length; i++) {
     const li = document.createElement('li');
     li.textContent = skills[i];
     skillList.appendChild(li);
}
};
createSkills();


async function logProjects() {
let req = await fetch ("https://api.github.com/users/Alevtina-Babinskaya/repos");
let data = await req.text();
let dataObject = JSON.parse(data);
const projectList = document.getElementById('projects');
for (let repository of dataObject ) {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${repository.html_url}">${repository.full_name}</a>`;
    projectList.appendChild(li);
}     

      
       }
logProjects();
 


function messagePosting() {
const form = document.getElementById('messageToPost');
const inputName = document.getElementById('fName');
const inputEmail = document.getElementById('fMail');
const message = document.getElementById('fMessage'); 
const ul = document.getElementById('messagePool');
//function posts new message when user fills out the form and pushes submit button
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const Name = inputName.value;
    inputName.value = '';
    const Email = inputEmail.value;
    inputEmail.value = '';
    const Message = message.value;
    message.value = '';
    const li = document.createElement('li');
    const p = document.createElement('p');
    const a = document.createElement('a');
    const span = document.createElement('span');
    const removeButton = document.createElement('button');
    const editButton = document.createElement('button');
    ul.appendChild(li);
    li.appendChild(p);
    p.appendChild(a);
    a.href = `mailto:${Email}`;
    a.innerText = `${Name}: `;
    p.appendChild(span);
    span.className = "post";
    span.textContent = Message;
    li.appendChild(editButton);
    editButton.value = 'Edit';
    editButton.textContent = 'Edit';
    editButton.className = 'editBtn';
    li.appendChild(removeButton);
    removeButton.value = 'Remove';
    removeButton.textContent = 'Remove';
    removeButton.className = 'removeBtn';
    
    
});


// the function allows user to delete and edit posted messages.

ul.addEventListener('click', (e) => {
    const button = e.target;
    const li = button.parentNode;
    const p = li.firstElementChild;
    if (button.textContent === 'Remove') {
        ul.removeChild(li);
    }
    else if (button.textContent === 'Edit') {
       const input = document.createElement('input');
       const span = p.lastElementChild;
       input.value = span.textContent;
       p.removeChild(span);
       p.appendChild(input);
       button.textContent = 'Save';

    }
    else if (button.textContent === 'Save') {
        const span = document.createElement('span');
        const input = p.lastElementChild;
        span.textContent = input.value;
        p.removeChild(input);
        p.appendChild(span);
        button.textContent = 'Edit';
    }

});
};
messagePosting();

/* burger menu add listeners to burger button and hidden website menu
 in case the screen width is less than 575px (smartphone).   
 */
function burgerMenu() {
    if (window.innerWidth < 575) {
const menu = document.getElementById('menu');
const burger = document.getElementById('burger');
burger.addEventListener('click', visibilityChange);
menu.addEventListener('click', visibilityChange);
};
};

function visibilityChange() {
const menu = document.getElementById('menu');
if (menu.style.visibility == 'hidden') {
    menu.style.visibility = "visible";
}
else {
    menu.style.visibility = "hidden";
}
};

burgerMenu();
