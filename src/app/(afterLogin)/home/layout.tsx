interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div>
      <h1>Home Layout</h1>
      {children}
    </div>
  );
};

export default HomeLayout;
