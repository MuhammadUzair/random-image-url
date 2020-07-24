# random-image-url
This is JS random image url libaray. It can be use in any js framework (both front and backend).

**Installation and Integrate**  
1-Add in package.json file.(dependencies section)  
`"RandomImageUrl": "https://github.com/MuhammadUzair/random-image-url`  
and run `npm i` or `yarn`  
2-Add in js   
`import RandomImageUrl from 'random-image-url';`  
`RandomImageUrl({ `  
`type: 'user', width: 400, height: 400`  
`})` //return image url

You can change width, height and type.  
type is collection from `https://unsplash.com/collections`  
