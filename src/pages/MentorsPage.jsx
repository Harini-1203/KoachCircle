import React,{useState,useEffect,} from 'react';
import { useSearchParams , useNavigate} from 'react-router-dom';
import Header from '../components/Header';
import FilterSidebar from '../components/FilterSidebar';
import MentorCard from '../components/MentorCard';
import { Star,X } from 'lucide-react';

const MentorsPage = () => {
  const navigate = useNavigate();
  const getFilterDisplayName = (key, value) => {
    switch(key) {
      case 'availableASAP': return 'Available ASAP';
      case 'fromDate': return `From: ${new Date(value).toLocaleDateString()}`;
      case 'toDate': return `To: ${new Date(value).toLocaleDateString()}`;
      case 'minRate': return `Min Rate: $${value}`;
      case 'maxRate': return `Max Rate: $${value}`;
      case 'rating': return `${value}+ Rating`;
      case 'yearsOfExperience': return `${value}+ Years`;
      case 'services': return `Services: ${value.split(',').join(', ')}`;
      case 'industries': return `Industries: ${value.split(',').join(', ')}`;
      case 'location': return `Location: ${value}`;
      case 'language': return `Language: ${value}`;
      case 'skills': return `Skills: ${value.split(',').join(', ')}`;
      default: return '';
    }
  };
  const getActiveFilters = () => {
    const filters = [];
    searchParams.forEach((value, key) => {
      if (value) {
        filters.push({ key, value, display: getFilterDisplayName(key, value) });
      }
    });
    return filters;
  };
  const handleRemoveFilter = (key) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete(key);
    navigate({
      pathname: '/mentor',
      search: newParams.toString()
    });
  };
  const [searchParams] = useSearchParams();
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalResults, setTotalResults] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  useEffect(() => {
    fetchMentors();
  }, [searchParams]);

  useEffect(() => {
    fetchMentors();
  }, []);
  const fetchMentors = async () => {
    try {
      setLoading(true);
      const queryString = window.location.search;
      const response = await fetch(`http://localhost:5001/api/mentors/filter${queryString}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const responseData = await response.json();
      console.log('API Response:', responseData);
  
      if (!responseData.success || !responseData.data) {
        throw new Error('Invalid API response format');
      }
  
      const mentorsData = responseData.data.map(mentor => ({
        _id: mentor._id,
        name: `${mentor.basicInfo?.firstName || ''} ${mentor.basicInfo?.lastName || ''}`.trim(),
        title: mentor.basicInfo?.title || '',
        company: mentor.basicInfo?.companyName || '',
        rating: mentor.rating || 0,
        experience: mentor.basicInfo?.experience || '',
        country: mentor.basicInfo?.location || '',
        skills: mentor.skills?.skill || '',
        isAvailableASAP: mentor.availability?.availableASAP || false,
        hourlyRate: {
          min: mentor.rate?.minrate || 0,
          max: mentor.rate?.maxrate || 0
        },
        expertise: mentor.education?.expertise || [],
        languages: mentor.basicInfo?.languages || [],
        profilePicture: mentor.basicInfo?.profilePicture || 'default-profile.png'
      }));
  
      // Set the state with transformed data
      setMentors(mentorsData);
      setTotalResults(responseData.count);
      // Calculate average rating
      const avgRating = mentorsData.reduce((acc, curr) => acc + (curr.rating || 0), 0) / mentorsData.length;
      setAverageRating(avgRating);
  
    } catch (err) {
      console.error('Fetch error:', err);
      setError(err.message);
      setMentors([]);
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return <div className="min-h-screen bg-[#F2F3F5] flex items-center justify-center">
      <div className="text-[#2D488E] text-xl">Loading mentors...</div>
    </div>;
  }

  if (error) {
    return <div className="min-h-screen bg-[#F2F3F5] flex items-center justify-center">
      <div className="text-red-500 text-xl">Error: {error}</div>
    </div>;
  }
  return (
    <div className="min-h-screen bg-[#F2F3F5] flex flex-col">
      <Header />
      
      <div className="flex flex-1">
        <FilterSidebar />
        
        <div className="flex-1 p-8 mt-20">
          <h1 className="text-6xl font-bold text-[#2D488F] mb-4">Mentors</h1>
          
          <div className=" gap-2 mb-4">
            <span className="text-sm font-bold text-[#2D488E]">
              {totalResults} results
            </span>
            <div className="flex items-center">
              <span className="text-2xl font-normal text-[#2D488E]">
                {typeof averageRating === 'number' ? averageRating.toFixed(1) : '0.0'}
              </span>
              <Star size={24} fill="#ECC026" stroke="none" className="ml-2" />
            </div>
                      
            </div>
          
            <div className="flex flex-wrap gap-2 mb-8">
            {getActiveFilters().map((filter, index) => (
              <div
                key={index}
                className="border border-[#2D488E] text-[#2D488E] font-bold px-6 py-3 rounded-2xl flex items-center gap-2"
              >
                <span>{filter.display}</span>
                <X 
                  size={18}
                  className="cursor-pointer hover:text-[#1a2f5c]"
                  onClick={() => handleRemoveFilter(filter.key)}
                />
              </div>
            ))}
            {getActiveFilters().length === 0 && (
              <div className="text-gray-500 font-medium">
                
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.isArray(mentors) && mentors.length > 0 ? (
              mentors.map(mentor => (
                <MentorCard 
                  key={mentor._id}
                  {...mentor}
                />
              ))
            ) : (
              <div className="col-span-3 text-center text-gray-500">
                No mentors found
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorsPage;