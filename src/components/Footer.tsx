const developers = ["고성인", "박진현", "백재혁", "김세림"];

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-blue-100/80 text-center text-gray-600 text-sm space-y-1">
      <p>© 2025 All rights reserved.</p>
      <p>Developed by {developers.join(", ")}</p>
    </footer>
  );
};

export default Footer;
