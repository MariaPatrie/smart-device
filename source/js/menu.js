var navToggleSections = document.querySelector('.sections__toggle');
var navToggleContacts = document.querySelector('.contacts__toggle');
var mainNavSections = document.querySelector('.page-footer__sections');
var mainNavContacts = document.querySelector('.page-footer__contacts');

/*mainNav.classList.remove('main-nav--nojs');*/

navToggleSections.addEventListener('click', function() {
  if (mainNavSections.classList.contains('sections--closed')) {
    mainNavSections.classList.remove('sections--closed');
    mainNavSections.classList.add('sections--opened');
  } else {
    mainNavSections.classList.add('sections--closed');
    mainNavSections.classList.remove('sections--opened');
  }
});

navToggleContacts.addEventListener('click', function() {
  if (mainNavContacts.classList.contains('contacts--closed')) {
    mainNavContacts.classList.remove('contacts--closed');
    mainNavContacts.classList.add('contacts--opened');
  } else {
    mainNavContacts.classList.add('contacts--closed');
    mainNavContacts.classList.remove('contacts--opened');
  }
});
