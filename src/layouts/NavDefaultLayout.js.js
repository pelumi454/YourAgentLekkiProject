import Navbar from "../components/Navbar/Navbar";

const NavDefaultLayout = ( { children } ) =>{
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default NavDefaultLayout;
