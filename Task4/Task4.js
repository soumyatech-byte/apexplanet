/* ===== Section Navigation ===== */
function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

/* ===== Contact Form ===== */
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
});

/* ===== To-Do List Logic ===== */
const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addTask');
const list = document.getElementById('taskList');

document.addEventListener('DOMContentLoaded', () => {
  loadTasks();
  showSection('portfolio');
});

addBtn.addEventListener('click', () => {
  const task = input.value.trim();
  if (task) {
    addTask(task);
    saveTask(task);
    input.value = '';
  }
});

function addTask(taskText) {
  const li = document.createElement('li');
  li.textContent = taskText;
  li.addEventListener('click', () => {
    li.remove();
    removeTask(taskText);
  });
  list.appendChild(li);
}

function saveTask(task) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(addTask);
}

function removeTask(task) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks = tasks.filter(t => t !== task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

/* ===== Product Page Logic ===== */
const products = [
  { name: "Laptop", category: "electronics", price: 800, rating: 4.5 },
  { name: "T-Shirt", category: "clothing", price: 20, rating: 4.2 },
  { name: "Smartphone", category: "electronics", price: 600, rating: 4.8 },
  { name: "Novel Book", category: "books", price: 15, rating: 4.1 },
  { name: "Jeans", category: "clothing", price: 40, rating: 4.4 },
];

const productList = document.getElementById('productList');
const categoryFilter = document.getElementById('categoryFilter');
const sortBy = document.getElementById('sortBy');

function displayProducts(items) {
  productList.innerHTML = '';
  items.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h3>${p.name}</h3>
      <p>Category: ${p.category}</p>
      <p>Price: $${p.price}</p>
      <p>Rating: ⭐ ${p.rating}</p>`;
    productList.appendChild(card);
  });
}

function filterAndSort() {
  let filtered = products;
  const cat = categoryFilter.value;
  if (cat !== 'all') filtered = filtered.filter(p => p.category === cat);

  if (sortBy.value === 'price')
    filtered.sort((a, b) => a.price - b.price);
  else if (sortBy.value === 'rating')
    filtered.sort((a, b) => b.rating - a.rating);

  displayProducts(filtered);
}

categoryFilter.addEventListener('change', filterAndSort);
sortBy.addEventListener('change', filterAndSort);

displayProducts(products);
