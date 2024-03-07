const TimerText = ({count}) =>{


    var hrs = Math.floor(count/3600);
    var x = count%3600;
    var min = Math.floor(x/60); //minutes
    var sec = count%60; //seconds
    


    return(
        <>
      
        <div className="card">
          
        {hrs} : {min} : {sec}
          
         </div>
      </>
    )
}
export default TimerText