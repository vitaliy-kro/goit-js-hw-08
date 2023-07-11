import throttle from 'lodash.throttle';
import { Feedback } from '../types/feedback.types';

const formRef = document.querySelector<HTMLFormElement>('.feedback-form')!;
const FEEDBACK_STORAGE_KEY = 'feedback-form-state';

initForm();

function initForm() {
  const storageItem = localStorage.getItem(FEEDBACK_STORAGE_KEY);

  if (storageItem) {
    const parsedStorageValues = JSON.parse(storageItem);
    Object.entries(parsedStorageValues).forEach(([name, value]) => {
      const element = formRef.elements[
        name as keyof typeof formRef.elements
      ] as HTMLInputElement;
      element.value = value as string;
    });
  }
}

formRef.addEventListener('input', throttle(InputListener, 500));

function InputListener(e: Event) {
  const inputElement = e.target as HTMLInputElement;
  if (inputElement.name === 'email' || inputElement.name === 'message') {
    const feedbackValues = getFeedbackFromLocalStorage();
    feedbackValues[inputElement.name] = inputElement.value;
    setFeedbackToLocalStorage(feedbackValues);
  }
}
function getFeedbackFromLocalStorage() {
  const feedback = localStorage.getItem(FEEDBACK_STORAGE_KEY);
  return feedback ? JSON.parse(feedback) : {};
}
function setFeedbackToLocalStorage(value: Feedback) {
  localStorage.setItem(FEEDBACK_STORAGE_KEY, JSON.stringify(value));
}

formRef.addEventListener('click', onSubmitForm);

function onSubmitForm(e: Event) {
  const buttonElement = e.target as HTMLButtonElement;
  if (buttonElement.type === 'submit') {
    e.preventDefault();
    formRef.reset();
    console.log(getFeedbackFromLocalStorage());
    removeFeedbackFromLocalStorage();
  }
}

function removeFeedbackFromLocalStorage() {
  localStorage.removeItem(FEEDBACK_STORAGE_KEY);
}
