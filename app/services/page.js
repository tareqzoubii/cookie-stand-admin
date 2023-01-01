import Image from "next/image";

export default function services() {
     return (
       <div>
        <Image 
          className="text-lg leading-loose mb-4"
          src='/assets/error.jpg'
          width={200}
          height={110}
          alt="/about"
          style={{ display: 'block', margin: 'auto' }}
        >
      </Image>
         <p className="text-lg leading-loose mb-4">
           This page is comming soon!
         </p>
       </div>
     );
   }