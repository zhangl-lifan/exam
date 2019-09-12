import {observable, action} from 'mobx'

class Global{
    @observable locale: string='zh'

    @action changeLocale(locale: string): void{
        this.locale = locale;
    }
}

export default Global;