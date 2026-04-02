function calculateRisk(system) {
    let risk = 0;

    // Version difference
    if (system.currentVersion !== system.latestVersion) {
        risk += 50;
    }

    // Delay factor
    if (system.lastUpdatedDays > 30) {
        risk += 30;
    } else if (system.lastUpdatedDays > 7) {
        risk += 15;
    }

    // Severity classification
    let severity = "LOW";
    if (risk > 70) severity = "HIGH";
    else if (risk > 40) severity = "MEDIUM";

    return { risk, severity };
}

module.exports = calculateRisk;