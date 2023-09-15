
const Title = ({ title1, title2 }) => {
  return (
    <>
      <h1 className="flex gap-4 font-bold text-[60px] md:text-[80px]">{title1} <p className="text-color3">{title2}</p></h1>
    </>
  )
}

export default Title