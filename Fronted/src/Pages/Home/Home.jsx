import { Option, Select } from "@material-tailwind/react";
import { useState } from "react";
const Home = () => {
  const categories = [
    "Electronics",
    "Accessories",
    "Gaming",
    "Outdoor Gear",
    "Health & Fitness",
    "Home Appliances",
    "Smart Home",
  ];
  const brands = [
    "TechCo",
    "GigaByte",
    "LogiTech",
    "SoundMax",
    "FitTrack",
    "PowerPlus",
  ];
  const [search, setSearch] = useState("");
  const [catego, setCategories] = useState('');
  const handleCategoryChange = e => {
    setCategories(e); 
  }

  return (
    <div>
      <div className="flex gap-2 items-center">
        {/* search */}
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="text"
          name="searched"
          placeholder="Search here..."
          className="input input-bordered w-full max-w-xs"
        />
        {/* select category */}
        <div className="w-72">
          <Select label="Select Category">
            {
                categories.map((i, idx)=><Option onClick={()=>handleCategoryChange(i)} value={i} key={idx}> {i} </Option>)
            }
          </Select>
        </div>
      </div>
    </div>
  );
};

export default Home;
