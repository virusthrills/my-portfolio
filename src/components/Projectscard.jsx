
const Projectscard = (props) => {
    const { title, description , src} = props;
    
  return (
    <div className="relative w-64 h-80 rounded-lg bg-[red] overflow-hidden group">
      {/* Card Image */}
      <div className="absolute inset-0">
        <img 
          src = {src} 
          alt="Card background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Title - Always Visible */}
      <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/50 to-transparent">
        <h3 className="text-white text-xl font-bold"> { title}</h3>
      </div>
      
      {/* Overlay with Description - Visible on Hover */}
      <div className="absolute inset-0 bg-black/70 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-center">
         {description}
        </p>
      </div>
    </div>
  );
};

export default Projectscard;