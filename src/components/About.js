import React from "react";

function About({image = "https://via.placeholder.com/215", about}){
    return(
        <aside>
            {/* {!image || image = " " ? null : <img src="https://via.placeholder.com/215"></img>} */}
            <img src={image} alt="blog logo"></img>
            <p>{about}</p>
        </aside>
    )
};

export default About;