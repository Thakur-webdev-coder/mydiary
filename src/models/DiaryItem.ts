export interface DiaryItem {
    id?: number,
    subject: string;
    description:string;
    // date?:string;
    // time?:string;
    timeStamp: Date;
    images:any[];
}