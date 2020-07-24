# random-image-url
A javascript package for random image url. Fetched images from unsplash. It can be use in any javascript framework (both frontend and backend).

**Installation and Integrate**  
1-Add in package.json file.(dependencies section)  
`"random-image-url": "https://github.com/MuhammadUzair/random-image-url"`  
and run `npm i` or `yarn`  
2-Add in js   
`import RandomImage from 'random-image-url';` 
or
`const RandomImage = require('random-image-url');`  


`RandomImage.FetchImage({ `  
`type: 'user', width: 400, height: 400`  
`})`  
`.then((image)=>{`  
 `let randomImage = image;` //return image url  
`})` 

You can change width, height and type.  
type is collection from `https://unsplash.com/collections`  
