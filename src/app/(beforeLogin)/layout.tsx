interface BeforeLoginLayoutProps {
  children: React.ReactNode;
  modal?: React.ReactNode;
}

const BeforeLoginLayout = ({ children, modal }: BeforeLoginLayoutProps) => {
  return (
    <div>
      {children}
      {modal}
    </div>
  );
};

export default BeforeLoginLayout;
