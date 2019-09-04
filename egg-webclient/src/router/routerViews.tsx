/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-04 21:00:08
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-04 21:39:00
 */
import { Redirect, Route, Switch } from 'react-router-dom';
import * as React from 'react';
interface Props {
    routes: Array<object>
}

export default (props: Props) => {
    let { routes } = props;
    let Routes = routes.filter((item: { component: any; }) => item.component);
    let Redirs = routes.filter((item: { from: any }) => item.from);
    return <Switch>
    {
        Routes.map((item: any, index: number) => {
            return <Route key={ index } path = { item.path } render = {(props) => {
                if (item.children) {
                    return <item.component { ...props } routes = { item.children } > </item.component>
                } else {
                    return <item.component { ...props } > </item.component>
                }
            }
        }>
            </Route>
    })
}
{
Redirs.map((item: any, index: number) => {
    return <Redirect from={ item.from } key = { index } to = { item.to } > </Redirect>
})
}
</Switch>
}