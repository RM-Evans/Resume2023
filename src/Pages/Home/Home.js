import React from 'react'
import '../../style/Home.css'
import ExperienceList from '../Experience'
import TechnologiesList from '../Technologies'

function Home() {
  return (
    <div className="homeContainer">
      <div className="firstSection">
        <div className="firstSectionText">
          <h1>Richard Michael Evans</h1>
          <div className="homeSkillsSubheading">
            is a <span className="homeSkillsText">web developer</span> and a
            <span className="homeSkillsText"> ui designer</span>
          </div>
          <div className="homeShortDescription">
            'Creating products with an emphasis on an appealing design and a
            positive user experience.'
          </div>
        </div>
      </div>
      <div className="aboutContainer">
        <h2 className="aboutHeading">About</h2>
        <div className="aboutBody">
          ' In 2021, I successfully completed a rigorous programming bootcamp,
          marking the commencement of my journey in the tech realm.
          Post-graduation, I continued the lifestyle of learning, seeking out
          mentorship roles from senior developers, where I was given the
          opportunity to learn and grow, unaware that in the future this would
          help me to provide guidance to other aspiring developers. This early
          experience instilled in me an appreciation for collaborative learning
          and knowledge exchange.
        </div>
        <div className="aboutBody">
          Eager to broaden my scope and break into the industry, I dove into
          freelance work, pushing myself in a variety of projects that demanded
          adaptability and creative problem-solving. Building on this
          foundation, I joined an ecommerce company. There I learned to adapt,
          work with a team, and contributed to successful projects. As I
          navigate this ever-evolving landscape, my eagerness to learn and grow
          drives me to be the best that I can be.'
        </div>
      </div>
      {/* <div className="technologiesContainer">
      </div> */}
      <div className="experienceContainer">
        <h2 className="experienceHeading">Experience</h2>
        <TechnologiesList />
        <ExperienceList />
      </div>
    </div>
  )
}

export default Home
