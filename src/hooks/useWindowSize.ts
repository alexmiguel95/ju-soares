import { useState, useEffect } from 'react';
 
const useWindowSize = () => {
   const [windowSize, setWindowSize] = useState<number[]>([]);
  
   useEffect(() => {
       const handleResize = () => {
           setWindowSize([window.innerWidth, window.innerHeight]);
       }
  
       window.addEventListener("resize", handleResize);

       handleResize();
      
       return () => window.removeEventListener("resize", handleResize);
   }, []);
  
   return windowSize;
}
 
export default useWindowSize;