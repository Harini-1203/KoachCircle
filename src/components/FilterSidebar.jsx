import React, { useState,useEffect } from "react";
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ChevronDown, ChevronRight, X, Plus } from "lucide-react";
import Calendar from "./Calender";
// Add this before the FilterSidebar component
const styles = ` 
  .range-input::-webkit-slider-thumb {
    pointer-events: all;
    width: 23px;
    height: 23px;
    border-radius: 50%;
    background: transparent;
    border: 2px solid #2D488F;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -10px;
  }

  .range-input::-moz-range-thumb {
    pointer-events: all;
    width: 23px;
    height: 23px;
    border-radius: 50%;
    background: trasnparent;
    border: 2px solid #2D488F;
    cursor: pointer;
  }

  .range-input::-webkit-slider-runnable-track {
    background: transparent;
    height: 2px;
  }

  .range-input::-moz-range-track {
    background: transparent;
    height: 2px;
  }
`;


// Add this inside your component's return, before the main JSX

const FilterSidebar = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [availableASAP, setAvailableASAP] = useState(false);
  const [openFilters, setOpenFilters] = useState({});
  const [showFromCalendar, setShowFromCalendar] = useState(false);
  const [showToCalendar, setShowToCalendar] = useState(false);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [yearsOfExperience, setYearsOfExperience] = useState(1);
  const [selectedServiceCategories, setSelectedServiceCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [selectedIndustryCategories, setSelectedIndustryCategories] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [hourlyRange, setHourlyRange] = useState({
    min: 0,
    max: 2000
  });
  const [allServiceCategories, setAllServiceCategories] = useState([
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Digital Marketing",
    "Data Science",
    "Cloud Computing",
    "Cybersecurity",
  ]);
  const [allIndustryCategories, setAllIndustryCategories] = useState([
    "Primary",
    "Secondary",
    "Tertinary",
    "Quartnanry",
  ]);
  
const [countries] = useState([
  { name: 'United States', code: 'US', mentors: 150 },
  { name: 'United Kingdom', code: 'GB', mentors: 89 },
  { name: 'Canada', code: 'CA', mentors: 76 },
  { name: 'Australia', code: 'AU', mentors: 45 },
  { name: 'Germany', code: 'DE', mentors: 67 },
  { name: 'France', code: 'FR', mentors: 34 },
  { name: 'India', code: 'IN', mentors: 120 },
  { name: 'Japan', code: 'JP', mentors: 28 },
]);
const [languages] = useState([
  { name: 'English', country: 'United States', code: 'English' },
  { name: 'Spanish', country: 'Spain', code: 'ES' },
  { name: 'French', country: 'France', code: 'FR' },
  { name: 'German', country: 'Germany', code: 'DE' },
  { name: 'Japanese', country: 'Japan', code: 'JA' },
  { name: 'Chinese', country: 'China', code: 'ZH' },
  { name: 'Hindi', country: 'India', code: 'HI' },
  { name: 'Portuguese', country: 'Portugal', code: 'PT' }
]);
const [skills] = useState([
  { name: 'Communication Skills',  },
  { name: 'teamwork Skills', },
  { name: 'Time management', },
  { name: 'Problem-solving Skills', },
  { name: 'Creativity', },
  { name: 'Work ethic',  },
  { name: 'Interpersonal skills', },
  { name: 'Leadership skills',},
  { name: 'Stress Management',},
  { name: 'Organisational skills',},
  { name: 'Analytical skills',}
]);

useEffect(() => {
  const availableASAP = searchParams.get('availableASAP') === 'true';
  const fromDate = searchParams.get('fromDate');
  const toDate = searchParams.get('toDate');
  const minRate = searchParams.get('minRate');
  const maxRate = searchParams.get('maxRate');
  const rating = searchParams.get('rating');
  const experience = searchParams.get('experience');
  const services = searchParams.get('services')?.split(',');
  const industries = searchParams.get('industries')?.split(',');
  const location = searchParams.get('location');
  const language = searchParams.get('language');
  const skills = searchParams.get('skills')?.split(',');

  // Set initial states from URL params
  setAvailableASAP(availableASAP);
  setFromDate(fromDate ? new Date(fromDate) : null);
  setToDate(toDate ? new Date(toDate) : null);
  setHourlyRange({ min: minRate || 0, max: maxRate || 2000 });
  setSelectedRating(rating ? Number(rating) : null);
  setYearsOfExperience(experience || '');
  setSelectedServiceCategories(services || []);
  setSelectedIndustryCategories(industries || []);
  setSelectedCountry(location);
  setSelectedLanguage(language);
  setSelectedSkills(skills || []);
}, [searchParams]);

const formatDate = (date) => {
  if (!date) return null;
  const d = new Date(date);
  return d instanceof Date && !isNaN(d) 
    ? d.toISOString().split('T')[0]
    : null;
};
const applyFilters = () => {
  const queryParams = new URLSearchParams();

  // Add filters to query params
  if (availableASAP) queryParams.set('availableASAP', 'true');
  const formattedFromDate = formatDate(fromDate);
  const formattedToDate = formatDate(toDate);
  if (formattedFromDate) queryParams.set('fromDate', formattedFromDate);
  if (formattedToDate) queryParams.set('toDate', formattedToDate);
  if (hourlyRange.min > 0) queryParams.set('minRate', hourlyRange.min);
  if (hourlyRange.max < 2000) queryParams.set('maxRate', hourlyRange.max);
  if (selectedRating !== null) queryParams.set('rating', selectedRating);
  if (yearsOfExperience) queryParams.set('experience', yearsOfExperience);
  if (selectedServiceCategories.length > 0) queryParams.set('services', selectedServiceCategories.join(','));
  if (selectedIndustryCategories.length > 0) queryParams.set('industries', selectedIndustryCategories.join(','));
  if (selectedCountry) queryParams.set('location', selectedCountry);
  if (selectedLanguage) queryParams.set('language', selectedLanguage);
  if (selectedSkills.length > 0) queryParams.set('skills', selectedSkills.join(','));

  // Navigate with query params
  navigate({
    pathname: '/mentor',
    search: queryParams.toString()
  });};

const ratings = [0, 1, 2, 3, 4, 5];

const toggleFilter = (filter) => {
  setOpenFilters((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }));
  };

