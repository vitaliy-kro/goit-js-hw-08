import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
let userValues = {};
const FEEDBACK_STORAGE_KEY = 'feedback-form-state';

initForm();

formRef.addEventListener(
  'input',
  throttle(e => {
    if (e.target.name === 'email' || e.target.name === 'message') {
      userValues[e.target.name] = e.target.value;
      localStorage.setItem(FEEDBACK_STORAGE_KEY, JSON.stringify(userValues));
    }
  }, 500)
);

formRef.addEventListener('click', e => {
  if (e.target.type === 'submit') {
    e.preventDefault();
    formRef.reset();
    console.log(JSON.parse(localStorage.getItem(FEEDBACK_STORAGE_KEY)));
    localStorage.removeItem(FEEDBACK_STORAGE_KEY);
    userValues = {};
  }
});

function initForm() {
  let parsedStorageValues = localStorage.getItem(FEEDBACK_STORAGE_KEY);
  console.log('parsedStorageValues', parsedStorageValues);

  if (parsedStorageValues) {
    parsedStorageValues = JSON.parse(parsedStorageValues);
    Object.entries(parsedStorageValues).forEach(([name, value]) => {
      formRef.elements[name].value = value;
      userValues[name] = value;
    });
  }
}
