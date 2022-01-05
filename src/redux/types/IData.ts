import {ReportColorType} from '@constants/data';
export interface ICategory {
    id: string;
    name: string;
    workTypes: string[];
}

export interface ISubCategory {
    id: string;
    name: string;
    parentCategory: string[];
    type: string;
}

export interface ILocation {
    countReports: number;
    id: string;
    name: string;
    sectionType: string;
    status: string;
}

export interface IUser {
    actualFinishDate: string;
    anticipatedFinishDate: string;
    email: string;
    employees: string;
    firstName: string;
    id: string;
    language: string;
    lastName: string;
    locations: string[];
    number: number;
    role: string;
    salary: number;
    startDate: string;
    status: string;
    supervisor: string;
    type: string[];
    users: string[];
}

export interface IMachine {
    antFinishDate: string;
    categoryName: string;
    finishDate: string;
    hoursReported: number;
    id: string;
    machineCategoryIds: string[];
    name: string;
    price: number;
    reportIds: number[];
    startDate: string;
    status: string;
    totalCost: number;
}

export interface IMachinesCategories {
    id: string;
    name: string;
}

export interface IStringFieldProps {
    [key: string]: string;
}
export interface IReportType {
    color: ReportColorType;
    type: 'standard' | 'hindrance' | 'external'| 'editStandard' | 'editHindrance' | 'editExternal' | 'requestOrders';
}
export interface IMachinesCategory {
    id: string;
    name: string;
}
export interface IReport {
    endDate: string | null, 
    id: string, 
    locationIds: string[], 
    nameFromLocation: string, 
    nameFromWorkType: string, 
    startDate: string | null, 
    updateDate: string | null, 
    workTypeIds: string[]
}
export interface IReportById {
    creatorIds: string[], 
    date: string | null, 
    description: string | null, 
    emailFromCreator: string, 
    endDate: string | null, 
    id: string, 
    locationIds: string[] | [], 
    machineIds: string[] | null, 
    nameFromLocation: string | null, 
    nameFromMachines: string | null, 
    nameFromWorkType: string , 
    notificationIds: string[] | [], 
    photos: string[] | null, 
    priority: true | false | null, 
    type: string, 
    updateDate: string | null, 
    userIds: string[] | [], 
    workTypeIds: string[] | []
}
export interface IImpact {
    impact: 'time' | 'financial' | 'financialAndTime' | null ,
    id: string
}
