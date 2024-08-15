import React,{useState} from 'react';
import CountryDropdown from './CountryDropdown';

const Profile = () => {
  const[profile,setProfile] = useState({
    firstName: 'Alvian',
    lastName: 'Putra',
    position: 'Interaction Designer at GoPay',
    email: 'abcd@gmail.com',
    phoneNumber: '+91xxxxxxxx',
    location: 'India',
    description: 'Hello, I am Alvian Putra I am a hard working, loyal and mature worker with a variety of skills to offer.A passionate developer skilled in web application development',
  });

  const [changeImage,setChangeImage] = useState(null)

  // change the profile image
  const handleImageChange =(event) => {
    const file = event.target.files[0];
    if(file){
    const imageUrl =URL.createObjectURL(file)
    setChangeImage(imageUrl);
    }
  }

  // Remove the profile image
  const handleImageRemove =() => {
    setChangeImage(null);
  }

  const handleChange = (e) => {
    const{name, value} = e.target;
    setProfile({...profile, [name]: value});
  }


  const handleSubmit =(e) => {
    e.preventDefault();
  }

return (
  <div>
  <div className="flex items-center">
    {changeImage ? (
          <img src={changeImage} alt="Profile" className="rounded-full w-24 h-24 mb-4" />
        ) : (
          <div className="placeholder-image rounded-full w-24 h-24 mb-4 bg-gray-200 flex items-center justify-center">No Image</div>
        )}
      
      <div className="flex flex-col ml-4 ">
      <label className="text-blue-600 hover:text-white border 
      border-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm px-4 py-2.5 
      text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 
      dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800" onClick={handleImageChange} >
        Change
        <input type="file"
        onChange={handleImageChange}
        style={{display:'none'}}
        accept='image/*'/>
      </label>
      <button className="text-blue-600 
      hover:text-white border border-blue-500 
      hover:bg-blue-800 font-medium rounded-lg text-sm px-5 
      py-2.5 text-center me-2 mb-2 
      dark:border-blue-500 dark:text-blue-500 
      dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
      onClick={handleImageRemove}>
        Remove
      </button>
      </div>
      
    </div>

    <form onSubmit={handleSubmit} className="w-full">
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label htmlFor="first_name" className="block mb-2 text-sm 
          font-medium text-gray-900 dark:text-white-500">First Name</label>
          <input
            type="text"
            name="firstName"
            value={profile.firstName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
          />
        </div>
        <div>
          <label htmlFor ="location" className="block mb-2 text-sm 
          font-medium text-gray-900 dark:text-white-500">Location</label>
          <CountryDropdown/>
        </div>
      <div>
        <label className="block mb-2 text-sm 
        font-medium text-gray-900 dark:text-white-500">Last Name</label>
        <input
          type="text"
          name="lastname"
          value={profile.lastName}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded"
        />
      </div>
      <div>
        <label className="block mb-2 text-sm 
        font-medium text-gray-900 dark:text-white-500">Email</label>
        <input
          type="text"
          name="Email"
          value={profile.email}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded"
        />
      </div>
      <div>
        <label className="block mb-2 text-sm 
        font-medium text-gray-900 dark:text-white-500">Phone Number</label>
        <input
          type="number"
          name="phoneNumber"
          value={profile.phoneNumber}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded"
        />
      </div>
      <div>
            <label className="block mb-2 text-sm 
            font-medium text-gray-900 dark:text-white-500">Description</label>
            <textarea
              name="description"
              value={profile.description}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded"
            />
          </div>

      <div>
        <label className="block mb-2 text-sm 
        font-medium text-gray-900 dark:text-white-500">Current Position</label>
        <input
          type="text"
          name="current-position"
          value={profile.position}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded"
        />
      </div>
      </div>

      <div className='flex items-center space-x-4 rtl:space-x-reverse'>
        <button type="submit" className="text-blue-700 hover:text-white 
        border border-blue-700 hover:bg-blue-800 
        font-medium rounded-lg text-sm px-5 py-2.5 
        text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 
        dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
        onClick={() => window.location.reload()}>
          Cancel
        </button>
        <button
          type="submit"
          className="text-white bg-[#1da1f2] hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
          >
          Update
        </button>
      </div>
    </form>
  </div>
// </div>
);
};
export default Profile;
