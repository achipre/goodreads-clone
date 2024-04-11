export const Category = ({children, className}) => {
  return (
    <p className={`bg-millbrook-100 inline-block text-millbrook-900 text-xs xs:text-sm px-2.5 py-0.5 rounded border border-millbrook-500 my-2 mt-3 ${className}`}>{children}</p>
  )
}
