import Image from "next/image"

type:
title:
icon?: 'string'
variant: 'btn_dark_green'

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
<button 
type='button'
>
Login
</button> 
)
}

export default Button