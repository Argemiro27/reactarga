import { useEffect, useState } from "react";
import { Loading } from "components";

export default function Main() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() =>{
        setIsLoading(false);
    },500);
  }, []);

  return (
    <> 
        {isLoading ? (
            <Loading /> 
        ): (
        <>
        </>
        )}
    </>
  );
}