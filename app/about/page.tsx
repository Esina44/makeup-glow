import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="relative">
        <img
          src="https://i.pinimg.com/736x/31/71/5e/31715ee001ae25882a546a8144fac251.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-30">
          <h1 className="text-5xl font-bold ">About ESINA'S Makeup</h1>
          <p className="text-2xl max-w-2xl">
            We’re redefining beauty with love, confidence, and creativity where
            every shade tells a story.
          </p>
        </div>
      </div>
    </>
  );
}
