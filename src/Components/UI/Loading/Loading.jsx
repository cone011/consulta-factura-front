const Loading = ({ message }) => {
  return (
    <>
      <div className="u-text-center">
        <h1 className="heading-secondary center">
          {message ? message : "Cargando...."}
        </h1>
      </div>
      <div className="u-text-center">
        <div className="loading">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </>
  );
};

export default Loading;
