document.getElementById("complaint-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const area = document.getElementById("area").value;
    const complaint = document.getElementById("complaint").value;

    const newComplaint = {
        id: Date.now(),
        name,
        area,
        description: complaint,
    };

    // Get existing complaints from localStorage or initialize an empty array
    const complaints = JSON.parse(localStorage.getItem("complaints")) || [];
    complaints.push(newComplaint);

    // Save updated complaints back to localStorage
    localStorage.setItem("complaints", JSON.stringify(complaints));

    alert("Complaint submitted successfully!");
    document.getElementById("complaint-form").reset();
});
