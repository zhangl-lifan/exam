import {observable, action} from 'mobx'

class Global{
    @observable locale: string='zh'

    // 按条件获取试题
    @action changeLocale(locale: string): void{
        this.locale = locale;
        console.log(this.locale)
    }
}

export default Global;