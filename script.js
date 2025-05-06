// Meeting data with additional information
const meetings = [
  {
    title: "Daily Huddle",
    url: "https://meet.google.com/nyn-hdcy-sxt",
    description: "Quick team check-in and updates",
    icon: "fas fa-users"
  },
  {
    title: "Priyanka-Akka",
    url: "https://meet.google.com/wty-zimo-rrc",
    description: "One-on-one discussion",
    icon: "fas fa-user"
  },
  {
    title: "Personal-Meet",
    url: "https://meet.google.com/wrc-sdeo-ivd",
    description: "Private conversations",
    icon: "fas fa-comments"
  },
];

// DOM elements
const meetingList = document.getElementById('meeting-list');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

// Generate meeting cards
function renderMeetings() {
  meetingList.innerHTML = '';
  
  meetings.forEach((meeting, index) => {
    const card = document.createElement('div');
    card.className = 'meeting-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    const content = document.createElement('div');
    content.className = 'meeting-content';
    
    const iconContainer = document.createElement('div');
    iconContainer.className = 'meeting-icon';
    iconContainer.innerHTML = `<i class="${meeting.icon}"></i>`;
    
    const details = document.createElement('div');
    details.className = 'meeting-details';
    
    const title = document.createElement('div');
    title.className = 'meeting-title';
    title.textContent = meeting.title;
    
    const description = document.createElement('div');
    description.className = 'meeting-description';
    description.textContent = meeting.description;
    
    details.appendChild(title);
    details.appendChild(description);
    
    content.appendChild(iconContainer);
    content.appendChild(details);
    
    const btnContainer = document.createElement('div');
    btnContainer.className = 'btn-container';
    
    const button = document.createElement('button');
    button.className = 'join-btn';
    button.innerHTML = `Join Now <i class="fas fa-arrow-right"></i>`;
    button.onclick = () => window.open(meeting.url, '_blank');
    
    btnContainer.appendChild(button);
    
    card.appendChild(content);
    card.appendChild(btnContainer);
    meetingList.appendChild(card);
  });
}

// Theme toggle functionality
function initThemeToggle() {
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeIcon.className = 'fas fa-sun';
  }
  
  // Theme toggle event listener
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    if (document.body.classList.contains('dark-theme')) {
      themeIcon.className = 'fas fa-sun';
      localStorage.setItem('theme', 'dark');
    } else {
      themeIcon.className = 'fas fa-moon';
      localStorage.setItem('theme', 'light');
    }
  });
}

// Add a new meeting programmatically
function addMeeting(title, url, description = 'New meeting', icon = 'fas fa-video') {
  meetings.push({ title, url, description, icon });
  renderMeetings();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderMeetings();
  initThemeToggle();
  
  // Add subtle fade-in animation to the container
  document.querySelector('.container').style.opacity = '0';
  setTimeout(() => {
    document.querySelector('.container').style.transition = 'opacity 0.5s ease';
    document.querySelector('.container').style.opacity = '1';
  }, 100);
});
