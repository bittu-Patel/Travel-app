import Image from "next/image"

types ButtonProps = {
type: 'button' | 'submit';
title: 'string';
icon?: 'string'
variant: 'btn_dark_green'
}
const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
<button 
type='button'
>

    {icon && <Image src={icon} alt={title} width={24} height={24} />}
Login
</button> 
)
}

export default Button