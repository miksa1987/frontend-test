import React from "react"
import { Card, CardMedia, CardContent } from "@mui/material"

import Checkbox from "./Checkbox"

const CARD_WIDTH = "229px"
const CARD_HEIGHT = "150px"
const CARD_BORDER_RADIUS = "10px"
const CARD_FONT_FAMILY = "Plus Jakarta Sans"
const CARD_FONT_WEIGHT = "400"
const CARD_FONT_SIZE = "14px"
const CARD_IMG_HEIGHT = "100px"

type Variant = "basic" | "outline" | "double-outline"

type Props = {
  coverImg: string
  imgAlt: string
  selected: boolean
  onSelect: (e: React.ChangeEvent<HTMLInputElement>) => void
  label: string
  id: string
  variant?: Variant
}

const CustomLayerCard: React.VFC<Props> = ({ coverImg, imgAlt, selected, onSelect, label, id, variant = "basic" }) => {
  const border = (variant: Variant) => {
    if (variant === "basic") return "1px solid #efefef"
    else if (variant === "outline") return undefined
    return "1px solid #3d8479"
  }

  const boxShadow = (variant: Variant) => {
    if (variant === "basic") return "none"
    else if (variant === "outline") return "0px 0px 0px 2px #65E9D9"
    return "0px 0px 0px 2px #65E9D9"
  }

  return (
    <Card
      sx={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        borderRadius: CARD_BORDER_RADIUS,
        border: border(variant),
        boxShadow: boxShadow(variant),
        fontFamily: CARD_FONT_FAMILY,
        fontWeight: CARD_FONT_WEIGHT,
        fontSize: CARD_FONT_SIZE
      }}
    >
      <CardMedia component="img" height={CARD_IMG_HEIGHT} image={coverImg} alt={imgAlt} />
      <CardContent>
        <Checkbox id={id} label={label} selected={selected} onSelect={onSelect} />
      </CardContent>
    </Card>
  )
}

export default CustomLayerCard
