import { observable } from "mobx";

class State {
    @observable data = {
        input1 : '100',
        input2 : 'data2'
    }
}

export default new State()
