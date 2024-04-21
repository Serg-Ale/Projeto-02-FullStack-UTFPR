const CardContainer = ({ children }) => {
  return (
    <div className="flex flex-col border-2 rounded-3xl border-white hover:border-primary">
      {children}
    </div>
  );
};

export default CardContainer;
