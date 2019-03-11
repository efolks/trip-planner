
// {element: document.createElement('div').classList.add('circle')}

// const markers = {activity: `<img src="http://i.imgur.com/WbMOfMl.png">`,
// hotel: `<img src="http://i.imgur.com/D9574Cu.png">`,
// restaurant: `<img src="http://i.imgur.com/cqR6pUI.png">`}

module.exports = (mapboxgl, map) => {
    return (marker, coordinates) => {
        new mapboxgl.Marker({element: document.createElement('div').classList.add('circle')}).setLngLat(coordinates).addTo(map);
    }
}