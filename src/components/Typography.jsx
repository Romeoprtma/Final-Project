import classNames from "classnames";

function Typography({ size, weight, children, ...rest }) {
  return (
    <p className={
      classNames("",
        rest.className,
        {
          "text-[12px]": size === "xs",
          "text-[14px]": size === "sm",
          "text-[16px]": size === "md",
          "text-[20px]": size === "lg",
          "text-[42px]": size === "xl",
        },
        
        {
          "font-[400]": weight === "light",
          "font-[600]": weight === "normal",
          "font-[800]": weight === "bold",
        }
      )
    }>{children}</p>
  )
}

export default Typography;