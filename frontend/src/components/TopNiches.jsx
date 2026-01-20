import React from 'react'

const TopNiches = () => {

    const services = [
        {
            id: 1,
            service: "Software Development",
            description: 
            "Innovative software development services to build, maintain, and upgrade applications, ensuring they meet the highest quality standards",
        },
        {
            id: 2,
            service: "Web Development",
            description:
            "Comprehensive web development solutions from front-end design to back-end integration, delivering responsive and user-friendly websites."
        },
        {
            id: 3,
            service: "Data Science",
            description: 
            "Advance data science services to analyze and interpret complex data, providing actionable insights and data-driven solutioins."
        },
        {
            id: 4,
            service: "Cloud Cmputing",
            description:
            "Reliable cloud computing service to manage, store and process data efficiently offering scalable and flexible cloud solutions",
        },
        {
          id: 5,
          service: "DevOps",
          description: 
          "DevOps services to streamline software development and operations, enhancing deployment efficiency time to market. ",
        }, 
        {
            id: 6,
            service: "Mobile App Development",
            description:
            "Expert mobile app development for ios and Android plstforms creating intutives and engaging mobile experiences for your  users"
        }
    ]
  return (
    <section className='services'>
      <h3>Top Niches</h3>
      <div className='grid'>
        {
            services.map(element=>{
                return(
                    <div className='card' key={element.id}>
                        <h4>{element.service}</h4>
                        <p>{element.description}</p>
                    </div>
                );
            })
        }
      </div>
    </section>
  );
};

export default TopNiches
