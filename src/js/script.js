let chooseBtn = document.getElementById('choose'),
  receiveBtn = document.getElementById('receive'),
  heading = document.getElementsByTagName('h2')[0],
  nameInput = document.getElementsByClassName('contactform_name')[0],
	text = document.getElementsByName('message')[0],
	phoneInput = document.querySelectorAll('.contactform_phone')[1],
	phone = document.getElementsByName('phone')[0],
	mailInput = document.querySelectorAll('.contactform_mail')[1],
	mail = document.querySelector('[name=mail]'),
	// ниже другой вариант
	// mail = document.getElementsByName('mail')[0],
  modal = document.querySelector('.modal'),
  closeBtn = document.querySelector('.close'),
  linkOne = document.querySelector('#linkOne'),
  linkTwo = document.querySelector('#linkTwo'),
  linkThree = document.querySelector('#linkThree'),
  linkLast = document.querySelector('#linkLast'),
  title = document.querySelector('h1'),
  // ниже 2 способа: через класс и вложенный спэн))
  // phoneNumber = document.querySelector('.main_tel_phone');
  phoneNumber = document.querySelectorAll('span')[1];


mailInput.addEventListener('input', function () {
  text.value = `Моя почта - ${mailInput.value} связь желательно по почте`;
});


phoneInput.addEventListener('input', function () {
  text.value = `Мой телефон: ${phoneInput.value} не отвечаю с 22 до 10`;
});

nameInput.addEventListener('input', function () {
  text.value = `Меня зовут ${nameInput.value}. И я хочу спросить: `;
});

linkLast.addEventListener('mouseenter', function () {
  title.textContent = 'Опачки нежданчик!';
});

linkLast.addEventListener('mouseleave', function () {
  title.textContent = 'Мы знаем как правильно отдохнуть душой и телом';
});

phoneNumber.addEventListener('mouseenter', function () {
  phoneNumber.textContent = 'Номер скрыт!)';
  phoneNumber.style.color = 'blue';
});

phoneNumber.addEventListener('mouseleave', function () {
  phoneNumber.textContent = '+7 (495) 539-24-42';
  phoneNumber.style.color = '';
});

linkOne.addEventListener('focus', function () {
  linkOne.style.color = 'red';
});

linkOne.addEventListener('blur', function () {
  linkOne.style.color = '';
});

linkTwo.addEventListener('mouseenter', function () {
  linkTwo.style.color = 'green';
});

linkTwo.addEventListener('mouseleave', function () {
  linkTwo.style.color = 'white';
});

linkThree.addEventListener('click', function () {
  linkThree.style.backgroundColor = 'indigo';
});

linkThree.addEventListener('dblclick', function () {
  linkThree.style.backgroundColor = '';
});

chooseBtn.addEventListener('mouseenter', function () {
  heading.textContent = 'Действительно все!';
});

chooseBtn.addEventListener('mouseleave', function () {
  heading.textContent = 'Все включено!';
});

receiveBtn.addEventListener('click', function () {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', function () {
  modal.style.display = 'none';
});
