// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'

import './index.css'

const AlertNotification = () => {
  const renderSuccessNotification = () => (
    <Notification>
      <AiFillCheckCircle className="icon green" />
      <div className="text-container">
        <h1 className="message-heading green">Success</h1>
        <p className="description">
          You can access all the files in the folder
        </p>
      </div>
    </Notification>
  )
  const renderErrorNotification = () => (
    <Notification>
      <RiErrorWarningFill className="icon red" />
      <div className="text-container">
        <h1 className="message-heading red">Error</h1>
        <p className="description">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
  )
  const renderWarningNotification = () => (
    <Notification>
      <MdWarning className="icon yellow" />
      <div className="text-container">
        <h1 className="message-heading yellow">Warning</h1>
        <p className="description">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
  )
  const renderInfoNotification = () => (
    <Notification>
      <MdInfo className="icon blue" />
      <div className="text-container">
        <h1 className="message-heading blue">Info</h1>
        <p className="description">
          Anyone on the internet can view these files
        </p>
      </div>
    </Notification>
  )
  return (
    <div className="app-container">
      <div className="alert-notification-container">
        <h1 className="heading">Alert Notifications</h1>
        {renderSuccessNotification()}
        {renderErrorNotification()}
        {renderWarningNotification()}
        {renderInfoNotification()}
      </div>
    </div>
  )
}

export default AlertNotification
