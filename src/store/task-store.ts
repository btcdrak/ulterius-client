import alt from "../alt"
import AbstractStoreModel from "./abstract-store"
import taskActions from "../action/task-actions"

interface State {
    tasks: TaskInfo[]
}

class TaskStore extends AbstractStoreModel<State> {

    tasks: TaskInfo[]

    constructor() {
        this.bindListeners({
            handleUpdateTasks: taskActions.updateTasks
        })
        super()
    }

    handleUpdateTasks(tasks: TaskInfo[]) {
        this.tasks = tasks
    }
}

export let taskStore = alt.createStore<State>(TaskStore, "TaskStore")
export default taskStore
