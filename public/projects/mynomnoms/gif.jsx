import React from "react"
import gifsrc from "./recording.gif"
import styled from "styled-components"

const Giffy = styled.img`
  float: left;
  margin: 0 2rem 0 0;
  padding: 1rem 0;
`
export default function Gif() {
  return <Giffy src={gifsrc} alt="animation gif" title="pwa" class="gif" />
}
