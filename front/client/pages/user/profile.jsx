import Profile from "../../component/Profile";
import Navigation from "../../component/Navigation"
import Info from "../../container/Info";
import SideMenu from "../../component/SideMenu";

const profil = () => {
  return (
    <>
        <Navigation/> 
        <Info>
            <SideMenu/>
            <Profile/>
        </Info>
        </>
  );
}

export default profil;