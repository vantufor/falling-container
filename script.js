const matrixContainer = document.querySelector('.matrix-container');

const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const columnCount = Math.floor(window.innerWidth / 20);
const rowCount = Math.floor(window.innerHeight / 20);

for (let i = 0; i < columnCount; i++) {
  const column = document.createElement('div');
  column.classList.add('matrix-column');

  for (let j = 0; j < rowCount; j++) {
    const char = characters[Math.floor(Math.random() * characters.length)];
    const charElement = document.createElement('div');
    charElement.textContent = char;
    column.appendChild(charElement);
  }

  matrixContainer.appendChild(column);
}