import Gradient from '../components/Gradient'
import data from '../data/data'

function Project() {
  const { projects } = data;

  return (
    <div
    id="portfolio"
      className="relative isolate bg-white  pt-24 sm:pt-24 flex flex-col font-custom"
    >
      <Gradient />
      <div className="mx-auto max-w-7xl px-0 lg:px- flex-1">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            My projects
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Exploring the Power of JavaScript Frameworks and Libraries. Building
            Interactive Web Applications with JavaScript
          </p>
        </div>
        <div className="mx-auto border-t border-gray-200 pt-10 sm:mt-16 sm:pt-1 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="relative isolate  block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] "
                >
                  <div
                    className="mb-4 flex justify-center"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    <img
                      className=" h-24 w-28 rounded-full p-2"
                      src={project.imageSrc}
                      alt="logo"
                    />
                  </div>
                  <div className="p-6">
                    <h5 className="text-center mb-2 text-xl font-medium leading-tight text-gray-600 ">
                      {project.name}
                    </h5>
                    <p className="text-center mb-4 text-gray-600">
                      {project.description}
                    </p>
                    <div className="mt-10 my-auto flex flex-col text-center gap-x-6">
                      <a
                        href={project.git}
                        target="blank"
                        className="text-sm font-semibold leading-6 text-blue-900"
                      >
                        Git Hub Repo<span aria-hidden="true">&rarr;</span>
                      </a>
                      <a
                        href={project.link}
                        target="blank"
                        className="text-sm font-semibold leading-6 text-blue-900"
                      >
                        View Deployed App <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-sm py-0">
      </div>
    </div>
  );
}

export default Project;