import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import * as $ from 'jquery';
declare var moment: any;

@Component({
  selector: 'app-report-main',
  templateUrl: './report-main.component.html',
  styleUrls: ['./report-main.component.css']
})
export class ReportMainComponent implements OnInit {
	
	// @HostListener('document:click', ['$event'])
	// clickout(event: any) {
	// 	if (this.eRef.nativeElement.contains(event.target)) {
	// 		console.log(event.srcElement.className);
			
	// 		if (event.srcElement.className === 'pro_drop_list ch_rep') {
	// 			this.isProduct = false;
	// 			this.isContains = false;
	// 		} else if (event.srcElement.className === 'pro_drop_list') {
	// 			this.isShow = false;
	// 			this.isProduct = false;
	// 		} else if (event.srcElement.className === 'pro_drop_list pro_li_drop') {
	// 			this.isContains = false;
	// 			this.isShow = false;
	// 		} else if (event.srcElement.className === 'test') {
	// 			this.isShow = false;	
	// 			this.isProduct = false;
	// 			this.isContains = false;
	// 		} else {
	// 			this.isShow = false;	
	// 			this.isProduct = false;
	// 			this.isContains = false;
	// 		}
	// 	}else{
	// 		this.isShow = false;	
	// 		this.isProduct = false;
	// 		this.isContains = false;
	// 	}
	// }

  isShow = false;	
  isProduct = false;
  isContains = false;
  constructor(private eRef: ElementRef) { }

  ngOnInit() {
	// $(document).ready(function() {
	//   function setHeight() {
	//     let windowHeight = $(window).innerHeight();
	//     let reportMenu = $('.report_menu_section').height();
	//     let headerView = $('.header_view').height();
	    
	//     let removeHeight = windowHeight - reportMenu - headerView - 55;

	//     $('.container-fluid').css("height", removeHeight);

	     
	//   };
	//   setHeight();
	  
	//   $(window).resize(function() {
	//     setHeight();
	//   });
	// });

	// $(document).ready(function() {
	//   function setHeight1() {
	//     let windowHeight = $(window).innerHeight();
	//     let reportMenu = $('.report_menu_section').height();
	//     let headerView = $('.header_view').height();
	//     let rightHeaderView = $('.right_header_view').height();
	    
	//     let removeHeight = windowHeight - reportMenu - headerView - rightHeaderView - 70;

	//     $('.report_table_view').css("height", removeHeight);

	//      console.log(menuIcon, userProfile, removeHeight, windowHeight);
	//   };
	//   setHeight1();
	  
	//   $(window).resize(function() {
	//     setHeight1();
	//   });



	// });

	// $(document).ready(function() {

 //      var cb = function(start, end, label) {
 //        $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
 //      }
 //      var ranges = {
 //        'Today': [moment(), moment()],
 //        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
 //        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
 //        'Last 14 Days': [moment().subtract(13, 'days'), moment()],
 //        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
 //        'This Month': [moment().startOf('month'), moment().endOf('month')],
 //        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
 //      };
 //      var optionSet3 = {
 //        startDate: moment().subtract(16, 'days'),
 //        endDate: moment(),
 //        opens: 'left',
 //        showRangeInputsOnCustomRangeOnly: true,
 //        ranges: ranges
 //      };

 //      $('#reportrange span').html(moment().subtract(29, 'days').format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));
 //      $('#reportrange').daterangepicker(optionSet3, cb);
 //      $('#destroy').click(function() {$('#reportrange').data('daterangepicker').remove();});
 //   });

  }

  showFilters() {
  	if (this.isShow) {
  		this.isShow = false;
  	} else {
  		this.isShow = true;
  	}
  }
  showProduct() {
  	if (this.isProduct) {
  		this.isProduct = false;
  	} else {
  		this.isProduct = true;
  	}
  }
  showContains() {
  	if (this.isContains) {
  		this.isContains = false;
  	} else {
  		this.isContains = true;
  	}
  }
}
