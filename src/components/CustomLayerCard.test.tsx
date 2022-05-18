import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"

import CustomLayerCard from './CustomLayerCard'

describe('CustomLayerCard', () => {
  test("Renders label", () => {
    render(<CustomLayerCard id="test" label="testlabel" onSelect={() => null} selected={false} coverImg="https://url.to/image.jpg" imgAlt="image"/>)
    const labelElement = screen.getByText('testlabel')
    expect(labelElement).toBeDefined()
  })

  test("onSelect function gets called", () => {
    const onSelect = jest.fn()
    render(<CustomLayerCard id="test" label="testlabel" onSelect={onSelect} selected={false} coverImg="https://url.to/image.jpg" imgAlt="image"/>)
    const labelElement = screen.getByText('testlabel')
    fireEvent.click(labelElement)
    expect(onSelect).toHaveBeenCalledTimes(1)
  })
})
