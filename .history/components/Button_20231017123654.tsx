import Image from "next/image"
import { types } from "util"

types Bu
type: 'button' | 'submit'
title: 'string'
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