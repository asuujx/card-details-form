function CardFront() {
  return (
    <div className="w-80 h-44 ml-6 pl-6 relative -top-20 front-background rounded-md text-white">
      <div className="flex mb-10 gap-4 place-items-center">
        <div className="w-10 h-10 rounded-full bg-white"></div>
        <div className="w-5 h-5 border-2 border-white rounded-full"></div>
      </div>
      <p className="text-2xl mb-3">0000 0000 0000 0000</p>
      <div className="flex justify-between text-sm">
        <p className="uppercase">Jane Appleseed</p>
        <p>00/00</p>
      </div>
    </div>
  );
}

export default CardFront;
