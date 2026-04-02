class System {
    constructor(id, name, currentVersion, latestVersion, lastUpdatedDays) {
        this.id = id;
        this.name = name;
        this.currentVersion = currentVersion;
        this.latestVersion = latestVersion;
        this.lastUpdatedDays = lastUpdatedDays;
    }
}

module.exports = System;