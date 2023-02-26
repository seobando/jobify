import { Outlet, Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout";

const SharedLayout = () => {
  return (
    <Wrapper>
      <nav>
        <Link to="add-job">add Job</Link>
        <Link to="all-jobs">all Jobs</Link>
      </nav>
      <Outlet />
    </Wrapper>
  );
};

export default SharedLayout;
