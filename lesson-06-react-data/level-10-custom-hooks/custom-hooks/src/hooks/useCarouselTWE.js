export function useCarouselTWE(){
    return
       useEffect(componentDidMount, MOUNT_PHASE);  
    

    function componentDidMount(){
    initTWE({ Carousel });
}

}