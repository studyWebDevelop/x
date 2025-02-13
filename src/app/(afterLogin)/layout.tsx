interface HomeLayoutProps {
  children: React.ReactNode;
}

const AfterLoginLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div>
      <h1>AfterLoginLayout</h1>
      {children}
    </div>
  );
};

export default AfterLoginLayout;
