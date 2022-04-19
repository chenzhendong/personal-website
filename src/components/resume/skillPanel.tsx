export default function SkillPanel({ skills }) {
  return (
    <>
      <div className="block-section flow-root">
        <div className="block-title">Skills</div>
        {skills.map(
          (skill) => {
            return <div key={skill.name} className="rounded-md shadow-md py-5 my-5 px-2">
              <div className="font-bold text-gray-400 mb-5">{skill.name}</div>
              <div className="-m-2 flex flex-wrap justify-start">
                {
                  skill.keywords.map(
                    (keyword) => {
                      return <span key={keyword} className="skill-tag">{keyword}</span>
                    })
                }
              </div>
            </div>
          })
        }
      </div>
    </>
  );
}