const handleFromDateSelect = (date) => {
    setFromDate(date);
    setShowFromCalendar(false);
  };

const handleToDateSelect = (date) => {
    setToDate(date);
    setShowToCalendar(false);
  };
const handleServiceCategoryToggle = (category) => {
    setSelectedServiceCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };
  const handleIndustryCategoryToggle = (category) => {
    setSelectedIndustryCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      // Check if category exists (case-insensitive)
      const categoryExists = allServiceCategories.some(
        (category) =>
          category.toLowerCase() === newCategory.trim().toLowerCase()
      );

      if (categoryExists) {
        setShowWarning(true);
        // Hide warning after 3 seconds
        setTimeout(() => setShowWarning(false), 3000);
      } else {
        setAllServiceCategories((prev) => [...prev, newCategory.trim()]);
        setSelectedServiceCategories((prev) => [...prev, newCategory.trim()]);
        setNewCategory("");
      }
    }
  };
  // Add handleSkillToggle function with other handlers
const handleSkillToggle = (skillName) => {
  setSelectedSkills(prev =>
    prev.includes(skillName)
      ? prev.filter(skill => skill !== skillName)
      : [...prev, skillName]
  );
};
  return (<>
    <style>{styles}</style>
    <div className="w-full max-w-[383px] bg-[#050A30] text-white min-h-screen p-6 mt-16 ">
      <div className="mb-8 ml-4">
        <h3 className="text-lg font-semibold mb-2">Availability</h3>
        <p className="text-base mb-4">Select date</p>

        <div className="flex gap-4 mb-6 relative">
          <div className="relative">
            <button
              onClick={() => {
                setShowFromCalendar(!showFromCalendar);
                setShowToCalendar(false);
              }}
              className="bg-white text-[#2F74DB] font-bold px-4 py-2 rounded-md text-sm w-[130px]"
            >
              From
            </button>
            {showFromCalendar && (
              <div className="absolute z-10 top-full left-0 mt-2">
                <Calendar
                  onDateSelect={handleFromDateSelect}
                  selectedDate={fromDate}
                />
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => {
                setShowToCalendar(!showToCalendar);
                setShowFromCalendar(false);
              }}
              className="bg-white text-[#2F74DB] font-bold px-4 py-2 rounded-md text-sm w-[130px]"
            >
              To
            </button>
            {showToCalendar && (
              <div className="absolute z-10 top-full left-0 mt-2">
                <Calendar
                  onDateSelect={handleToDateSelect}
                  selectedDate={toDate}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className=" flex justify-between items-center ml-4">
        <h3 className="text-xl font-semibold">Sort by</h3>
        <span>Show all</span>
      </div>
      <div className="border-t border-[#D7DDED] my-2 ml-4"></div>

      <div className="mb-6 flex items-center justify-between ml-4 ">
        <h3 className="text-lg font-semibold mt-4">Available ASAP</h3>
        <div
          className={`w-12 h-6 rounded-full p-1 cursor-pointer mt-4 ${
            availableASAP ? "bg-[#2D488E]" : "bg-gray-300"
          }`}
          onClick={() => setAvailableASAP(!availableASAP)}
        >
          <div
            className={`bg-black w-4 h-4 rounded-full transform transition-transform ${
              availableASAP ? "translate-x-6" : "translate-x-0"
            }`}
          />
        </div>
      </div>

      {[
        "Hourly charges",
        "Ratings",
        "Years of experience",
        "Service category",
        "Industry",
        "Location",
        "Language",
        "Skill-set",
      ].map((filter, index) => (
        <div key={index} className="mb-6 ml-4">
          <div
            className="flex justify-between items-center mb-2 cursor-pointer"
            onClick={() => toggleFilter(filter)}
          >
            <h3 className="text-lg font-semibold">{filter}</h3>
            <span className="text-white text-xl">
              {openFilters[filter] ? <ChevronDown /> : <ChevronRight />}
            </span>
          </div>
          <div className="border-t border-[#D7DDED] my-2"></div>
          {/* Conditionally render RatingsDropdown for Ratings filter */}

{/* // Add inside the filter mapping where Hourly charges is handled */}
{filter === "Hourly charges" && openFilters[filter] && (
  <div className="mt-2 bg-white text-black rounded-lg p-4">
    <div className="flex flex-col space-y-4">
      
      
      <div className="relative w-full h-2">
        {/* Background and colored track */}
        <div className="absolute w-full h-full bg-gray-200 rounded"></div>
        <div 
          className="absolute h-full bg-[#2D488F] rounded"
          style={{ 
            left: `${(hourlyRange.min / 2000) * 100}%`,
            width: `${((hourlyRange.max - hourlyRange.min) / 2000) * 100}%`
          }}
        />
        
        {/* Value tooltips */}
        <div 
          className="absolute top-3.5 transform -translate-x-1/2 bg-white text-black shadow-lg px-2 py-1 rounded text-sm"
          style={{ left: `${(hourlyRange.min / 2000) * 100}%` }}
        >
          ${hourlyRange.min}
        </div>
        <div 
          className="absolute top-3.5 transform -translate-x-1/2 bg-white text-black shadow-lg px-2 py-1 rounded text-sm"
          style={{ left: `${(hourlyRange.max / 2000) * 100}%` }}
        >
          ${hourlyRange.max}
        </div>
        
        {/* Min slider */}
        <input
          type="range"
          min="0"
          max="2000"
          value={hourlyRange.min}
          onChange={(e) => {
            const value = Math.min(Number(e.target.value), hourlyRange.max - 1);
            setHourlyRange(prev => ({
              ...prev,
              min: value
            }));
          }}
          className="range-input absolute w-full h-full appearance-none bg-transparent pointer-events-auto z-20"
        />
        
        {/* Max slider */}
        <input
          type="range"
          min="0"
          max="2000"
          value={hourlyRange.max}
          onChange={(e) => {
            const value = Math.max(Number(e.target.value), hourlyRange.min + 1);
            setHourlyRange(prev => ({
              ...prev,
              max: value
            }));
          }}
          className="range-input absolute w-full h-full appearance-none bg-transparent pointer-events-auto z-20"
        />
      </div>
      
     
    </div>
  </div>
)}
          {/* Ratings filter expansion */}
          {filter === "Ratings" && openFilters[filter] && (
            <div className="flex bg-white p-1 rounded-lg justify-between mt-2">
              {ratings.map((rating) => (
                <div
                  key={rating}
                  onClick={() => setSelectedRating(rating)}
                  className={`
                    w-2  h-10 p-5 flex text-xl font-semibold items-center justify-center rounded-xl cursor-pointer
                    ${
                      selectedRating === rating
                        ? "bg-[#2559BD] text-white"
                        : "hover:bg-gray-300 text-black"
                    }
                  `}
                >
                  {rating}
                </div>
              ))}
            </div>
          )}
          {/* Years of Experience filter expansion */}
          {filter === "Years of experience" && openFilters[filter] && (
            <div className="mt-2 bg-[#2559BD] text-black p-2 pl-4 rounded-xl flex items-center">
              <div className="flex-grow mr-2">
                <div className="text-base text-white ">Number</div>
                <input
                  type="text"
                  pattern="\d*"
                  value={yearsOfExperience}
                  onChange={(e) => {
                    // Only allow numeric input
                    const value = e.target.value.replace(/[^0-9]/g, "");
                    setYearsOfExperience(value);
                  }}
                  className="w-full text-white bg-[#2559BD] focus:outline-none"
                />
              </div>
              <button
                onClick={() => setYearsOfExperience("")}
                className="text-white mr-2 rounded-full border-2"
              >
                <X size={24} />
              </button>
            </div>
          )}
          {/* Service Category filter expansion */}
          {filter === "Service category" && openFilters[filter] && (
            <div className="mt-2 bg-white  text-black rounded-xl p-4">
              <div className="text-base font-semibold  mb-3">All</div>
              {/* Category Checkboxes */}
              <div className="space-y-1 mb-4 h-full overflow-y-auto scrollbar-hide pr-2 ">
              {allServiceCategories.map((category) => (
                <div
                  key={category}
                  onClick={() => handleServiceCategoryToggle(category)}
                  className={`
                   flex items-center p-2 cursor-pointer rounded-lg
                   ${selectedServiceCategories.includes(category) ? 'bg-[#2559BD] text-white' : 'hover:bg-gray-100'}
                  `}
                >
                <div className={`w-5 h-5 mr-2 border-2 flex items-center justify-center ${
                selectedServiceCategories.includes(category) 
                 ? "bg-[#2559BD] border-[#2559BD]" 
                 : "border-gray-300"
                }`}>
                {selectedServiceCategories.includes(category) && (
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  >
                  <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                  />
                  </svg>
                )}
                </div>
                <div>
                  <div className="font-medium">{category}</div>
                </div>
              </div>
              ))}
              </div>

              {/* Add New Category */}
              <div className="relative">
                <div className="flex items-center font-semibold rounded-lg p-2">
                  <button onClick={handleAddCategory} className="">
                    <Plus size={20} />
                  </button>
                  <input
                    type="text"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    placeholder="Add category"
                    className="flex-grow ml-2 bg-transparent placeholder-black hover:placeholder-gray-400 focus:outline-none"
                  />
                </div>

                {/* Warning Message */}
                {showWarning && (
                  <div className="absolute bottom-full left-0 mb-1 px-3 py-1 bg-red-100 text-red-600 text-sm rounded-md">
                    Category already exists
                  </div>
                )}
              </div>
            </div>
          )}
           {/* Industry Category filter expansion */}
           {filter === "Industry" && openFilters[filter] && (
            <div className="mt-2 bg-white  text-black rounded-xl p-4">
              <div className="text-base font-semibold  mb-3">All</div>

              {/* Category Checkboxes */}
              <div className="space-y-1 mb-4 h-full overflow-y-auto scrollbar-hide pr-2 ">
              {allIndustryCategories.map((category) => (
        <div
          key={category}
          onClick={() => handleIndustryCategoryToggle(category)}
          className={`
            flex items-center p-2 cursor-pointer rounded-lg
            ${selectedIndustryCategories.includes(category) ? 'bg-[#2559BD] text-white' : 'hover:bg-gray-100'}
          `}
        >
          <div className={`w-5 h-5 mr-2 border-2 flex items-center justify-center ${
            selectedIndustryCategories.includes(category) 
              ? "bg-[#2559BD] border-[#2559BD]" 
              : "border-gray-300"
          }`}>
            {selectedIndustryCategories.includes(category) && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
          <div>
            <div className="font-medium">{category}</div>
          </div>
        </div>
      ))}
              </div>
            </div>
          )}
          {/*  Add inside the filter mapping where other filter conditions are handled */}
          {filter === "Location" && openFilters[filter] && (
          <div className="mt-2 bg-white text-black rounded-xl p-4">
         <div className="text-base font-semibold mb-3">All</div>
         <div className=" mb-4 max-h-60 overflow-y-auto scrollbar-hide pr-2">
        {countries.map((country) => (
        <div
          key={country.code}
          onClick={() => setSelectedCountry(country.code)}
          className={`
            flex items-center  cursor-pointer rounded-lg
            ${selectedCountry === country.code ? 'bg-[#2559BD] text-white' : 'hover:bg-gray-100'}
          `}
        >
          <img
            src={`https://flagcdn.com/24x18/${country.code.toLowerCase()}.png`}
            alt={`${country.name} flag`}
            className="mr-3"
          />
          <div>
            <div className="font-medium">{country.name}</div>
            <div className={`text-sm ${selectedCountry === country.code ? 'text-gray-200' : 'text-gray-500'}`}>
              {country.mentors} mentors
            </div>
          </div>
        </div>
        ))}
      </div>
      </div>
      )}
      {/* // Add inside the filter mapping where other filter conditions are handled */}
{filter === "Language" && openFilters[filter] && (
  <div className="mt-2 bg-white text-black rounded-xl p-4">
    <div className="text-base font-semibold ml-2 mb-3">All</div>
    
    <div className=" mb-4 max-h-60 overflow-y-auto scrollbar-hide pr-2">
      {languages.map((language) => (
        <div
          key={language.code}
          onClick={() => setSelectedLanguage(language.code)}
          className={`
            flex items-center p-1 border-b cursor-pointer rounded-lg
            ${selectedLanguage === language.code ? 'bg-[#2559BD] text-white' : 'hover:bg-gray-100'}
          `}
        >
          <div>
            <div className="font-medium">{language.name}</div>
            <div className={`text-sm ${selectedLanguage === language.code ? 'text-gray-200' : 'text-gray-500'}`}>
              {language.country}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)}
{/* // Add inside the filter mapping where other filter conditions are handled */}
{filter === "Skill-set" && openFilters[filter] && (
  <div className="mt-2 bg-white text-black rounded-xl p-4">
    <div className="text-base font-semibold mb-3">All</div>
    
    <div className="space-y-1 mb-4 max-h-60 overflow-y-auto scrollbar-hide pr-2">
      {skills.map((skill) => (
        <div
          key={skill.name}
          onClick={() => handleSkillToggle(skill.name)}
          className={`
            flex items-center p-2 cursor-pointer rounded-lg
            ${selectedSkills.includes(skill.name) ? 'bg-[#2559BD] text-white' : 'hover:bg-gray-100'}
          `}
        >
          <div className={`w-5 h-5 mr-2 border-2 flex items-center justify-center ${
            selectedSkills.includes(skill.name) 
              ? "bg-[#2559BD] border-[#2559BD]" 
              : "border-gray-300"
          }`}>
            {selectedSkills.includes(skill.name) && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
          <div>
            <div className="font-medium">{skill.name}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
)}
    </div>
    ))}

      <button  onClick={applyFilters} className=" ml-4 w-[300px] bg-[#F5E649] text-black font-bold py-3 rounded-md mt-4">
        Show results
      </button>
    </div>
    </>
  );
};

export default FilterSidebar;
