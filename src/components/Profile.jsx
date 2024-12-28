import React from 'react';

const Profile = ({ src, alt, size = 'large' }) => {
  // Define size classes based on the size prop
  const sizeClasses = {
    small: 'w-12 h-12',
    medium: 'w-24 h-24',
    large: 'w-32 h-32'
  };

  return (
    <div className='grid place-items-center '>

        
        <div className={`relative ${sizeClasses[size]} overflow-hidden rounded-full bg-red-800  md:mr-10 lg:mr-20 `}>
          {src ? (
            <img
              src={src}
              alt={alt || 'Profile picture'}
              className="w-full h-full object-cover"
            />
          ) : (
            // Fallback placeholder when no image is provided
            <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
              <svg
                className="w-1/2 h-1/2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          )}
        </div>
        <h2 className='text-center  md:mr-10 lg:mr-20 text-gray-400 '>I'm Nwose Ifeanyi  </h2>
    </div>
      );
};

export default Profile;