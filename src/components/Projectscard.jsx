import {ExternalLink} from "lucide-react";
const Projectscard = (props) => {
   const { title, description ,tag ,link ,size= "large"}=props
    const sizebox={
      medium:'w-64 h-48 ',
      large:'w-64 h-fit '
    }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
       <div className={`${sizebox[size]}  bg-white rounded-lg shadow-md p-6  `}>
       <h3 className="text-xl font-semibold mb-2">{title}</h3>
       <p className="text-gray-600 mb-4">{description}</p>
       <div className="flex flex-wrap gap-2 mb-4">
       <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                      {tag}
      </span>
      <a href={link} className="inline-flex items-center text-blue-600 hover:text-blue-800">
        View Project <ExternalLink size={16} className="ml-1" />
                </a>
       </div>

       </div>

      </div>
    );
};

export default Projectscard;