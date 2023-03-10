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
  selector: 'app-case-details-eng',
  templateUrl: './case-details-eng.component.html',
  styleUrls: ['./case-details-eng.component.css']
})
export class CaseDetailsEngComponent {
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
        result =value.engValue;

      }

    })
    return result;

  }

  getEngCaseType(NumericCode: String) {
    NumericCode =  NumericCode.toString();
    let result="";
    this.caseType.forEach(function (value){
      if(value.NumericCode == NumericCode){
        result =value.engValue;

      }

    })
    return result;

  }

  getSummaryResult(result: String){
    if(result == '1'){
      return 'Yes';
    }
    else {
      return 'No';
    }
  }
  getWitnessNum(result:String){
    result= result.toString();
    if(result == '-98' || result =='-99' || result == '-97'){
      return "MISSING DATA";
    }
    else{
      return result;
    }


  }
  getMethoud(result:String){
    if(result == '1'){
      return 'Audio recorded';
    }
    if(result == '2'){
      return 'Typed';
    }
    if(result == '3'){
      return 'No record';
    }
    if(result == '4'){
      return 'both Audio and Typed';
    }

    return 'MISSING DATA';
  }

  getDispostion(result: String) {
    if(result == '1'){
      return 'Article 79A of the courts law in Israel';
    }
    if(result == '8'){
      return 'Delay of arbitration';
    }
    if(result == '13'){
      return 'Suspension of proceedings';
    }
    if(result == '4'){
      return 'Judgment on the merits';
    }
    if(result == '20'){
      return 'Withdrawal of the claim';
    }
    if(result == '67'){
      return 'Consent judgment - giving effect to an agreement to reject the case ';
    }
    if(result == '78'){
      return 'Consent judgment -  giving effect to an agreement to withdraw the case';
    }
    if(result == '89'){
      return 'Consent judgment - giving effect to a settlement agreement';
    }
    if(result == '90'){
      return 'Consent judgment - giving effect to a mediation agreement ';
    }


    return 'MISSING DATA';
  }

  getCaseResult(result: String) {
    if(result == '1'){
      return 'Ruling in favor of the plaintiff';
    }
    if(result == '2'){
      return 'Ruling in favor of the defendant';
    }
    if(result == '3'){
      return 'Case dismissed';
    }
    if(result == '4'){
      return 'Suspension by arbitral proceedings';
    }
    if(result == '11'){
      return 'A decision granting only part of the remedies requested partial relief';
    }
    if(result == '24'){
      return 'Termination of proceedings';
    }
    if(result == '89'){
      return 'A compromise agreement - settlement of some sort ';
    }
    else{
      return " MISSING DATA ";
    }
  }
}
