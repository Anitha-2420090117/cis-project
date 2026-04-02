const container = document.getElementById("cardsContainer");

fetch("https://cis3-project.onrender.com/api/systems")
.then(res => res.json())
.then(data => {

    data.forEach((sys, index) => {

        const card = document.createElement("div");
        card.classList.add("card");

        const statusClass = sys.outdated ? "outdated" : "updated";

        card.innerHTML = `
            <h2>${sys.name}</h2>
            <p><strong>Current:</strong> ${sys.currentVersion}</p>
            <p><strong>Latest:</strong> ${sys.latestVersion}</p>

            <p class="status ${statusClass}">
                ${sys.outdated ? "⚠️ Outdated" : "✅ Updated"}
            </p>

            <p><strong>Risk Score:</strong> ${sys.risk}</p>

            <span class="badge ${sys.severity}">
                ${sys.severity}
            </span>
        `;

        container.appendChild(card);
    });

})
.catch(err => {
    container.innerHTML = "<p>⚠️ Failed to load data</p>";
});