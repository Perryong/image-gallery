import fs from 'fs';
import path from 'path';

const publicFolder = '../public'; // Path to your public folder
const outputJsonFile = '../public/imagesList.json';

// Function to check if the file is an image
const isImage = (file) => {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg'];
    return imageExtensions.includes(path.extname(file).toLowerCase());
};

fs.readdir(publicFolder, (err, files) => {
    if (err) {
        console.error('Error reading public folder:', err);
        return;
    }

    const imageList = files
        .filter(isImage)
        .map(file => {
            return {
                src: `/${file}`,
                alt: file.replace(path.extname(file), '')
            };
        });

    fs.writeFile(outputJsonFile, JSON.stringify(imageList, null, 4), (err) => {
        if (err) {
            console.error('Error writing JSON file:', err);
            return;
        }
        console.log('imagesList.json has been created with image paths.');
    });
})