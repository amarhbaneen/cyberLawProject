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
  selector: 'app-type-search-heb',
  templateUrl: './type-search-heb.component.html',
  styleUrls: ['./type-search-heb.component.css']
})
export class TypeSearchHebComponent {
  selectedLevel: any;
  caseTypes= ["אחר - תקנה 3 (אגרות)", "חוזים", , "לשון הרע", "מקרקעין", "נזיקין- נזקי גוף",
    "כספית אחרת", "נזיקין- רשלנות רפואית", "פלתד",
    "קניין רוחני - פטנטים", "קניין רוחני אחר", "שיבוב וביטוח",
    "תביעה אחרת (שאינה כספית ואינה בגדר תקנה 3)", "נזיקין - תביעה אזרחית נגררת לפלילים"];
  Cases: CASE[]=CaseJson;
  courts :COURT[]=DistrictJson;
  caseType: case_matter[]=CaseTypetJson;
  showTable: boolean = false;
  showDetails: boolean = false;
  selectCaseNumber:String = "";
  showBar: boolean = true;
  selected() {
    this.showTable = true;

  }

  getHebDistrictName(court_district: String) {
    court_district =  court_district.toString();
    let result="";
    this.courts.forEach(function (value){
      if(value.courtNumber == court_district){
        result =value.engValue;

      }

    })
    return result;

  }

  getHebCaseType(NumericCode: String) {
    NumericCode =  NumericCode.toString();
    let result="";
    this.caseType.forEach(function (value){
      if(value.NumericCode == NumericCode){
        result =value.hebValue;

      }

    })
    return result;

  }

  sendNumberTodetails(case_num: String) {
    this.showDetails = true;
    this.selectCaseNumber = case_num;
    this.showTable = false;
    this.showBar = false;


  }
}
