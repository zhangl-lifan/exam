import { getToken } from './index';
import store from '../store/login';

function guard(history: any) {
    beforeEach(history);
    const unlisten = history.listen((location: object) => {
        console.log('location', location);
        beforeEach(history);
    });
}

function beforeEach(history: any) {
    if (getToken()) {
        const userInfo: any = store.user.userInfo;
        if (!Object.keys(userInfo).length){
            store.user.getUserInfo();
        }
    } else {
        history.replace('/login');
    }
}

export function filterView(originRoutes: Array<object>, viewAutority: Array<object>): Array<object>{
    const forbiddenView: Array<object> = [];

    function func(originRoutes: Array<object>, viewAutority: Array<object>): Array<object>{
        const routes: Array<object> = [];
        originRoutes.forEach(({...item}:any)=>{
            if (item.children){
                item.children = func(item.children, viewAutority);
            }
            
            if(item.view_id){
                
                if (viewAutority.findIndex((value: any)=>value.view_id === item.view_id) !== -1){
                    routes.push(item);
                }else{
                    forbiddenView.push({from:item.path, to: '/403'});
                }
            }else{
                routes.push(item);
            }
        })
        return routes;
    }
    // https://jasonandjay.com/1701E/wangletian

    
    let routes = func(originRoutes, viewAutority);
    return forbiddenView.concat(routes);
}

export default guard;
