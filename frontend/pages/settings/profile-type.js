import ScrollFrame from '../../components/frames/ScrollFrame.jsx'
import SettingsWrapper from '../../components/pages/settings'
import Button from '../../components/UI/Button/Button.jsx'
import Input from '../../components/UI/Input/Input.jsx'



const Settings = () => {
  return (
    <ScrollFrame navigation={true}>
      <SettingsWrapper>
        <span className="text-big">Profile type</span>
      </SettingsWrapper>
    </ScrollFrame>
  )
}


export default Settings
