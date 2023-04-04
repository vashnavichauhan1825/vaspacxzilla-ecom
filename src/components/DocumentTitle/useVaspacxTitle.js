import { useEffect } from "react";


const useVaspacxTitle = (title) => {
    useEffect(()=>{
        document.title=`Vaspacx | ${title}`
    },[title])
}

export { useVaspacxTitle };