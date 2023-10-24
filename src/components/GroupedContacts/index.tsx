import React from 'react'
import { GithubOutlined, LinkedinOutlined, WhatsAppOutlined } from '@ant-design/icons'

function GroupedContacts() {
  return (
    <div className='flex gap-2'>
      <LinkedinOutlined />
      <WhatsAppOutlined />
      <GithubOutlined />
    </div>
  )
}

export default GroupedContacts