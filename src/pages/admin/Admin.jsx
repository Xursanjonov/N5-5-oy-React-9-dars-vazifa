import React from 'react'

const Admin = () => {
  return (
    <div className="container mx-auto my-10 flex flex-col">
      <ul className="container mx-auto bg-white flex items-center justify-between">
        <li className="py-2 text-gray-500 font-semibold">Home / <span className="text-black">My Account</span> </li>
        <li className="py-2 text-black font-semibold">Welcome! <span className="text-orange-500">Md Rimel</span></li>
      </ul>
      <div className="w-full py-10 flex items-start justify-between">
        <ul className="w-[300px] flex flex-col gap-5">
          <li className="flex flex-col">
            <p className="mb-3 font-medium text-black">Manage My Account</p>
            <ul className="flex flex-col items-start gap-2 ms-9 font-semibold text-gray-500">
              <li className="text-orange-500">My Profile</li>
              <li>Address Book</li>
              <li>My Payment Options</li>
            </ul>
          </li>
          <li className="flex flex-col">
            <p className="mb-3 font-medium text-black">My Orders</p>
            <ul className="flex flex-col items-start gap-2 ms-9 font-semibold text-gray-500">
              <li>Address Book</li>
              <li>My Payment Options</li>
            </ul>
          </li>
          <li className="font-medium text-black">My WishList</li>
        </ul>
        <div className="w-[870px] h-[630px] shadow-lg flex flex-col items-start justify-center gap-5 rounded-xl">
          <h2 className="ms-40 text-orange-500 text-2xl font-semibold">Edit Your Profile</h2>
          <form className="w-[550px] mx-auto form-control flex flex-col gap-5">
            <div className="flex gap-8">
              <label className="fname">Firs Name
                <input className="w-[100%] px-2 py-1 border-2 border-gray-400 rounded-md text-black bg-white font-semibold" type="text" id="fname" placeholder="Md" required />
              </label>
              <label className="lname">Last Name
                <input className="w-[100%] px-2 py-1 border-2 border-gray-400 rounded-md text-black bg-white font-semibold" type="text" id="lname" placeholder="Rimel" required />
              </label>
            </div>
            <div className="flex items-center justify-between">
              <label className="email">Email
                <input className="w-[100%] px-2 py-1 border-2 border-gray-400 rounded-md text-black bg-white font-semibold" type="email" id="email" placeholder="rimel1111@gmail.com" required />
              </label>
              <label className="email">Address
                <input className="w-[100%] px-2 py-1 border-2 border-gray-400 rounded-md text-black bg-white font-semibold" type="text" id="address" placeholder="Kingston, 5236, United State" required />
              </label>
            </div>
            <label className="email flex flex-col items-start gap-3">Password Changes
              <input className="w-[100%] px-2 py-1 border-2 border-gray-400 rounded-md text-black bg-white font-semibold" type="password" id="currentPassword" placeholder="Current Passwod" required />
              <input className="w-[100%] px-2 py-1 border-2 border-gray-400 rounded-md text-black bg-white font-semibold" type="password" id="newPassword" placeholder="New Passwod" required />
              <input className="w-[100%] px-2 py-1 border-2 border-gray-400 rounded-md text-black bg-white font-semibold" type="password" id="confirmNewPassword" placeholder="Confirm New Passwod" required />
            </label>
            <div className="flex items-center justify-end gap-5">
              <button className=" px-5 py-1.5 font-semibold">Cancel</button>
              <button className="btn-secondary px-5 py-1.5 font-semibold border-orange-500 rounded-md text-white bg-orange-500">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Admin