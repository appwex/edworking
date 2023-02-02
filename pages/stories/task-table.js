import TaskTable from 'components/task-table'
import Stories from 'components/stories'

import stl from './Stories.module.scss'

const arg = { arg: 'default' }

const TaskTableStory = () => (
  <Stories customClass={stl.taskTable} argList={[arg]} template={TaskTable} />
)

export default TaskTableStory
