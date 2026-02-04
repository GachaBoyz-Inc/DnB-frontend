interface TitleProps {
    text: string
    subText: string
    classProps?: string
}

const Title = ({ text, subText, classProps }: TitleProps) => {
  return (
    <div className={classProps}>
      <h1>{text}</h1>
      <h2>{subText}</h2>
    </div>
  )
}

export default Title