import Image from "next/image";
export default function about() {
  return (
    <div >
      <Image 
          className="text-lg leading-loose mb-4"
          src='/assets/aboutus.png'
          width={120}
          height={70}
          alt="/about"
          style={{ display: 'block', margin: 'auto' }}
        >
      </Image>
      <p className="text-lg leading-loose mb-4">
        Welcome to our cookie application! You can use this app to order your
        cookies Our mission is to bring joy to people's lives through the magic
        of baked goods Thank you for choosing us!
      </p>
      
    </div>
  );
}