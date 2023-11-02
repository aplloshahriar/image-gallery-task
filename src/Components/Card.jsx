
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
import { useState } from 'react';
// import images first


const Task = () => {
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
        // ... (other image objects)
    ]);

    const handleDragStart = (e, index) => {
        e.dataTransfer.setData('index', index);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e, index) => {
        const droppedIndex = e.dataTransfer.getData('index');
        const newImages = [...images];
        const temp = newImages[index];
        newImages[index] = newImages[droppedIndex];
        newImages[droppedIndex] = temp;
        setImages(newImages);
    };




    return (

        <div>
            <div className="grid grid-cols-5 gap-4 m-8">
                {images.map((image, index) => (
                    <div
                        key={image.id}
                        onDragOver={(e) => handleDragOver(e)}
                        onDrop={(e) => handleDrop(e, index)}
                        className="card w-64 bg-base-100 shadow-xl image-full ">

                        <figure
                            draggable
                            onDragStart={(e) => handleDragStart(e, index)}
                        >
                            <img src={image} alt={`Image ${index}`} />
                        </figure>
                        <div className="card-body" >
                            {/* <h2 className="card-title">Shoes!</h2> */}
                            {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                            <div className="card-actions justify-end " >
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
};

export default Task;