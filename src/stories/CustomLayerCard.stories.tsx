import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import CustomLayerCard from "../components/CustomLayerCard"

export default {
  title: "Example/CustomLayerCard",
  component: CustomLayerCard,
  argTypes: {}
} as ComponentMeta<typeof CustomLayerCard>

const Template: ComponentStory<typeof CustomLayerCard> = (args) => <CustomLayerCard {...args} />

export const Basic = Template.bind({})
Basic.args = {
  label: "Flood zone 3",
  id: "floodzone3",
  imgAlt: "A picture of a flood zone",
  coverImg: "https://globalnews.ca/wp-content/uploads/2019/07/flood-maps-1.png",
  onSelect: () => null,
  selected: false,
}

export const Outline = Template.bind({})
Outline.args = {
  label: "Flood zone 3",
  id: "floodzone3",
  imgAlt: "A picture of a flood zone",
  coverImg: "https://globalnews.ca/wp-content/uploads/2019/07/flood-maps-1.png",
  onSelect: () => null,
  selected: false,
  variant: "outline"
}

export const DoubleOutline = Template.bind({})
DoubleOutline.args = {
  label: "Flood zone 3",
  id: "floodzone3",
  imgAlt: "A picture of a flood zone",
  coverImg: "https://globalnews.ca/wp-content/uploads/2019/07/flood-maps-1.png",
  onSelect: () => null,
  selected: false,
  variant: "double-outline"
}
