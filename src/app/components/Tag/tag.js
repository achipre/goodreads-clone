export const Tag = ({ children, className }) => {
  return (
    <p className={`bg-millbrook-400 inline-block cursor-pointer text-millbrook-50 text-xs xs:text-sm px-2.5 py-0.5 rounded border border-millbrook-400 my-2 mt-3 ${className}`}>{children}</p>
  )
}
