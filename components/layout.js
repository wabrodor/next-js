import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav/index"
const Layout = ({children}) =>{
    return (
      <>
        <Header />
        <Nav/>
        {children}
        <Footer />
      </>
    ); 
} 

export default Layout