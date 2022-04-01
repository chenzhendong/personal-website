export default function SkillPanel({ skills }) {
  return (
    <>
      <div className="p-7 block-section flow-root">
        <h2 className="block-title">Skills</h2>
        {skills.map(
          (skill) => {
            return <div className="rounded-md shadow-md py-5 my-5 px-2">
              <div className="font-bold text-gray-400 mb-5">{skill.name}</div>
              <div className="-m-2 flex flex-wrap justify-start">
                {
                  skill.keywords.map(
                    (keyword) => {
                      return <span className="skill-tag">{keyword}</span>
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