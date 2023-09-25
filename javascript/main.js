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

