import NavBar from "../NavBar/NavBar";

const Dashboard = ({ children }) => {
  return (
    <div>
      <div className="container-fluid px-0 mb-5">
        <NavBar />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Dashboard;
