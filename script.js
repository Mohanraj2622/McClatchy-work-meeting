// meeting data
const meetings = [
  { title: "Daily Huddle", url: "https://meet.google.com/nyn-hdcy-sxt"},
  { title: "Priyanka Akka", url: "https://meet.google.com/wty-zimo-rrc"},
  { title: "Design Review", url: "https://teams.microsoft.com/l/meetup-join/xyz" },
  { title: "Project Kickoff", url: "https://zoom.us/j/0987654321" }
];

const meetingList = document.getElementById('meeting-list');

meetings.forEach(meeting => {
  const card = document.createElement('div');
  card.className = 'meeting-card';
  
  const title = document.createElement('div');
  title.className = 'meeting-title';
  title.textContent = meeting.title;

  const button = document.createElement('button');
  button.className = 'join-btn';
  button.textContent = 'Join Now';
  button.onclick = () => window.open(meeting.url, '_blank');

  card.appendChild(title);
  card.appendChild(button);
  meetingList.appendChild(card);
});
