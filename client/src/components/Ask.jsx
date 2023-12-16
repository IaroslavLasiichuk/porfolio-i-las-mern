import AddPost from "../components/AddPost";
import PostsList from "../components/PostsList";
import Error from "../components/Error";
import Gradient from "../components/Gradient";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";

const Ask = () => {
  const { loading, error, data } = useQuery(QUERY_ME);

  if (loading) {
    // Handle loading state, e.g., display a loading spinner
    return <Loading />;
  }

  if (error) {
    // Handle error state, e.g., display an error message
    return <Error message={error} />;
  }
  const { me } = data;

  return (
    <div className="">
      <Gradient />
      <div className="mx-auto max-w-7xl px-0 lg:px- flex-1">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mt-2 text-lg leading-8 text-gray-600">
            <br />
            Create a new post
          </p>
        </div>
        <div className="m-4">
          {Auth.loggedIn() ? <AddPost /> : null}
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-1"></div>
          {Auth.loggedIn() ? <PostsList /> : null}
        </div>
      </div>
    </div>
  );
};

export default Ask;
