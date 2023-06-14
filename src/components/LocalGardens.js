import { useState, setState } from "react";
import { useEffect } from "react";
import '../LocalGardens.css'
import { useParams, useNavigate, useLocation, Params } from "react-router-dom";

const LocalGardens = () => {
  //     const location = useLocation()
  //     const { id, city, user } = location.state
  //  console.log(id)
  //  console.log(city)
  //  console.log(user)
  const navigate = useNavigate();
  let userInfo = useParams();
  console.log(userInfo.city);
  let userInfoArray = userInfo.city.split("_");
  console.log(userInfoArray);
  let id = userInfoArray[0];
  console.log(id);
  let city = userInfoArray[1];
  console.log(city);
  let user = userInfoArray[2];
  console.log(user);
  const [gardenList, setGardenList] = useState([]);

  const fetchGardenData = async (city) => {
    const url = `https://community-garden-api.onrender.com/gardens/${city}`;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    setGardenList(data);
  };
  //getting Garden list for city
  useEffect(() => {
    fetchGardenData(city);
    console.log(gardenList);
  }, []);
  //handling checkbox selection
  const [pickedGarden, setPickedGarden] = useState("");
  const handleChange = (event) => {
    console.log(event.target.name);

    setPickedGarden(event.target.name);
    console.log(pickedGarden);
    console.log(typeof pickedGarden);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("clicked submit");

    try {
      const response = await fetch(
        `https://community-garden-api.onrender.com/users/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ garden: pickedGarden }),
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        console.log("Data submitted successfully:", responseData);
      } else {
        console.error("Error submitting data:", response.status);
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }

    userInfo = userInfo + "_" + pickedGarden;
    console.log(userInfo);
    navigate(`/communitylanding/${userInfo}`);
  };
  if (!gardenList) {
    return <div>Loading...</div>;
  }
  return (
    <div className="localGardenContainer">
  <h1 className="gardenTitle">Community Gardens in {city}</h1>
  <h2 className="gardenSubtitle">Choose your garden.</h2>
  <form className="gardenForm" onSubmit={handleSubmit}>
    <ul className="gardenList">
      {gardenList.map((gardens) => (
        <div key={gardens.id} className="gardenItem">
          <input
            type="checkbox"
            id={gardens.name}
            name={gardens.name}
            value={gardens.name}
            onChange={handleChange}
          />
          <label htmlFor={gardens.name} className="gardenLabel">{gardens.name}</label>
        </div>
      ))}
    </ul>
    <button type="submit" className="submitButton">Select Garden</button>
  </form>
</div>
  );
};
export default LocalGardens;
