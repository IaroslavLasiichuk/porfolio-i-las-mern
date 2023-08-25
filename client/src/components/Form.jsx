import Gradient from "../components/Gradient";
import { useFormState } from "../hooks/useFormState";

function Form() {
  const { mailerState, handleStateChange, submitEmail } = useFormState();

  return (
    <div
      id="contact"
      className="relative isolate bg-white min-h-screen pt-24 sm:pt-24 flex flex-col"
    >
      <Gradient />
      <div className="mx-auto max-w-7xl px-0 lg:px- flex-1">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Contact Me
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Would you like to contact me please fill out the info below and I
            will be in touch
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-1">
          <form
            onSubmit={submitEmail}
            className="mx-auto max-w-7xl px-0 lg:px- flex-1"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mx-8 ">
              <div>
                <label
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    onChange={handleStateChange}
                    value={mailerState.firstName}
                    name="firstName"
                    id="firstName"
                    required
                    autoComplete="first-name"
                    className="block mb-3 px-3 w-full p-3 text-sm text-black-800 bg-white rounded-lg border focus:ring-0 dark:text-black dark:placeholder-gray-400"
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    onChange={handleStateChange}
                    value={mailerState.lastName}
                    name="lastName"
                    id="lastName"
                    required
                    autoComplete="family-name"
                    className="block mb-3 px-3 w-full p-3 text-sm text-black-800 bg-white rounded-lg border focus:ring-0 dark:text-black dark:placeholder-gray-400"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    onChange={handleStateChange}
                    value={mailerState.email}
                    name="email"
                    id="email"
                    required
                    autoComplete="email"
                    className="block mb-3 px-3 w-full p-3 text-sm text-black-800 bg-white rounded-lg border focus:ring-0 dark:text-black dark:placeholder-gray-400"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Company
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    onChange={handleStateChange}
                    value={mailerState.company}
                    name="company"
                    id="company"
                    required
                    autoComplete="company"
                    className="block mb-3 px-3 w-full p-3 text-sm text-black-800 bg-white rounded-lg border focus:ring-0 dark:text-black dark:placeholder-gray-400"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    onChange={handleStateChange}
                    value={mailerState.message}
                    id="message"
                    required
                    rows={4}
                    className="block mb-3 px-3 w-full p-3 text-sm text-black-800 bg-white rounded-lg border focus:ring-0 dark:text-black dark:placeholder-gray-400"
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                onSubmit={submitEmail}
                className="mx-auto block w-9/12 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-white shadow-sm py-0"></div>
    </div>
  );
}

export default Form;
