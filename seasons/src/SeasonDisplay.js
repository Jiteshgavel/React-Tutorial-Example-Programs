import React from "react";
import './display.css';
const seasonConfig = {
    summer : {
        text: "Let's hit the beach",
        iconName:'fa-sun'
    },
    winter : {
        text: "Burr, it is chilly",
        iconName: 'fa-snowflake'
            // < i class= "fa-thin fa-snowflake" ></>
    }
};
const getSeason =(lat,month) =>{
    if(month > 2 && month < 9){
        return  lat > 0 ? 'summer' : 'winter';
    }else{
        return lat > 0 ? 'winter' : 'summer';
    }
}
{/* <i class="snowflake icon"></i> */}
const SeasonDisplay = (props)=>{
    console.log(props.lat);
    const season = getSeason(props.lat,new Date().getMonth());
    // const text = season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach';
    // const icon = season === 'winter' ? 'winter' : 'sun';

   const { text,iconName} = seasonConfig[season];

    console.log(season);
    return (<div className={`season-display ${season}`}> <i className={`fas icon-left  ${iconName} `} />
               <h1>{text}</h1>  
        <i className={` fas icon-right ${iconName} `} />
        </div>);
};

export default SeasonDisplay;