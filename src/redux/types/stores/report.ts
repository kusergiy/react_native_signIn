import {ICategory, ISubCategory, ILocation, IMachine, IMachinesCategories, IReportType, IReport, IReportById, IImpact} from '@redux/types/IData';
export interface ReportAppState {
    categories: ICategory[] | [];
    subCategories: ISubCategory[] | [];
    locations: ILocation[] | undefined;
    activeCategory: ICategory | undefined;
    activeMachine: IMachine | undefined;
    activeMachineCategory: IMachine | undefined;
    activeSubCategory: ISubCategory | undefined;
    activeLocation: ILocation | undefined;
    machineCategories: IMachinesCategories[] | [];
    machines: IMachine[] | [];
    reportType: IReportType;
    date: string | null;
    endDate: string | null;
    machineSubCategories: IMachinesCategories[] | [];
    lastReports: IReport[] ;
    lastHindranceReports: IReport[];
    reportById: IReportById;
    priority: boolean
    price: number | null,
    impact: IImpact | null

}
