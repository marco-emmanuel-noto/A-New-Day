import React from "react"
import { Layout } from "./src/components/UI/Layout/Layout"

const wrapPageElement = ({ element}) => (
    <Layout>{element}</Layout>
  )
  
  export default wrapPageElement