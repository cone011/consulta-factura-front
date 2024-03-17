import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loading from "../Loading/Loading";

const ShowComponent = ({ typeComponent, message }) => {
  if (typeComponent === "loading") {
    return <Loading message={message} />;
  }

  if (typeComponent === "error") {
    return <ErrorMessage message={message} />;
  }
};

export default ShowComponent;
