const CardContainer = ({ children }) => {
  return (
    <div className="group flex flex-col sm:flex-row   bg-background rounded-3xl border-[2px] border-white hover:border-primary hover:first-line:text-primary">
      {children}
    </div>
  );
};

export default CardContainer;
