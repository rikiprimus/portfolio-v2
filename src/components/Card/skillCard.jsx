
const skillCard = ({ image, text }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[200px] w-[300px] rounded-2xl bg-color2 gap-4">
      <img src={image} alt="Logo-ReactJS" className="w-[100px]"/>
      <h1 className="font-bold text-xl">{text}</h1>
    </div>
  )
}

export default skillCard