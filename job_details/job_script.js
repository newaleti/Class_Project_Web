// Function to get job details from URL parameter
function getJobDetailsFromURL(workRequests) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const jobId = parseInt(urlParams.get("id"));

  if (!isNaN(jobId)) {
    // Find the job with the matching ID
    const job = workRequests.find((request) => request.id === jobId);
    return job || null;
  } else {
    console.error("Invalid job ID in URL parameter.");
    return null;
  }
}

// Function to display job details
function displayJobDetails() {
  const jobDetailsContainer = document.getElementById("jobDetailsContainer");
  const job = getJobDetailsFromURL(workRequests);

  if (job) {
    const jobDetailsHTML = `
            <div class="job-details">
                <h1>${job.type}</h1>
                <p><strong>User:</strong> ${job.user}</p>
                <p><strong>Date:</strong> ${job.date}</p>
                <p><strong>Location:</strong> ${job.location}</p>
                <div class="description">
                    <h3>Description</h3>
                    <p>${job.description || "No description available"}</p>
                </div>
                <div class="contact-info">
                    <h3>Contact Information</h3>
                    <p><strong>Name:</strong> ${job.contactName || "N/A"}</p>
                    <p><strong>Email:</strong> ${job.contactEmail || "N/A"}</p>
                    <p><strong>Phone:</strong> ${job.contactPhone || "N/A"}</p>
                </div>
                <div class="actions">
                    <button onclick="">Accept</button>
                    <button onclick="">Reject</button>
                </div>
            </div>
        `;
    jobDetailsContainer.innerHTML = jobDetailsHTML;
  } else {
    jobDetailsContainer.innerHTML = "<p>Job not found.</p>";
  }
}

// Display job details when the page loads
window.addEventListener("load", displayJobDetails);
