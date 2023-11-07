import Avatar from "./Avatar";

const Card = ({ data }) => {
  return (
    <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
      <a href={data.html_url} target="_blank" className="block w-full h-full">
        <img
          alt="blog photo"
          src="https://codersera.com/blog/wp-content/uploads/2021/06/Typescript-1.jpg"
          className="object-cover w-full max-h-40"
        />
        <div className="w-full p-4 bg-white dark:bg-gray-800">
          <p className="font-medium text-indigo-500 text-md">{data.language}</p>
          <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
            {data.name}
          </p>
          <p className="font-light text-gray-400 dark:text-gray-300 text-md">
            {data.description}
          </p>
          <div className="flex items-center mt-4">
            <div className="relative block">
              <Avatar
                name={data.owner.login}
                className="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </div>
            <div className="flex flex-col justify-between ml-4 text-sm">
              <p className="text-gray-800 dark:text-white">
                {data.owner.login}
              </p>
              <p className="text-gray-400 dark:text-gray-300">
                {data.full_name}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center mt-4 justify-starts">
            <div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
              #Car
            </div>
            <div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
              #Money
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
export default Card;
