import { Component } from '@angular/core';
import CaseJson from "../../assets/data.json";
import DistrictJson from "../../assets/district.json";
import CaseTypetJson from "../../assets/case_type.json";
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
interface COURT{
  courtNumber : string;
  hebValue:string;
  engValue:string;
}
interface case_matter{
  NumericCode:string;
  hebValue:string;
  engValue:string;

}
@Component({
  selector: 'app-type-search-eng',
  templateUrl: './type-search-eng.component.html',
  styleUrls: ['./type-search-eng.component.css']
})
export class TypeSearchEngComponent {
  caseTypes =["Other matter - regulation 3 of the courts regulations (courts fees)","Contracts",
    "Financial claims","Torts - Defamation, libel, and slander","Real Estate",
    "Torts - personal injury - bodily harm","Torts -medical malpractice","Torts - bodily injury after a car accident",
    "Intelectual property - patent infringement ","Intelectual property - other","Insurance coverage cases",
    "Other matters that are not financial or in accordance with regulation 3 of the courts regulations (courts fees)",
    "Torts- the scheme of compensation for criminally inflicted personal injuries "];
  selectedLevel: any;
  Cases: CASE[]=CaseJson;
  courts :COURT[]=DistrictJson;
  caseType: case_matter[]=CaseTypetJson;
  showTable: boolean =false;



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

  selected() {
    this.showTable = true;

  }
}
