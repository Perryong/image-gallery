import os
import re
import json
from PIL import Image

def resize_image(file_path, new_width):
    img = Image.open(file_path)
    wpercent = (new_width / float(img.size[0]))
    hsize = int((float(img.size[1]) * wpercent))
    img = img.resize((new_width, hsize), Image.ANTIALIAS)
    return img

def rename_and_resize_images():
    current_directory = os.getcwd()
    files = os.listdir(current_directory)
    jpg_files = [f for f in files if f.endswith('.jpg')]
    jpg_files.sort(key=lambda f: int(re.search(r'\d+', f).group()) if re.search(r'\d+', f) else 0)
    
    mywidth = 1500
    next_image_number = int(input("Enter the next image number: "))
    json_data = []

    for file in jpg_files:
        new_name = f"{next_image_number}.jpg"
        file_path = os.path.join(current_directory, file)
        resized_img = resize_image(file_path, mywidth)
        resized_img.save(os.path.join(current_directory, new_name))
        json_data.append({"src": f"/{new_name}", "alt": str(next_image_number)})
        os.remove(file_path)
        next_image_number += 1


    with open('imagesList_solo.json', 'w') as json_file:
        json.dump(json_data, json_file, indent=4)

    

rename_new_images = rename_and_resize_images()