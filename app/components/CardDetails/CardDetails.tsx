import CardBack from "./CardBack"
import CardFront from "./CardFront"

function CardDetails() {
  return (
    <div className="bg-mobile bg-cover w-full h-72 pt-10">
      <CardBack />
      <CardFront />
    </div>
  )
}

export default CardDetails