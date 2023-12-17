interface ContainerProps{
children:React.ReactNode
}
export const Container:React.FC <ContainerProps> = ({children}) => {
  return (
    <div
    className="
    max-w-[1]
    mx-auto
    xl:px-20
    mx:px-2
    px-4">{children}</div>
  )
}
