function isTouching(b1,b2){
    if(b1.x-b2.x<b1.width/2+b2.width/2&&
      b2.x-b1.x<b1.width/2+b2.width/2&&
      b2.y-b1.y<b1.height/2+b2.height/2&&
      b1.y-b2.y<b1.height/2+b2.height/2){
      //b2.shapeColor="red";
      //movingRect.shapeColor="red";
      return true;
    }
    else{
      //b2.shapeColor="green";
      //movingRect.shapeColor="green";
      return false;
    }
  }
  
  function bounceOff(h1,h2){if(h2.x-h1.x<h1.width/2+h2.width/2&&
    h1.x-h2.x<h1.width/2+h2.width/2){
      h2.velocityX=h2.velocityX*(-1);
      h1.velocityX=h1.velocityX*(-1);
    } 
    else if (h2.y-h1.y<h1.height/2+h2.height/2&&
    h1.y-h2.y<h1.height/2+h2.height/2){
      h2.velocityY=h2.velocityY*(-1);
      h1.velocityY=h1.velocityY*(-1);
    }
  }
  