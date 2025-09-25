function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 sm:p-4 md:p-8 md:max-w-sm max-w-xs mx-auto my-20 rounded-lg shadow-lg text-center hover:shadow-xl ">
      <img
        className="rounded-full w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto object-cover hover:scale-110 transition-transform duration-300 ease-in-out
        src="https://via.placeholder.com/150"
        alt="User"
      />
      <h1 className="text-lg sm:text-lg md:text-xl text-blue-800 my-4 font-bold hover:text-blue-500">
        John Doe
      </h1>
      <p className="text-sm sm:text-sm md:text-base text-gray-600">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
