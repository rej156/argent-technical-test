/** @jsx jsx */
import React, { useState } from "react"
import { jsx } from "theme-ui"
import ArgentForm from "./ArgentForm"
import ArgentData from "./ArgentData"

interface IProps {
}

const ArgentContent: React.FunctionComponent<IProps> = props => {
  const [address, setAddress] = useState<string>('')
  const [submitting, setSubmitting] = useState<boolean>(false)

  return (
    <div>
      <ArgentForm setAddress={setAddress} isSubmitting={submitting}></ArgentForm>
      <ArgentData address={address} setSubmitting={setSubmitting}></ArgentData>
    </div>
  )
}

export default ArgentContent
