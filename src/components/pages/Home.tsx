import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <Link to="/buildings">
        <h1>BUILDINGS</h1>
      </Link>
      <p>The best buildings in town!</p>
    </div>
  )
}

export default Home;