const Footer = () => {
  const date = new Date();

  const currentYear = date.getFullYear();

  return (
    <footer className="footer">
      <h3>Telefono: 0971 320 425</h3>
      <h3>&copy; {`${currentYear} | Infozoom S.R.L.`}</h3>
      <h3>Correo: jjcaimen@gmail.com</h3>
    </footer>
  );
};

export default Footer;
