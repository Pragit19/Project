// Availability Form Handling
const availabilityForm = document.getElementById('availability-form');
const availabilityGrid = document.getElementById('availability-grid');

availabilityForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const day = document.getElementById('day').value;
  const startTime = document.getElementById('start-time').value;
  const endTime = document.getElementById('end-time').value;

  // Add availability to grid
  const availabilityRow = document.createElement('div');
  availabilityRow.innerHTML = `
    <span>${username}</span>
    <span>${day}</span>
    <span>${startTime} - ${endTime}</span>
  `;
  availabilityGrid.appendChild(availabilityRow);
});

// Scheduling Form Handling
const schedulingForm = document.getElementById('scheduling-form');
const schedulingGrid = document.getElementById('scheduling-grid');

schedulingForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const sessionType = document.getElementById('session-type').value;
  const users = Array.from(document.getElementById('users').selectedOptions).map(option => option.value);
  const date = document.getElementById('date').value;
  const startTime = document.getElementById('start-time').value;
  const endTime = document.getElementById('end-time').value;

  // Add scheduling to grid
  const schedulingRow = document.createElement('div');
  schedulingRow.innerHTML = `
    <span>${sessionType}</span>
    <span>${users.join(', ')}</span>
    <span>${date}</span>
    <span>${startTime} - ${endTime}</span>
  `;
  schedulingGrid.appendChild(schedulingRow);
});

// Populate users dropdown
const usersDropdown = document.getElementById('users');
const usersList = ['John Doe', 'Jane Doe', 'Bob Smith']; // List of users
usersList.forEach((user) => {
  const option = document.createElement('option');
  option.value = user;
  option.text = user;
  usersDropdown.appendChild(option);
});

// Initialize grids
availabilityGrid.innerHTML = '';
schedulingGrid.innerHTML = '';
