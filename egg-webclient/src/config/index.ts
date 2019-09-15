/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-05 15:43:06
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-07 14:50:44
 */
export const sliderBar = [{
    id: "test",
    title: "试题管理",
    path: "/main/test",
    icon: "calendar",
    children: [
        {
        id: "Add",
        title: "添加试题",
        path: "/main/test/addQuestion"
    },
    {
        id: "Testlist",
        title: "试题分类",
        path: "/main/test/testlist"
    },{
        id: "CheckQuest",
        title: "查看试题",
        path: "/main/test/checkQuestion"
    }]
},
{
    id: "management",
    title: "用户管理",
    path: "/main/management",
    icon: "user",
    children:[
        {
            id: "Adduser",
            title: "添加用户",
            path: "/main/management/adduser"
        },{
            id: "Show",
            title: "用户展示",
            path: "/main/management/showuser"
        }
    ]
},
{
    id: "Examinations",
    title: "考试管理",
    path: "/main/examinations",
    icon: "barcode",
    children:[
        {
            id: "addExaminations",
            title: "添加考试",
            path: "/main/examinations/addExaminations"
        },
        {
            id: "listExaminations",
            title: "试卷列表",
            path: "/main/examinations/listExaminations"
        }
    ]
},
{
    id: "ClassManagement",
    title: "班级管理",
    path: "/main/classManagement",
    icon: "pic-center",
    children:[
        {
            id: "classRoom",
            title: "班级管理",
            path: "/main/classManagement/classRoom"
        },
        {
            id: "classment",
            title: "教室管理",
            path: "/main/classManagement/classment"
        },
        {
            id: "studentManagement",
            title: "学生管理",
            path: "/main/classManagement/studentManagement"
        }
    ]
},{
    id: "MarkingManagement",
    title: "阅卷管理",
    path: "/main/Marking",
    icon: "upload",
    children:[
        {
            id: "Marking",
            title: "待批班级",
            path: "/main/marking/page"
        }
    ]
}]