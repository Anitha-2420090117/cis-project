const fs = require("fs");
const path = require("path");
const calculateRisk = require("../utils/riskCalculator");

const dataPath = path.join(__dirname, "../data/systems.json");

exports.getSystems = (req, res) => {
    const systems = JSON.parse(fs.readFileSync(dataPath));

    const result = systems.map(sys => {
        const riskData = calculateRisk(sys);

        return {
            ...sys,
            outdated: sys.currentVersion !== sys.latestVersion,
            risk: riskData.risk,
            severity: riskData.severity
        };
    });

    res.json(result);
};

exports.addSystem = (req, res) => {
    const systems = JSON.parse(fs.readFileSync(dataPath));
    const newSystem = req.body;

    systems.push(newSystem);
    fs.writeFileSync(dataPath, JSON.stringify(systems, null, 2));

    res.json({ message: "System added successfully" });
};