import { Data } from './types/Data'

export default function Home() {
  return (
    <main>
      <div className="space-y-8">
        {Data.map((section) => (
          <div key={section.id} className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
            <div className="border-b pb-4">
              <h2 className="text-2xl font-bold text-gray-800">{section.title}</h2>
              <p className="text-sm text-gray-600">{section.start} - {section.end} ({section.duration})</p>
              {section.company && (
                <>
                  <a href={section.company.link} className="text-blue-600 hover:underline">{section.company.name}</a>
                  {section.company.via && (
                    <p className="text-gray-600">via <a href={section.company.via.link} className="text-blue-600 hover:underline">{section.company.via.name}</a> - {section.company.via.type}</p>
                  )}
                </>
              )}
            </div>
            {section.projects && section.projects.length > 0 && (
              <div className="pt-4">
                <h3 className="font-semibold text-gray-800">Projects:</h3>
                <ul className="list-disc list-inside">
                  {section.projects.map((project, index) => (
                    <li key={index}>
                      <strong>{project.name}:</strong> {project.description}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {section.tools && section.tools.length > 0 && (
              <div className="pt-4">
                <h3 className="font-semibold text-gray-800">Tools:</h3>
                <div className="flex flex-wrap gap-2">
                  {section.tools.map((tool, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {section.challenges && section.challenges.length > 0 && (
              <div className="pt-4">
                <h3 className="font-semibold text-gray-800">Challenges:</h3>
                <ul className="list-disc list-inside">
                  {section.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>
            )}
            {section.live && (
              <div className="pt-4">
                <a href={section.live} className="text-blue-600 hover:underline">View Live Project</a>
              </div>
            )}
          </div>
        ))}
      </div>

    </main>
  )
}
