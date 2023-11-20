export const Button = ({ children }) => {
  return (
    <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded">
      {children}
    </button>
  );
};
