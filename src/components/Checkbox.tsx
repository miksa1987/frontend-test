import React from "react"
import { FormControlLabel, Checkbox as MuiCheckbox, Typography } from "@mui/material"

type CheckboxProps = {
  selected: boolean
  onSelect: (e: React.ChangeEvent<HTMLInputElement>) => void
  label: string
  id: string
}
const Checkbox: React.VFC<CheckboxProps> = ({ onSelect, selected, label, id }) => (
  <FormControlLabel
    control={<MuiCheckbox id={id} sx={{ "& .MuiSvgIcon-root": { fontSize: 18.25 } }} checked={selected} onChange={onSelect} />}
    label={<Typography sx={{ fontFamily: "Plus Jakarta Sans", fontSize: "14px", fontWeight: "400" }}>{label}</Typography>}
  />
)

export default Checkbox
