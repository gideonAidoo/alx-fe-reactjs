function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 sm:p-4 md:p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg text-center">
      <img
        className="rounded-full w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto object-cover"
        src="https://via.placeholder.com/150"
        alt="User"
      />
      <h1 className="text-lg sm:text-lg md:text-xl text-blue-800 my-4 font-bold">
        John Doe
      </h1>
      <p className="text-sm sm:text-sm md:text-base text-gray-600">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
