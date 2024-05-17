// Sample data for demonstration
const workRequests = [
  {
    id: 1,
    type: "Painting",
    user: "Admasu Alemayehu",
    date: "May 6, 2024",
    location: "Saris, Addis Ababa",
    description: "Painting of 4 room house",
    contactName: "Admasu Alemayehu",
    contactEmail: "abcd@example.com",
    contactPhone: "09123456789",
  },
  {
    id: 2,
    type: "Electrical",
    user: "Fikadu Yilma",
    date: "May 7, 2024",
    location: "Bole, Addis Ababa",
  },
];

// Function to render work requests as cards
function renderWorkRequests() {
  const container = document.getElementById("workRequestsContainer");
  container.innerHTML = "";

  workRequests.forEach((request) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
            <h2>${request.type}</h2>
            <p><strong>User:</strong> ${request.user}</p>
            <p><strong>Date:</strong> ${request.date}</p>
            <p><strong>Location:</strong> ${request.location}</p>
            <p><strong>Description:</strong> ${request.description || "N/A"}</p>
            <button class="view-details-btn">View Details</button>
        `;

    const viewDetailsButton = card.querySelector(".view-details-btn");
    viewDetailsButton.addEventListener("click", (event) => {
      event.stopPropagation(); // Prevents the click event from bubbling up to the card
      // Navigate to detail page with job ID
      window.location.href = `../job_details/job_details.html?id=${request.id}`;
    });

    container.appendChild(card);
  });
}

// Render work requests when the page loads
window.addEventListener("load", renderWorkRequests);
