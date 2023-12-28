"use client"
import { useState } from 'react';
import { Data } from './types/Data'
import { FilterType } from './types/FilterType'


export default function Home() {

  const [filteredData, setFilteredData] = useState(Data);
  const [activeFilter, setActiveFilter] = useState(FilterType.All);

  const filterData = (filter: FilterType) => {
    const newData = filter === FilterType.All
      ? Data
      : Data.filter((section) => section.filter?.includes(filter));
    setFilteredData(newData);
    setActiveFilter(filter);
  }

  const selectedSectionCount = filteredData.length;

  return (
    <main className='m-6'>

      {/* FILTER */}
      <div className="flex flex-wrap gap-2 mb-6">
        {Object.values(FilterType).map((filter) => (
          <button key={filter} className={`${activeFilter === filter
            ? 'bg-green-800 text-white' // Selected filter style
            : 'bg-green-50 text-green-800 hover:bg-green-100' // Non-selected filter style
            } text-xs font-semibold px-2.5 py-0.5 rounded`} onClick={() => filterData(filter)}>
            {filter}
          </button>
        ))}
      </div>

      {/* FILTER DETAIL */}
      <div className='text-orange-500 mb-3 text-xs'>
        <p>Selected Sections: {selectedSectionCount}</p>
        <p>Filter: {activeFilter}</p>
        <button onClick={() => filterData(FilterType.All)} className='cursor-pointer text-xs font-semibold px-2.5 py-0.5 rounded bg-orange-400 text-white hover:bg-orange-500'>CLEAR</button>
      </div>

      {/* SECTION */}
      <div className="space-y-8">
        {filteredData.map((section) => (
          <div key={section.id} className="bg-gray-50 hover:bg-gray-100 shadow-md overflow-hidden sm:rounded-lg p-6">

            {/* HEADER */}
            <div className="border-b pb-4">
              <h2 className="text-2xl font-bold text-gray-800">{section.title}</h2>
              <p className="text-sm text-gray-600">{section.start} - {section.end} ({section.duration})</p>
              {section.company && (
                <>
                  {section.company.link && (
                    <a href={section.company.link} className="text-blue-600 hover:underline">{section.company.name}</a>
                  )}
                  {section.company.via && (
                    <p className="text-gray-600">via <a href={section.company.via.link} className="text-blue-600 hover:underline">{section.company.via.name}</a> - {section.company.via.type}</p>
                  )}
                </>
              )}
            </div>

            {/* PROJECTS */}
            {section.projects && section.projects.length > 0 && (
              <div className="pt-4">
                <h3 className="font-semibold text-gray-800">Projects:</h3>
                <ul className="list-disc list-inside">
                  {section.projects.map((project, index) => (
                    <li key={index}>
                      <strong>{project.name}:</strong>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* TOOLS */}
            {section.tools && section.tools.length > 0 && (
              <div className="pt-4">
                <h3 className="font-semibold text-gray-800">Tools:</h3>
                <div className="flex flex-wrap gap-2">
                  {section.tools.map((tool, index) => (
                    <span key={index} className="bg-gray-100 text-gray-400 text-xs font-semibold px-2.5 py-0.5 rounded">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CHALLENGES */}
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

            {/* PREVIEW */}
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
