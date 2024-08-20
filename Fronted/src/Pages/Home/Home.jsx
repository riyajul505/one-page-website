import { Option, Select } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
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
  const [products, setProducts] = useState(null);
  const [search, setSearch] = useState("");
  const [catego, setCategories] = useState("");
  const [selectedBrand, setBrand] = useState("");
  const handleCategoryChange = (e) => {
    setCategories(e);
  };
  const handleBrandChange = (e) => {
    setBrand(e);
  };
  useEffect(() => {
    axios
      .get("http://localhost:5000/products", { params: {
        search: search,
        brand: selectedBrand,
        category: catego
    }})
      .then((res) => setProducts(res.data));
  }, [search, catego, selectedBrand]);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 items-center">
        {/* search */}
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="text"
          name="searched"
          placeholder="Search here..."
          className="input input-bordered w-auto"
        />
        {/* select category */}
        <div className="w-auto">
          <Select label="Select Category">
            {categories.map((i, idx) => (
              <Option
                onClick={() => handleCategoryChange(i)}
                value={i}
                key={idx}
              >
                {" "}
                {i}{" "}
              </Option>
            ))}
          </Select>
        </div>
        <div className="w-auto">
          <Select label="Select Brand">
            {brands.map((i, idx) => (
              <Option onClick={() => handleBrandChange(i)} value={i} key={idx}>
                {" "}
                {i}{" "}
              </Option>
            ))}
          </Select>
        </div>
      </div>
      <div>
        <h1 className="text-3xl my-9 text-center">Our Products</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center justify-center">
            {
             products && (products.map((i,idx)=><Card key={idx} data={i}></Card>))
            } 
        </div>
      </div>
    </div>
  );
};

export default Home;
