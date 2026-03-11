export default function Card() {
    return (
      <div style={{
        width: "220px",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        overflow: "hidden",
        marginTop: "20px"
      }}>
        <img 
          src="/venue.jpg"
          alt="venue"
          style={{width:"100%", height:"150px", objectFit:"cover"}}
        />
  
        <div style={{padding:"10px"}}>
          <h3>The Bloom Pavilion</h3>
          <p>
            A stunning banquet hall where love blossoms and unforgettable memories are made.
          </p>
        </div>
      </div>
    );
  }