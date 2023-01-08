import {Component, Input} from '@angular/core';
import CaseJson from "../../assets/data.json";

import CaseTypetJson from "../../assets/case_type.json";
import DistrictJson from "../../assets/district.json";
interface CASE {
  trial_year: String;
  court_district: String;
  date_open: String;
  date_close: String;
  case_num: String;
  case_matter:String;
  cnt_pretrial_hrng: String;
  date_first_pretrial_hrng:String;
  date_last_pretrial_hrng:String;
  summary_pretrial_hrng:String;
  date_defense_statement:String;
  cnt_witness_and_experts_depos: String;
  cnt_witness_and_experts_testimony:String;
  cnt_trial_hrng:String;
  date_first_trial_hrng:String;
  date_last_trial_hrng:String;
  transcription:String;
  num_protocol_pages_recorded: String;
  num_protocol_pages_typed: String;
  num_protocol_pages_typed_standardized: String;
  final_num_protocol_pages:String;
  date_final_hrng: String;
  type_summary:String;
  date_oral_summaries: String;
  date_written_summaries: String;
  date_final_summary: String;
  cnt_requests: String;
  cnt_essential_requests:String;
  cnt_requests_after_closing:String;
  disposition: String;
  result: String;


}
interface case_matter{
  NumericCode:string;
  hebValue:string;
  engValue:string;
}
interface COURT{
  courtNumber : string;
  hebValue:string;
  engValue:string;
}

@Component({
  selector: 'app-case-details-heb',
  templateUrl: './case-details-heb.component.html',
  styleUrls: ['./case-details-heb.component.css']
})
export class CaseDetailsHebComponent {
  Cases: CASE[]=CaseJson;
  // @ts-ignore
  targetCase: CASE;
  caseType: case_matter[]=CaseTypetJson;
  courts :COURT[]=DistrictJson;
  @Input() CaseNumber:any;

  ngOnInit(){
    this.Cases.forEach((value) =>{
      if(value.case_num == this.CaseNumber){
        this.targetCase = value;

      }
    })

  }
  constructor() {
    this.Cases.forEach((value) =>{
      if(value.case_num == this.CaseNumber){
        this.targetCase = value;

      }
    })
  }
  getEngDistrictName(court_district: String) {
    court_district =  court_district.toString();
    let result="";
    this.courts.forEach(function (value){
      if(value.courtNumber == court_district){
        result =value.hebValue;

      }

    })
    return result;

  }

  getEngCaseType(NumericCode: String) {
    NumericCode =  NumericCode.toString();
    let result="";
    this.caseType.forEach(function (value){
      if(value.NumericCode == NumericCode){
        result =value.hebValue;

      }

    })
    return result;

  }

  getSummaryResult(result: String){
    if(result == '1'){
      return 'כן';
    }
    else {
      return 'לא';
    }
  }
  getWitnessNum(result:String){
    result= result.toString();
    if(result == '-98' || result =='-99' || result == '-97'){
      return "חסר נתונים";
    }
    else{
      return result;
    }


  }
  getMethoud(result:String){
    if(result == '1'){
      return 'מוקלט';
    }
    if(result == '2'){
      return 'מוקלד';
    }
    if(result == '3'){
      return 'אין תיעוד';
    }
    if(result == '4'){
      return 'מוקלד ומתומלל';
    }

    return 'חסר נתונים';
  }

  getDispostion(result: String) {
    if(result == '1'){
      return 'סעיף 79א לחוק בתי המשפט';
    }
    if(result == '8'){
      return 'פסק דין/החלטה';
    }
    if(result == '13'){
      return 'עיכוב בוררות';
    }
    if(result == '4'){
      return 'התליית הליכים';
    }
    if(result == '20'){
      return 'נדחה/נמחק לבקשת התובע';
    }
    if(result == '67'){
      return 'דחייה בעקבות פשרה';
    }
    if(result == '78'){
      return 'מחיקה בעקבות פשרה';
    }
    if(result == '89'){
      return 'פשרה עם תוקף של פסק דין';
    }
    if(result == '90'){
      return 'גישור עם תוקף של פסק דין';
    }


    return 'חסר נתונים';
  }

  getCaseResult(result: String) {
    if(result == '1'){
      return 'התביעה התקבלה';
    }
    if(result == '2'){
      return 'התביעה נדחתה';
    }
    if(result == '3'){
      return 'התביעה נמחקה';
    }
    if(result == '4'){
      return 'עיכוב בוררות';
    }
    if(result == '11'){
      return 'התביעה התקבלה חלקית';
    }
    if(result == '24'){
      return 'הפסקת הליכים';
    }
    if(result == '89'){
      return 'פשרה או גישור עם תוקף של פסק דין';
    }
    else{
      return "חסר נתונים ";
    }
  }

}
