import { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import PlusIcon from 'assets/svg/plus-circle.svg'
import DragableDotsIcon from 'assets/svg/draggabledots.svg'
import AngleDown from 'assets/svg/angle-down.svg'

import stl from './TaskTable.module.scss'

const TaskTable = ({ customClass }) => {
  const [val, setVal] = useState('Backlog')
  const [icon, setIcon] = useState(<DragableDotsIcon />)

  return (
    <div className={clsx(stl.container, customClass)}>
      <div
        onMouseLeave={() => setIcon(<DragableDotsIcon />)}
        className={stl.header}
      >
        <div className={stl.leftHeader}>
          <button className={stl.btn}>
            <PlusIcon />
          </button>
          <input
            className={stl.input}
            value={val}
            onChange={e => setVal(e.target.value)}
          />
        </div>

        <div
          onMouseEnter={() => setIcon(<AngleDown />)}
          onMouseLeave={() => setIcon(<DragableDotsIcon />)}
          className={stl.rightHeader}
        >
          <button className={stl.btn}>{icon}</button>
        </div>

        {/* <div className={clsx(stl.gridDropdown, showIconOp && stl.show)}>
          
        </div> */}
      </div>
    </div>
  )
}

TaskTable.propTypes = {
  customClass: PropTypes.string,
}

export default TaskTable
