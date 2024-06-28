// import MyTable from "./table"
import {Link}   from 'react-router-dom';
function WelcomePage()
{   return(
    <>
     <h1>Hiii  welcome</h1>
    {/* <button onClick={MyTable}>hiii click me</button> */}
    <Link to="/table">Table</Link>


    </>
    )
   
   
}
export default WelcomePage