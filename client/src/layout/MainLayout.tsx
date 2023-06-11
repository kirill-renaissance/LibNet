import Navbar from '../components/Navbar';

const MainLayout = ({ children }: any) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
