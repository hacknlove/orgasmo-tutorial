export default function getAnotherPlanet({ number }) {
    const planetName = Math.sin(number).toString(36).split('.')[1]

    return {
      type: "CardLink",
      props: {
        title: `Hello ${planetName}`,
        href: `/hello/${planetName}`
      },
    };
  }
