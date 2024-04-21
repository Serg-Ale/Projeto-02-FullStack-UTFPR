const CardContainer = ({ children }) => {
  return (
    <div className="group flex flex-col border-2 bg-background rounded-3xl border-white hover:border-primary hover:first-line:text-primary">
      {children}
    </div>
  );
};

export default CardContainer;
