var navToggleSections = document.querySelector('.sections__toggle');
var navToggleContacts = document.querySelector('.contacts__toggle');
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
    mainNavContacts.classList.remove('sections--closed');
    mainNavContacts.classList.add('sections--opened');
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
    mainNavSections.classList.remove('sections--closed');
    mainNavSections.classList.add('sections--opened');
  }
});

var link = document.querySelector(".feedback-button");

var popup = document.querySelector(".modal-feedback");
var overlay = document.querySelector(".overlay");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var name = popup.querySelector("[name=name]");
var phone = popup.querySelector("[name=phone]");
var question = popup.querySelector("[name=question]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  overlay.classList.add("overlay-show");
  popup.classList.add("modal-show");

  if (storage) {
    name.value = storage;
    phone.value = storage;
    question.focus();
  } else {
    name.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  overlay.classList.remove("overlay-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!name.value || !phone.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", name.value);
      localStorage.setItem("phone", phone.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      overlay.classList.remove("overlay-show");
      popup.classList.remove("modal-error");
    }
  }
});
