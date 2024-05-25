export class GuiModel {
    private _guiModel = {
        "application": {
            "title": "DevOpsDemo FS2024",
            "formList": [
                {
                    "id": "OwnUserForm",
                    "title": "NotImplemented",
                    "formFieldList": [
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "NotImplementedForm",
                    "title": "Not Implemented",
                    "url": "/dummyform",
                    "headerVisible": false,
                    "footerVisible": false,
                    "borderStyle": "None",
                    "formFieldList": [
                        {
                            "id": "NotImplemented",
                            "type": "label",
                            "name": "NotImplementedMessage",
                            "width": 2
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "NotImplementedFormModal",
                    "title": "NotImplemented",
                    "url": "/dummyform",
                    "formFieldList": [
                        {
                            "id": "NotImplemented",
                            "type": "label",
                            "name": "NotImplementedMessage",
                            "width": 2
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "ToDoForm",
                    "title": { default: "ToDo" },
                    "url": "/todo",
                    "formFieldList": [
                        {
                            "id": "title",
                            "type": "text",
                            "name": { default: "Titel" },
                            "required": true,
                            "width": 2
                        },
                        {
                            "id": "description",
                            "type": "text",
                            "name": { default: "Text" },
                            "newRow": true,
                            "maxLength": 4000,
                            "height": 4,
                            "width": 2
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "ToolForm",
                    "title": { default: "Tool" },
                    "url": "/checkHealth",
                    "formFieldList": [
                        {
                            "id": "title",
                            "type": "text",
                            "name": { default: "Toolname" },
                            "required": true
                        },
                        {
                            "id": "origin",
                            "type": "text",
                            "name": { default: "Toolhersteller" }
                        },
                        {
                            "id": "description",
                            "type": "text",
                            "name": { default: "Funktionen" },
                            "newRow": true,
                            "maxLength": 4000,
                            "height": 4,
                            "width": 2
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                }
            ],
            "pageList": [
                {
                    "id": "mainmenu",
                    "name": "MainMenu",
                    "elementList": [
                        {
                            "type": "pageLabel",
                            "value": "<h4>Willkommen bei DevOps</h4>",
                            "newRow": true
                        },
                        {
                            "type": "button",
                            "name": { default: "ToDo-List" },
                            "icon": "fa-file-alt",
                            "color": "wet-asphalt",
                            "page": "toDoPage",
                            "width": 2,
                            "newRow": true
                        },
                        {
                            "type": "button",
                            "name": { default: "DevOps-Aufgabe" },
                            "icon": "fa-file-alt",
                            "color": "wet-asphalt",
                            "page": "toDoPage",
                            "width": 2,
                            "newRow": true
                        },
                        {
                            "type": "button",
                            "name": { default: "Systemstatus" },
                            "icon": "fa-file-alt",
                            "color": "wet-asphalt",
                            "page": "checkHealthPage",
                            "width": 2,
                            "newRow": true
                        }
                    ]
                },
                {
                    "id": "toDoPage",
                    "elementList": [
                        {
                            "type": "backbutton"
                        },
                        {
                            "type": "newButton",
                            "name": { default: "Neues ToDo" },
                            "icon": "fa-user",
                            "color": "green",
                            "width": 2,
                            "form": {
                                "form": "ToDoForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "ToDo",
                            "icon": "fa-user",
                            "color": "wet-asphalt",
                            "search": true,
                            "url": "/todo",
                            "form": {
                                "form": "ToDoForm"
                            }
                        }
                    ]
                },
                {
                    "id": "checkHealthPage",
                    "elementList": [
                        {
                            "type": "backbutton"
                        },
                        {
                            "type": "newButton",
                            "name": { default: "Neues Check-Tool" },
                            "icon": "fa-list",
                            "color": "yellow",
                            "width": 2,
                            "form": {
                                "form": "ToolForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "Check-Tools",
                            "icon": "fa-list",
                            "color": "orange",
                            "search": true,
                            "url": "/recipe",
                            "form": {
                                "form": "ToolForm"
                            }
                        }
                    ]
                }
            ]
        }
    };

    get guiModel() {
        return this._guiModel;
    }
}