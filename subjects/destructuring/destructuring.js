const missionInterstellar = {
    missionName: "Lazarus Initiative",
    ship: {
      name: "Endurance",
      launchYear: 2067,
      fuel: "Quantum Fusion",
      modules: ["Command", "Living Quarters", "Science Lab", "Docking Bay"],
      aiSupport: {
        primary: "TARS",
        secondary: "CASE",
        humorLevel: 75
      }
    },
    crew: {
      commander: {
        name: "Joseph Cooper",
        role: "Pilot",
        experience: "Former NASA Engineer"
      },
      scientist: {
        name: "Dr. Amelia Brand",
        role: "Astrophysicist",
        expertise: ["Black Holes", "Relativity", "Exoplanets"]
      },
      supportingMembers: [
        { name: "Dr. Doyle", role: "Physicist" },
        { name: "Dr. Romilly", role: "Theorist" }
      ]
    },
    planetsExplored: [
      {
        name: "Miller",
        timeDilation: "1 hour = 7 years",
        status: "Uninhabitable",
        gravity: "130% Earth",
        waterLevel: "Extreme",
        notes: "Tidal waves too high for safe colonization"
      },
      {
        name: "Mann",
        timeDilation: "Normal",
        status: "Deceptive",
        gravity: "100% Earth",
        temperature: "-80°C",
        notes: "Seemingly habitable, but actually unstable and dangerous"
      },
      {
        name: "Edmunds",
        timeDilation: "Normal",
        status: "Potential colony",
        gravity: "95% Earth",
        atmosphere: "Breathable",
        temperature: "Moderate",
        notes: "Best candidate for long-term human survival"
      }
    ],
    missionSuccessProbability: 42 // lol
};

const {
    missionName,
    ship: { name: shipName, launchYear, fuel, modules, aiSupport },
    crew: { commander, scientist, supportingMembers }, 
    planetsExplored,
    missionSuccessProbability
} = missionInterstellar

console.log(missionName);
console.log(shipName);


  