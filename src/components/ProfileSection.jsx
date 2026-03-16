import React, { useState, useRef } from 'react';

const ProfileSection = () => {
    const [profile, setProfile] = useState({
        photo: null,
        fullName: 'Harshal Trivedi',
        email: 'harshal.trivedi@example.com',
        country: '',
        phoneNumber: '',
    });

    const fileInputRef = useState(null);
    const [editMode, setEditMode] = useState(false);

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

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Profile</h2>
                <form onSubmit={handleSubmit}>
                    <div className="flex justify-center mb-4">
                        <div className="relative w-32 h-32">
                            <img
                                src={profile.photo || 'https://via.placeholder.com/150'}
                                alt="Profile"
                                className="w-32 h-32 rounded-full object-cover"
                            />
                            {editMode && (
                                <label className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full cursor-pointer hover:bg-blue-600">
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
                        <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            value={profile.fullName}
                            onChange={handleChange}
                            disabled={!editMode}
                            className={`w-full p-2 border rounded ${editMode ? 'bg-white' : 'bg-gray-100'}`}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={profile.email}
                            onChange={handleChange}
                            disabled={!editMode}
                            className={`w-full p-2 border rounded ${editMode ? 'bg-white' : 'bg-gray-100'}`}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Country</label>
                        <input
                            type="text"
                            name="country"
                            value={profile.country}
                            onChange={handleChange}
                            disabled={!editMode}
                            className={`w-full p-2 border rounded ${editMode ? 'bg-white' : 'bg-gray-100'}`}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={profile.phoneNumber}
                            onChange={handleChange}
                            disabled={!editMode}
                            className={`w-full p-2 border rounded ${editMode ? 'bg-white' : 'bg-gray-100'}`}
                        />
                    </div>
                    <div className="flex justify-center">
                        {editMode ? (
                            <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                                Save
                            </button>
                        ) : (
                            <button type="button" onClick={() => setEditMode(true)} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                                Edit
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfileSection;
