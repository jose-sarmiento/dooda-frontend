const scrollWithOffset = (el, offset) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = offset; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

export default scrollWithOffset