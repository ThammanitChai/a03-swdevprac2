export default function Banner() {
    return (
      <div style={{textAlign:"center"}}>
        
        <img
          src="/banner.jpg"
          alt="banner"
          style={{
            width:"100%",
            height:"350px",
            objectFit:"cover"
          }}
        />
  
        <h1>where every event finds its venue</h1>
  
        <p>
          Finding the perfect venue for weddings,
          meetings and special events.
        </p>
  
      </div>
    )
  }