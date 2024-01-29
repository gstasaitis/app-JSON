import { Link } from "react-router-dom"

const Page404 = () => {
  return (
    <div className="page404">
      <h1 >Page404</h1>
      <h1 >Not Found</h1>
        <Link to="/" className="clearbutton">Go Back</Link>
    </div>
  )
}

export default Page404