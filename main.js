const btnStarted = document.querySelector('.form button');
const inputEmail = document.getElementById('email');
const messageEmail = document.querySelector('.message');

const tester =
  /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

const emailValidator = email => {
  if (!email) return false;

  const parts = email.split('@').filter(part => part);

  if (parts.length !== 2) return false;

  const [account, address] = parts;

  if (account.length > 64 || address > 255) return false;

  const domainParts = address.split('.');

  const sizeVerify = str => str.length > 63;

  if (domainParts.some(sizeVerify)) return false;

  if (tester.test(email) === false) return false;

  return true;
};

btnStarted.addEventListener('click', () => {
  const email = inputEmail.value.trim();

  const isValid = emailValidator(email);

  if (isValid === false) messageEmail.classList.remove('hidden');
});

inputEmail.addEventListener('input', () => {
  messageEmail.classList.add('hidden');
});
