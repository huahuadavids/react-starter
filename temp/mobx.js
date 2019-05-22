import {observable,action } from "mobx"

const appState = observable({
    count: 1
})

appState.add = function(){
    this.count++;
}


class State {
    @observable unit = 'C'
    @observable data = 24;

    @computed getData(){
        return this.data + this.unit;
    }

    @action("setting unit")
    setUnit(){
        this.unit = 'K'
    }
}