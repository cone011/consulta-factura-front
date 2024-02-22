const Footer = () => {
  const date = new Date();

  const currentYear = date.getFullYear();

  return (
    <footer className="footer">
      <h3>&copy; {`${currentYear} | Infozoom S.R.L.`}</h3>
    </footer>
  );
};

export default Footer;
