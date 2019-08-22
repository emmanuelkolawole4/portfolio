let database = [
	{
		username:	'kola',
		password:	'fola'
	},
	{
		username:	'sally',
		password:	'123'
	},
	{
		username:	'ingrid',
		password:	'777'
	}
];

let newsfeed = [
	{
		username:	'Bobby',
		timeline:	'So tired from all that learning'
	},
	{
		username:	'Sally',
		timeline:	'Javascript is so cool'
	},
	{
		username:	'Bobby',
		timeline:	'So tired from all that learning'
	}
];

let userNamePrompt = prompt('enter username');
let userPasswordPrompt = prompt('enter password');

const isUserValid = (user, pass) => {
	for(let i = 0; i < database.length; i++){
		if (database[i].username === user && database[i].password === pass) {
			return true;
		}
	}
	return false;
}

const signIn = (user, pass) => {
	if (isUserValid(user, pass)) {
		console.log(newsfeed);
	} else {
		alert('Sorry, wrong login details! check username or password and try again')
	}
}


const myForm = document.querySelector('#my-form');
const button = document.querySelector('#btn');
const msg = document.querySelector('.msg');
const input = document.querySelector('#item');
const ul = document.querySelector('ul');
const lists = document.querySelectorAll('li');

button.style.background = 'gold';
button.style.fontWeight = 'bolder';

const inputLength = () => {
	return input.value.length;
}

const createListElement = () => {
	let li = document.createElement('li');
	li.appendChild(document.createTextNode(`${input.value}`));
	ul.appendChild(li);
	// clear the fields
	input.value = '';
}

const onSubmit = (e) => {
	e.preventDefault();
	if(inputLength() > 0) {
		createListElement();
	} else {
		msg.classList.add('error');
		msg.innerText = 'Please enter an item!'
	}
}

function addClassDone() {
	this.classList.toggle('done');
}

lists.forEach((list) => {
	list.addEventListener('click', addClassDone);
})


button.addEventListener('click', onSubmit);
signIn(userNamePrompt, userPasswordPrompt);