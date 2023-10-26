import '../style/Technologies.css'

const lang = ['Javascript', 'HTML', 'CSS', 'SQL', 'Graphql']

const frameworkLibrary = [
  'React',
  'Vue',
  'Nuxt.js',
  'Jquery',
  'Bootstrap',
  'Tailwind',
  'Material',
]

const otherTech = ['REST', 'Figma']

export default function ExperienceList() {
  const listLang = lang.map((langItem) => <li>{langItem}</li>)
  const listFrameworkLibrary = frameworkLibrary.map((frameworkLibraryItem) => (
    <li>{frameworkLibraryItem}</li>
  ))
  const listOtherTech = otherTech.map((otherTechItem) => (
    <li>{otherTechItem}</li>
  ))
  return (
    <div className="technologyLists">
      <ul className="langList">
        <div className="listTitle">Languages</div>
        {listLang}
      </ul>
      <ul className="frameworkLibraryList">
        <div className="listTitle">Frameworks and Libraries</div>
        {listFrameworkLibrary}
      </ul>
      <ul className="otherTechList">
        <div className="listTitle">Other Technologies and Skills</div>
        {listOtherTech}
      </ul>
    </div>
  )
}
