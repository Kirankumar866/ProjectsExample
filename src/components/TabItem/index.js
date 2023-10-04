import './index.css'

const TabItem = props => {
  const {tabDetails, Tabitemid, isActive} = props
  const {displayText, tabId} = tabDetails

  const TabItemBtn = () => {
    Tabitemid(tabId)
  }
  const btntext = isActive ? 'activeBtn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${btntext}`}
        onClick={TabItemBtn}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
