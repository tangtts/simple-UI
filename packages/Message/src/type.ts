
export type Itype = "success"|"warning" |"info" | "error"

export  interface IMeesageObj {
  id?:string
  message:string
  onClose?:Function,
  center?:boolean,
  offset?:number,
  duration:number
  type:Itype
} 
export type IMeesageOption =    IMeesageObj | string
