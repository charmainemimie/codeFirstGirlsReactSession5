const Home = ({source, profile, title, description, date, cost}) => {
    return (
      <div>
          <img src={source} alt=""/>
          <h4>{title}</h4>
          <p>{description}</p>
          <p>{date}</p>
          <p>{cost}</p>  
      </div>
    )
  }
  
  export default Home;