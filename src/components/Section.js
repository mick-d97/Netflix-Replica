const Section = (props) => {
  return (
    <>
      <div>
        <h1>{props.title}</h1>
      </div>
<div className="cat">
<div className="section">
        {props.image.map((src, index) => {
            // console.log(src);
           return(
              <img src={src} alt="" />
           )
        })}
      </div>
</div>
     
    </>
  );
};

export default Section;
