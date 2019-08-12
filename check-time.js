let checkTime = function() {

  let date =  new Date();
  let hours = date.getHours();

  if(hours > 12){
      return 'Afternoon'
  }else if (hours > 18 && hours < 20){
      return 'Evening'
  }else if(hours < 5){
      return 'Night';
  }else{
      return 'Morning';
  }
   
  
};

module.exports = checkTime;
