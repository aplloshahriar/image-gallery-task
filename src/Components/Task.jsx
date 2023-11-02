import { useState } from 'react';

// image import 
import image1 from '../assets/images/image-1.webp';
import image2 from '../assets/images/image-2.webp'
import image3 from '../assets/images/image-3.webp';
import image4 from '../assets/images/image-4.webp';
import image5 from '../assets/images/image-5.webp';
import image6 from '../assets/images/image-6.webp';
import image7 from '../assets/images/image-7.webp';
import image8 from '../assets/images/image-8.webp';
import image9 from '../assets/images/image-9.webp';
import image10 from '../assets/images/image-10.jpeg';
import image11 from '../assets/images/image-11.jpeg';


// import css file for Task.jsx
import '../Components/Task.css';

// import the NavBar component
import NavBar from './NavBar.jsx';


const Task = () => {
    // set up the useState for images
    const [images, setImages] = useState([
        { src: image1, id: 1 },
        { src: image2, id: 2 },
        { src: image3, id: 3 },
        { src: image4, id: 4 },
        { src: image5, id: 5 },
        { src: image6, id: 6 },
        { src: image7, id: 7 },
        { src: image8, id: 8 },
        { src: image9, id: 9 },
        { src: image10, id: 10 },
        { src: image11, id: 11 },

    ]);

    // calculate the count of selected images
    const selectedCount = images.filter(image => image.selected).length;

    // function to handle the starting point of a drag event
    const handleDragStart = (event, index) => {
        event.dataTransfer.setData('index', index);
    };

    // function to handle dragging over an element
    const handleDragOver = (event) => {
        event.preventDefault();
    };

    // function to handle dropping an element
    const handleDrop = (event, index) => {
        const droppedIndex = event.dataTransfer.getData('index');
        const newImages = [...images];
        const temp = newImages[index];
        newImages[index] = newImages[droppedIndex];
        newImages[droppedIndex] = temp;
        setImages(newImages);
    };

    // function to toggle the selected state of an image
    const handleToggleSelect = (index) => {
        const newImages = images.map((image, i) =>
            i === index ? { ...image, selected: !image.selected } : image
        );
        
        setImages(newImages);
    };

    // function to handle deletion of selected images
    const handleDelete = () => {
        const newImages = images.filter((image) => !image.selected);
        setImages(newImages);
    };

    // function to handle the mouse entering an image area
    const handleMouseEnter = (index) => {
        const newImages = images.map((image, i) =>
            i === index ? { ...image, hovered: true } : image
        );
        setImages(newImages);
    };

    // function to handle the mouse leaving an image area
    const handleMouseLeave = (index) => {
        const newImages = images.map((image, i) =>
            i === index ? { ...image, hovered: false } : image
        );
        setImages(newImages);
    };

    return (
        <div>
            {/* NavBar component with deletion function and selected count */}

            <NavBar handleDelete={handleDelete} selectedCount={selectedCount} ></NavBar>

            <div className="card-container">

                {/* display image gallery with drag and drop functionality */}
                {images.map((image, index) => (
                    <div
                        key={image.id}
                        className="cards"
                        onDragOver={(event) => handleDragOver(event)}
                        onDrop={(event) => handleDrop(event, index)}
                    >
                        <figure
                            style={{ position: 'relative' }}
                            draggable
                            onDragStart={(event) => handleDragStart(event, index)}
                        >

                            {/* show the checkbox on image hover  */}
                            <div className="image-wrapper"
                                onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave(index)}
                            >
                                <img src={image.src}  />
                                <input
                                    type="checkbox"
                                    className={`checkButton ${image.hovered ? 'show' : ''}`}
                                    // id={`checkbox-${index}`}
                                    checked={image.selected}
                                    onChange={() => handleToggleSelect(index)}
                                />
                            </div>

                        </figure>
                    </div>
                ))}
            </div>
        </div>


    );
};

export default Task;
