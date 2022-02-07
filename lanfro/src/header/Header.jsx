import './header.css'

const Header = () => {
  return (
    <>
    <div className="header">
      <div className="nav_left_block">
        <h2 className="navleft">LAUNDRY</h2>
      </div>

      <div className="nav_right_block">
        <div className="navhome">
          <p className="home">Home</p>
        </div>
        <div className="navpricing">
        <p className = "pricing">Pricing</p>
        </div>
        <div className="navcareer">
        <p className="career">Career</p>
        </div>
        <div className="navbtn">
          <p className="btn">SignIn</p>
        </div>
       
      </div>
    </div>
    </>
  );
};

export default Header;