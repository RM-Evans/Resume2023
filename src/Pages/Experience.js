import React from 'react'
import '../style/Experience.css'

const experienceObject = [
  {
    id: 0,
    job: 'Everra',
    dateRange: ' _Oct. 2021 - 2022',
    roleTitle: '`Front End Web Developer and UI Designer`',
    roleDescription:
      'Collaborated with a team of developers to create an ecommerce application and backoffice software',
  },
  {
    id: 1,
    job: 'Freelance Developer',
    dateRange: ' _July. 2021 - 2023',
    roleTitle: '`Web Developer and UI Designer`',
    roleDescription:
      'Collaborated with a team of developers to create an ecommerce application and backoffice software',
  },
  {
    id: 2,
    job: 'Private Mentorship',
    dateRange: ' _Jan. 2021 - Dec. 2022',
    roleTitle: '`Mentee`',
    roleDescription:
      'Collaborated with a team of developers to create an ecommerce application and backoffice software',
  },
  {
    id: 3,
    job: 'UofU Fullstack Bootcamp',
    dateRange: ' _Jan. 2021 - June 2021',
    roleTitle: '`Student`',
    roleDescription:
      'Collaborated with a team of developers to create an ecommerce application and backoffice software',
  },
]

export default function ExperienceList() {
  const listItems = experienceObject.map((experienceObject) => (
    <li key={experienceObject.id}>
      <div className="job">
        {experienceObject.job}
        <span className="dateRange">{experienceObject.dateRange}</span>
      </div>
      <div className="roleTitle">{experienceObject.roleTitle}</div>
      <div className="roleDescription">{experienceObject.roleDescription}</div>
    </li>
  ))
  return <ul className="experienceList">{listItems}</ul>
}
