
function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 md:p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg">
      <img className="rounded-full md:w-36 md:h-36 mx-auto" src="https://via.placeholder.com/150" alt="User" />
      <h1 className="sm:text-xl text-blue-800 my-4">John Doe</h1>
      <p className="text-gray-600 md:text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;