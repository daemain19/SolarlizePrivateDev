import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import profilePhoto from '../assests/pexels-sinileunen-5540774.jpg';

const ProfileSection = () => {
    const navigate = useNavigate();
    const [profile, setProfile] = useState({
        photo: profilePhoto,
        fullName: 'John Doe',
        email: 'john.doe@example.com',
        country: '',
        phoneNumber: '',
    });

    const [editMode, setEditMode] = useState(false);
    const fileInputRef = React.useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile(prevProfile => ({ ...prevProfile, [name]: value }));
    };

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfile(prevProfile => ({ ...prevProfile, photo: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setEditMode(false);
    };

    const handleExit = () => {
        navigate('/');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
            <div className="bg-[#2A2A2A] p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-white">Profile</h2>
                <form onSubmit={handleSubmit}>
                    <div className="flex justify-center mb-4">
                        <div className="relative w-32 h-32">
                            <img
                                src={profile.photo}
                                alt="Profile"
                                className="w-32 h-32 rounded-full object-cover border-2 border-[#E7FE4A]"
                            />
                            {editMode && (
                                <label className="absolute bottom-0 right-0 bg-[#E7FE4A] text-black p-2 rounded-full cursor-pointer hover:bg-opacity-80">
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        onChange={handlePhotoChange}
                                        className="hidden"
                                        accept="image/*"
                                    />
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121a2 2 0 00-1.414 0L12 5H4zm6 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                        <path d="M8.293 8.586l1.121 1.121a1 1 0 001.414 0l2.586-2.586a1 1 0 000-1.414L10.414 5.05A1 1 0 009.586 4.293zM16 10a1 1 0 11-2 0 1 1 0 012 0z" />
                                    </svg>
                                </label>
                            )}
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            value={profile.fullName}
                            onChange={handleChange}
                            disabled={!editMode}
                            className={`w-full p-2 border rounded ${editMode ? 'bg-[#3A3A3A] text-white' : 'bg-[#1A1A1A] text-gray-300'} border-gray-600`}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={profile.email}
                            onChange={handleChange}
                            disabled={!editMode}
                            className={`w-full p-2 border rounded ${editMode ? 'bg-[#3A3A3A] text-white' : 'bg-[#1A1A1A] text-gray-300'} border-gray-600`}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2">Country</label>
                        <input
                            type="text"
                            name="country"
                            value={profile.country}
                            onChange={handleChange}
                            disabled={!editMode}
                            className={`w-full p-2 border rounded ${editMode ? 'bg-[#3A3A3A] text-white' : 'bg-[#1A1A1A] text-gray-300'} border-gray-600`}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2">Phone Number</label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={profile.phoneNumber}
                            onChange={handleChange}
                            disabled={!editMode}
                            className={`w-full p-2 border rounded ${editMode ? 'bg-[#3A3A3A] text-white' : 'bg-[#1A1A1A] text-gray-300'} border-gray-600`}
                        />
                    </div>
                    <div className="flex justify-between">
                        {editMode ? (
                            <>
                                <button type="submit" className="bg-[#E7FE4A] text-black py-2 px-4 rounded hover:bg-opacity-80">
                                    Save
                                </button>
                                <button type="button" onClick={() => setEditMode(false)} className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600">
                                    Cancel
                                </button>
                            </>
                        ) : (
                            <>
                                <button type="button" onClick={handleExit} className="bg-[#E7FE4A] text-black py-2 px-4 rounded hover:bg-opacity-80">
                                    Homepage
                                </button>
                                <button type="button" onClick={() => setEditMode(true)} className="bg-[#E7FE4A] text-black py-2 px-4 rounded hover:bg-opacity-80">
                                    Edit
                                </button>
                            </>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfileSection;
