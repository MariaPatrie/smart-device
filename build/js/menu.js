var navToggleSections = document.querySelector('.sections__toggle-sections');
var navToggleContacts = document.querySelector('.sections__toggle-contacts');
var mainNavSections = document.querySelector('.page-footer__sections');
var mainNavContacts = document.querySelector('.page-footer__contacts');

/*mainNav.classList.remove('main-nav--nojs');*/

navToggleSections.addEventListener('click', function() {
  if (mainNavSections.classList.contains('sections--closed')) {
    mainNavSections.classList.remove('sections--closed');
    mainNavSections.classList.add('sections--opened');
    mainNavContacts.classList.add('sections--closed');
    mainNavContacts.classList.remove('sections--opened');
  } else {
    mainNavSections.classList.add('sections--closed');
    mainNavSections.classList.remove('sections--opened');
  }
});

navToggleContacts.addEventListener('click', function() {
  if (mainNavContacts.classList.contains('sections--closed')) {
    mainNavContacts.classList.remove('sections--closed');
    mainNavContacts.classList.add('sections--opened');
    mainNavSections.classList.add('sections--closed');
    mainNavSections.classList.remove('sections--opened');
  } else {
    mainNavContacts.classList.add('sections--closed');
    mainNavContacts.classList.remove('sections--opened');
  }
});

var link = document.querySelector('.feedback-button');

var popup = document.querySelector('.modal-feedback');
var overlay = document.querySelector('.overlay');
var close = popup.querySelector('.modal-close');

var form = popup.querySelector('form');
var user = popup.querySelector('input[name="name"]');
var phone = popup.querySelector('input[name="phone"]');
var question = popup.querySelector('textarea[name="question"]');

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem('user');
} catch (err) {
  isStorageSupport = false;
}


link.addEventListener('click', function (evt) {
  evt.preventDefault();
  overlay.classList.add('overlay-show');
  popup.classList.add('modal-show');
  document.getElementsByTagName('body')[0].style.overflow='hidden';

  if (storage) {
    user.value = storage;
    phone.value = localStorage.getItem('phone');
    question.value = localStorage.getItem('question');
    user.focus();
  } else {
    user.focus();
  }
});

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal-show');
  overlay.classList.remove('overlay-show');
  document.getElementsByTagName('body')[0].style.overflow[1]='auto';
  popup.classList.remove('modal-error');
});

overlay.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal-show');
  overlay.classList.remove('overlay-show');
  document.getElementsByTagName('body')[0].style.overflow[1]='auto';
  popup.classList.remove('modal-error');
});

form.addEventListener('submit', function (evt) {
  if (!user.value || !phone.value) {
    evt.preventDefault();
    popup.classList.remove('modal-error');
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('user', user.value);
      localStorage.setItem('phone', phone.value);
      localStorage.setItem('question', question.value);
    }
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains('modal-show')) {
      popup.classList.remove('modal-show');
      overlay.classList.remove('overlay-show');
      document.getElementsByTagName('body')[0].style.overflow[1]='auto';
      popup.classList.remove('modal-error');
    }
  }
});

function setCursorPosition(pos, elem) {
  elem.focus();
  if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
  else if (elem.createTextRange) {
    var range = elem.createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select()
  }
};

function mask(evt) {
  var matrix = "+7 (___) ___ ____";
  var i = 0;
  var def = matrix.replace(/\D/g, "");
  var val = this.value.replace(/\D/g, "");

  if (def.length >= val.length) val = def;
  this.value = matrix.replace(/./g, function(a) {
    return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
  });

  if (evt.type == 'blur') {
    if (this.value.length == 2) this.value = "";
    if (this.value.length < 18) {
      this.setCustomValidity('Номер должен состоять из 10-ти цифр');
      this.focus;
    } else {
      userNameInput.setCustomValidity('');
    }
  } else setCursorPosition(this.value.length, this)
};

phone.addEventListener('input', mask);
phone.addEventListener('focus', mask);
phone.addEventListener('blur', mask);

var feedback = document.querySelector('.feedback-form');
var phoneUser = feedback.querySelector('input[name="phone"]');

phoneUser.addEventListener('input', mask);
phoneUser.addEventListener('focus', mask);
phoneUser.addEventListener('blur', mask);

function scrollTo(evt) {
  evt.preventDefault();
  var blockID = this.getAttribute('href');

  document.querySelector(blockID).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
};

var anchorFeedback = document.querySelector('.scroll-to-feedback');
var anchorAdvantages = document.querySelector('.scroll-to-advantages');

anchorFeedback.addEventListener('click', scrollTo);
anchorAdvantages.addEventListener('click', scrollTo);
