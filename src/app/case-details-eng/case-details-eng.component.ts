import {Component, Input} from '@angular/core';
import CaseJson from "../../assets/data.json";
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
@Component({
  selector: 'app-case-details-eng',
  templateUrl: './case-details-eng.component.html',
  styleUrls: ['./case-details-eng.component.css']
})
export class CaseDetailsEngComponent {
  Cases: CASE[]=CaseJson;
  // @ts-ignore
  targetCase: CASE;
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

}
