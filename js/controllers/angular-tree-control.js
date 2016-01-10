/*
*  ngTreeCtrl
*/
(function(){
"use strict"
tempApp
.controller("ngTreeCtrl",ngTreeCtrlFn);
function ngTreeCtrlFn(){
    var vm = this;
    //树数据
    vm.treeData = [
                {
                    id:"1",
                    title:"标签1",
                    childList:[
                        {
                            id:"1-1",
                            title:"子级1",
                            childList:[
                                {
                                    id:"1-1-1",
                                    title:"再子级1",
                                    childList:[]
                                }
                            ]
                        },
                        {
                            id:"1-2",
                            title:"子级2",
                            childList:[
                                {
                                    id:"1-2-1",
                                    title:"再子级2",
                                    childList:[
                                        {
                                            id:"1-2-1-1",
                                            title:"再再子级1",
                                            childList:[]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id:"1-3",
                            title:"子级3",
                            childList:[]
                        }
                    ]
                },
                {
                    id:"2",
                    title:"标签2",
                    childList:[
                        {
                            id:"2-1",
                            title:"子级1",
                            childList:[]
                        },
                        {
                            id:"2-2",
                            title:"子级2",
                            childList:[]
                        },
                        {
                            id:"2-3",
                            title:"子级3",
                            childList:[]
                        }
                    ]}
                ,
                {
                    id:"3",
                    title:"标签3",
                    childList:[
                        {
                            id:"3-1",
                            title:"子级1",
                            childList:[]
                        },
                        {
                            id:"3-2",
                            title:"子级2",
                            childList:[]
                        },
                        {
                            id:"3-3",
                            title:"子级3",
                            childList:[]
                        }
                    ]
                }
            ];
    //树配置
    vm.treeOptions = {
      nodeChildren:"childList",
        dirSelectable:false
    };
};
})();